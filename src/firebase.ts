import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp,
  deleteDoc,
  doc
} from 'firebase/firestore';

// Firebase credentials obtained from App SDK Config or environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAWYOpSR8VjwtsjcSJ2_ztNZAw19py4CRE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "car-project-60ca3.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "car-project-60ca3",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "car-project-60ca3.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "993135362157",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:993135362157:web:e8498631b0a6fa760f7f64",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-8R6MJEK6K1"
};

export interface CommentItem {
  id: string;
  name: string;
  content: string;
  brand: string;
  type: 'normal' | 'danmaku';
  speed: 'slow' | 'normal' | 'fast';
  color: string;
  timestamp: number; // milliseconds
}

let db: any = null;
let offlineMode = false;

try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (e) {
  console.warn("Firebase initialization failed, running in Offline LocalStorage Mode:", e);
  offlineMode = true;
}

// Helper to get local comments
const getLocalComments = (): CommentItem[] => {
  try {
    const data = localStorage.getItem('apex_veloce_comments');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
};

// Helper to save local comments
const saveLocalComments = (comments: CommentItem[]) => {
  try {
    localStorage.setItem('apex_veloce_comments', JSON.stringify(comments));
  } catch (e) {
    console.error("Failed to save comments to localStorage:", e);
  }
};

/**
 * Checks if the system is currently using offline fallback mode.
 */
export const isOfflineMode = () => offlineMode;

/**
 * Subscribes to real-time comment updates.
 * @param onUpdate Callback function that receives the list of comments
 * @param onError Optional callback function for errors
 * @returns Unsubscribe function
 */
export const subscribeComments = (
  onUpdate: (comments: CommentItem[]) => void,
  onError?: (error: Error) => void
) => {
  if (offlineMode || !db) {
    // LocalStorage fallback mock of real-time listener
    const sendLocalData = () => {
      const sorted = getLocalComments().sort((a, b) => b.timestamp - a.timestamp);
      onUpdate(sorted);
    };
    sendLocalData();

    // Listen to local storage changes from other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'apex_veloce_comments') {
        sendLocalData();
      }
    };
    window.addEventListener('storage', handleStorageChange);

    // Listen to local update events in the same tab
    const handleLocalUpdate = () => {
      sendLocalData();
    };
    window.addEventListener('storage-local-update', handleLocalUpdate);

    // Return unsubscribe
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('storage-local-update', handleLocalUpdate);
    };
  }

  // Firestore real-time listener
  try {
    const q = query(collection(db, 'comments'), orderBy('timestamp', 'desc'), limit(100));
    return onSnapshot(q, (snapshot) => {
      const comments: CommentItem[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        comments.push({
          id: doc.id,
          name: data.name || 'Anonymous',
          content: data.content || '',
          brand: data.brand || 'General',
          type: data.type || 'normal',
          speed: data.speed || 'normal',
          color: data.color || '#ffffff',
          timestamp: data.timestamp ? (data.timestamp.toMillis ? data.timestamp.toMillis() : Date.now()) : Date.now()
        });
      });
      onUpdate(comments);
    }, (error) => {
      console.warn("Firestore subscription error. Switching to offline mode.", error);
      offlineMode = true;
      if (onError) onError(error);
      // Trigger update with local comments immediately
      onUpdate(getLocalComments().sort((a, b) => b.timestamp - a.timestamp));
    });
  } catch (err) {
    console.warn("Failed to subscribe to Firestore. Using localStorage instead.", err);
    offlineMode = true;
    onUpdate(getLocalComments().sort((a, b) => b.timestamp - a.timestamp));
    return () => {};
  }
};

/**
 * Adds a new comment to Firestore, or falls back to localStorage.
 */
export const addComment = async (comment: Omit<CommentItem, 'id' | 'timestamp'>): Promise<void> => {
  const newComment: CommentItem = {
    ...comment,
    id: 'local_' + Math.random().toString(36).substring(2, 9),
    timestamp: Date.now()
  };

  if (offlineMode || !db) {
    const local = getLocalComments();
    local.push(newComment);
    saveLocalComments(local);
    // Dispatch storage event locally so listeners in the current tab update
    window.dispatchEvent(new Event('storage-local-update'));
    return;
  }

  try {
    await addDoc(collection(db, 'comments'), {
      name: comment.name,
      content: comment.content,
      brand: comment.brand,
      type: comment.type,
      speed: comment.speed,
      color: comment.color,
      timestamp: serverTimestamp()
    });
  } catch (err: any) {
    console.warn("Failed to save to Firestore. Falling back to local storage.", err);
    // If it's a permission/API error, lock into offline mode
    if (err.code === 'permission-denied' || err.message.includes('API') || err.message.includes('disabled')) {
      offlineMode = true;
    }
    const local = getLocalComments();
    local.push(newComment);
    saveLocalComments(local);
    window.dispatchEvent(new Event('storage-local-update'));
  }
};

/**
 * Deletes a comment by ID from Firestore, or falls back to localStorage.
 */
export const deleteComment = async (id: string): Promise<void> => {
  if (offlineMode || !db) {
    const local = getLocalComments();
    const updated = local.filter(c => c.id !== id);
    saveLocalComments(updated);
    window.dispatchEvent(new Event('storage-local-update'));
    return;
  }

  try {
    const docRef = doc(db, 'comments', id);
    await deleteDoc(docRef);
  } catch (err: any) {
    console.warn("Failed to delete from Firestore. Falling back to local storage.", err);
    const local = getLocalComments();
    const updated = local.filter(c => c.id !== id);
    saveLocalComments(updated);
    window.dispatchEvent(new Event('storage-local-update'));
  }
};
