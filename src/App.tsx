import React, { useState, useEffect, useRef } from 'react';
import { carData, brandStories } from './data/carData';
import './App.css';

// SVG Silhouettes for car body types
const CarSilhouette: React.FC<{ type: 'supercar' | 'sedan' | 'suv' | 'cabriolet' | 'wagon'; color: string }> = ({ type, color }) => {
  return (
    <svg className="car-silhouette" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {type === 'supercar' && (
        <path
          d="M10 42 C 10 42, 25 38, 38 35 C 50 32, 65 24, 80 22 C 95 20, 120 20, 138 28 C 150 33, 172 38, 185 41 C 190 42, 192 45, 188 47 C 182 50, 160 50, 10 50 Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {type === 'cabriolet' && (
        <path
          d="M10 42 C 10 42, 25 38, 38 35 C 50 32, 60 30, 75 30 C 85 30, 110 30, 130 33 C 145 35, 172 38, 185 41 C 190 42, 192 45, 188 47 C 182 50, 160 50, 10 50 Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {type === 'suv' && (
        <path
          d="M10 44 C 10 44, 20 40, 30 38 C 40 36, 45 28, 60 27 C 75 26, 120 26, 140 27 C 150 28, 165 30, 175 35 C 185 39, 190 42, 188 46 C 182 50, 160 50, 10 50 Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {type === 'sedan' && (
        <path
          d="M10 44 C 10 44, 25 41, 38 38 C 50 35, 60 28, 75 27 C 90 26, 125 26, 145 28 C 155 29, 168 33, 178 38 C 188 42, 190 45, 188 47 C 182 50, 160 50, 10 50 Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      {type === 'wagon' && (
        <path
          d="M10 44 C 10 44, 25 41, 38 38 C 50 35, 60 29, 75 28 C 90 27, 148 27, 160 29 C 168 30, 172 34, 180 39 C 188 42, 190 45, 188 47 C 182 50, 160 50, 10 50 Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      
      {/* Front Wheel */}
      <circle cx="45" cy="48" r="8" stroke={color} strokeWidth="1.5" fill="#08080c" />
      <circle cx="45" cy="48" r="3" fill={color} />
      
      {/* Rear Wheel */}
      <circle cx="150" cy="48" r="8" stroke={color} strokeWidth="1.5" fill="#08080c" />
      <circle cx="150" cy="48" r="3" fill={color} />
    </svg>
  );
};

// Web Audio API Synthesizer logic
class AudioEngine {
  private ctx: AudioContext | null = null;
  private oscs: OscillatorNode[] = [];
  private lfo: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private gainNode: GainNode | null = null;
  public analyser: AnalyserNode | null = null;
  private initialized = false;

  private init() {
    if (this.initialized) return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 256;
      this.initialized = true;
    } catch (e) {
      console.error("Failed to initialize AudioContext", e);
    }
  }

  public start(type: 'v6' | 'v8' | 'v10' | 'v12' | 'electric' | 'f1_hybrid') {
    this.init();
    if (!this.ctx || !this.analyser) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.stop(); // Clear active oscillators

    const ctx = this.ctx;
    
    // Main Volume Control
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
    gainNode.connect(this.analyser);
    this.analyser.connect(ctx.destination);
    this.gainNode = gainNode;

    // Filters
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 1.0;
    filter.connect(gainNode);
    this.filter = filter;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    this.oscs = [osc1, osc2];

    if (type === 'v8') {
      // V8 throaty rumble (cross-plane crank LFO modulation)
      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(32, ctx.currentTime); 
      osc2.frequency.setValueAtTime(64, ctx.currentTime); 

      filter.frequency.setValueAtTime(140, ctx.currentTime);

      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(10, ctx.currentTime); // 10Hz rumble
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(0.18, ctx.currentTime);
      
      lfo.connect(lfoGain);
      lfoGain.connect(gainNode.gain); 
      lfo.start();
      
      this.lfo = lfo;

      osc1.connect(filter);
      osc2.connect(filter);
    } else if (type === 'v12') {
      // V12 high pitch screaming symphony
      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';
      osc1.frequency.setValueAtTime(45, ctx.currentTime);
      osc2.frequency.setValueAtTime(135, ctx.currentTime);

      const osc3 = ctx.createOscillator();
      osc3.type = 'sawtooth';
      osc3.frequency.setValueAtTime(225, ctx.currentTime);
      osc3.connect(filter);
      this.oscs.push(osc3);

      filter.frequency.setValueAtTime(350, ctx.currentTime);
      filter.Q.value = 2.5;

      osc1.connect(filter);
      osc2.connect(filter);
    } else if (type === 'v10') {
      // V10 wailing pitch
      osc1.type = 'sawtooth';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(40, ctx.currentTime);
      osc2.frequency.setValueAtTime(120, ctx.currentTime);

      filter.frequency.setValueAtTime(220, ctx.currentTime);
      filter.Q.value = 2.0;

      osc1.connect(filter);
      osc2.connect(filter);
    } else if (type === 'electric') {
      // Electric spaceship high pitch hum
      osc1.type = 'sine';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(90, ctx.currentTime);
      osc2.frequency.setValueAtTime(180, ctx.currentTime);

      filter.type = 'peaking';
      filter.frequency.setValueAtTime(180, ctx.currentTime);
      filter.Q.value = 1.2;

      osc1.connect(filter);
      osc2.connect(filter);
    } else if (type === 'f1_hybrid') {
      // Screaming F6 + electric whine
      osc1.type = 'sawtooth';
      osc2.type = 'sine';
      osc1.frequency.setValueAtTime(55, ctx.currentTime);
      osc2.frequency.setValueAtTime(380, ctx.currentTime);

      filter.frequency.setValueAtTime(450, ctx.currentTime);
      filter.Q.value = 3.0;

      osc1.connect(filter);
      osc2.connect(filter);
    } else {
      // V6 standard
      osc1.type = 'sawtooth';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(38, ctx.currentTime);
      osc2.frequency.setValueAtTime(76, ctx.currentTime);

      filter.frequency.setValueAtTime(180, ctx.currentTime);

      osc1.connect(filter);
      osc2.connect(filter);
    }

    this.oscs.forEach(osc => osc.start());
    gainNode.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.1);
  }

  public setRPM(percent: number, type: 'v6' | 'v8' | 'v10' | 'v12' | 'electric' | 'f1_hybrid') {
    if (!this.ctx || !this.gainNode || !this.filter || this.oscs.length === 0) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Map RPM percentage to frequency multiplier
    if (type === 'v8') {
      this.oscs[0].frequency.setValueAtTime(32 + percent * 95, now);
      this.oscs[1].frequency.setValueAtTime(64 + percent * 190, now);
      this.filter.frequency.setValueAtTime(140 + percent * 750, now);
      if (this.lfo) this.lfo.frequency.setValueAtTime(10 + percent * 15, now);
    } else if (type === 'v12') {
      this.oscs[0].frequency.setValueAtTime(45 + percent * 155, now);
      this.oscs[1].frequency.setValueAtTime(135 + percent * 465, now);
      if (this.oscs[2]) {
        this.oscs[2].frequency.setValueAtTime(225 + percent * 775, now);
      }
      this.filter.frequency.setValueAtTime(350 + percent * 1850, now);
    } else if (type === 'v10') {
      this.oscs[0].frequency.setValueAtTime(40 + percent * 135, now);
      this.oscs[1].frequency.setValueAtTime(120 + percent * 405, now);
      this.filter.frequency.setValueAtTime(220 + percent * 1350, now);
    } else if (type === 'electric') {
      this.oscs[0].frequency.setValueAtTime(90 + percent * 750, now);
      this.oscs[1].frequency.setValueAtTime(180 + percent * 1500, now);
      this.filter.frequency.setValueAtTime(180 + percent * 1600, now);
      this.gainNode.gain.setValueAtTime(0.08 + percent * 0.12, now);
    } else if (type === 'f1_hybrid') {
      this.oscs[0].frequency.setValueAtTime(55 + percent * 180, now);
      this.oscs[1].frequency.setValueAtTime(380 + percent * 1100, now);
      this.filter.frequency.setValueAtTime(450 + percent * 2100, now);
    } else {
      // V6
      this.oscs[0].frequency.setValueAtTime(38 + percent * 102, now);
      this.oscs[1].frequency.setValueAtTime(76 + percent * 204, now);
      this.filter.frequency.setValueAtTime(180 + percent * 950, now);
    }
  }

  public stop() {
    if (this.gainNode && this.ctx) {
      const ctx = this.ctx;
      try {
        this.gainNode.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        const oscsToStop = [...this.oscs];
        const activeLfo = this.lfo;
        this.oscs = [];
        this.lfo = null;
        
        setTimeout(() => {
          oscsToStop.forEach(osc => {
            try { osc.stop(); } catch (e) {}
          });
          if (activeLfo) {
            try { activeLfo.stop(); } catch (e) {}
          }
        }, 200);
      } catch (e) {}
    }
  }
}

const audioEngine = new AudioEngine();

function App() {
  // Brand list
  const brands = ['Ferrari', 'Lamborghini', 'Porsche', 'Maserati', 'Mercedes-Benz', 'BMW'] as const;
  type BrandType = typeof brands[number];

  // States
  const [selectedBrand, setSelectedBrand] = useState<BrandType>('Ferrari');
  const [selectedCarId, setSelectedCarId] = useState<string>('ferrari-sf90');
  const [selectedSpirit, setSelectedSpirit] = useState<string>('All');
  
  // Dynamic Performance Filters
  const [maxAcceleration, setMaxAcceleration] = useState<number>(5.0);
  const [minHorsepower, setMinHorsepower] = useState<number>(300);

  // X-Ray Tech Blueprint Mode
  const [xrayMode, setXrayMode] = useState<boolean>(false);

  // Garage Compare
  const [garageCars, setGarageCars] = useState<string[]>([]);
  const [garageOpen, setGarageOpen] = useState<boolean>(false);

  // Sound Sim States
  const [isReving, setIsReving] = useState<boolean>(false);
  const [revPercent, setRevPercent] = useState<number>(0);
  const [activeDesignTab, setActiveDesignTab] = useState<'description' | 'exterior' | 'interior' | 'story'>('description');
  
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const revIntervalRef = useRef<number | null>(null);

  // Find active car
  const activeCar = carData.find(c => c.id === selectedCarId) || carData[0];
  const brandStory = brandStories[selectedBrand];

  // Map brands to hex colors
  const brandColors: Record<BrandType, { main: string; rgb: string; glow: string; accent: string }> = {
    Ferrari: { main: '#e30613', rgb: '227, 6, 19', glow: 'rgba(227, 6, 19, 0.4)', accent: '#ffeb3b' },
    Lamborghini: { main: '#d6a11e', rgb: '214, 161, 30', glow: 'rgba(214, 161, 30, 0.4)', accent: '#00ff41' },
    Porsche: { main: '#f05a28', rgb: '240, 90, 40', glow: 'rgba(240, 90, 40, 0.4)', accent: '#00e5ff' },
    Maserati: { main: '#0085ff', rgb: '0, 133, 255', glow: 'rgba(0, 133, 255, 0.4)', accent: '#d1b87a' },
    'Mercedes-Benz': { main: '#00ffff', rgb: '0, 255, 255', glow: 'rgba(0, 255, 255, 0.4)', accent: '#00e676' },
    BMW: { main: '#0066b2', rgb: '0, 102, 178', glow: 'rgba(0, 102, 178, 0.4)', accent: '#ff003c' }
  };

  // Update CSS Variables dynamically based on selected brand
  useEffect(() => {
    const colors = brandColors[selectedBrand];
    document.documentElement.style.setProperty('--brand-color', colors.main);
    document.documentElement.style.setProperty('--brand-color-rgb', colors.rgb);
    document.documentElement.style.setProperty('--brand-glow', colors.glow);
    document.documentElement.style.setProperty('--brand-accent', colors.accent);
  }, [selectedBrand]);

  // Set default car when brand changes
  useEffect(() => {
    const brandCars = carData.filter(c => c.brand === selectedBrand);
    if (brandCars.length > 0) {
      // Try to find if any brandCar matches selected filter, otherwise default to first
      const matches = brandCars.filter(c => 
        (selectedSpirit === 'All' || c.spirit === selectedSpirit) &&
        c.specs.acceleration <= maxAcceleration &&
        c.specs.horsepower >= minHorsepower
      );
      if (matches.length > 0) {
        setSelectedCarId(matches[0].id);
      } else {
        setSelectedCarId(brandCars[0].id);
      }
    }
  }, [selectedBrand]);

  // Stop sounds on unmount or car switch
  useEffect(() => {
    audioEngine.stop();
    setIsReving(false);
    setRevPercent(0);
    if (revIntervalRef.current) {
      clearInterval(revIntervalRef.current);
    }
  }, [selectedCarId]);

  // Filter cars for display
  const filteredCars = carData.filter(car => {
    const matchesBrand = car.brand === selectedBrand;
    const matchesSpirit = selectedSpirit === 'All' || car.spirit === selectedSpirit;
    const matchesAcceleration = car.specs.acceleration <= maxAcceleration;
    const matchesHorsepower = car.specs.horsepower >= minHorsepower;
    return matchesBrand && matchesSpirit && matchesAcceleration && matchesHorsepower;
  });

  // Sound Engine Canvas Waveform
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = 128;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (audioEngine.analyser && isReving) {
        audioEngine.analyser.getByteTimeDomainData(dataArray);
      } else {
        // Flatline or mild noise
        for (let i = 0; i < bufferLength; i++) {
          dataArray[i] = 128 + (Math.sin(i * 0.1 + Date.now() * 0.01) * (isReving ? 10 : 2));
        }
      }

      ctx.lineWidth = 2;
      ctx.strokeStyle = brandColors[selectedBrand].main;
      ctx.shadowBlur = 8;
      ctx.shadowColor = brandColors[selectedBrand].main;

      ctx.beginPath();
      const sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
      ctx.shadowBlur = 0; // reset
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [selectedBrand, isReving]);

  // Rev Handler (Simulating Accelerator Pedal)
  const handleRevStart = () => {
    audioEngine.start(activeCar.soundType);
    setIsReving(true);

    if (revIntervalRef.current) clearInterval(revIntervalRef.current);
    
    // Rev up interval
    revIntervalRef.current = window.setInterval(() => {
      setRevPercent(prev => {
        const next = Math.min(prev + 8, 100);
        audioEngine.setRPM(next / 100, activeCar.soundType);
        return next;
      });
    }, 40);
  };

  const handleRevEnd = () => {
    if (revIntervalRef.current) clearInterval(revIntervalRef.current);

    // Rev down interval
    revIntervalRef.current = window.setInterval(() => {
      setRevPercent(prev => {
        if (prev <= 2) {
          clearInterval(revIntervalRef.current!);
          audioEngine.stop();
          setIsReving(false);
          return 0;
        }
        const next = prev - 6;
        audioEngine.setRPM(next / 100, activeCar.soundType);
        return next;
      });
    }, 40);
  };

  // Garage Management
  const toggleGarageCar = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setGarageCars(prev => {
      if (prev.includes(id)) {
        return prev.filter(carId => carId !== id);
      } else {
        if (prev.length >= 4) {
          alert("車庫比較最多支援 4 台車款！");
          return prev;
        }
        return [...prev, id];
      }
    });
  };

  return (
    <div className="app-container">
      {/* 1. Header Area with Multi-dimensional Filters */}
      <header className="dashboard-header" id="main-header">
        <div className="logo-section">
          <h1>
            <span>APEX VELOCE CODEX</span> 
            <span style={{ fontSize: '0.9rem', verticalAlign: 'middle', opacity: 0.6 }}>//</span> 
            <span style={{ color: 'var(--brand-color)', filter: 'brightness(1.2)' }}>極速數位法典</span>
          </h1>
          <p>Maserati . Lamborghini . Porsche . Mercedes-Benz . BMW . Ferrari</p>
        </div>

        <div className="header-controls">
          {/* Acceleration Filter */}
          <div className="filter-group">
            <span className="filter-label">
              0-100 km/h 加速限制: <span className="filter-value">&le; {maxAcceleration.toFixed(1)} 秒</span>
            </span>
            <input 
              type="range" 
              min="2.4" 
              max="5.0" 
              step="0.1"
              value={maxAcceleration} 
              onChange={(e) => setMaxAcceleration(parseFloat(e.target.value))}
              className="range-slider"
            />
          </div>

          {/* Horsepower Filter */}
          <div className="filter-group">
            <span className="filter-label">
              最低動力要求: <span className="filter-value">&ge; {minHorsepower} 匹 (hp/cv)</span>
            </span>
            <input 
              type="range" 
              min="300" 
              max="1000" 
              step="50"
              value={minHorsepower} 
              onChange={(e) => setMinHorsepower(parseInt(e.target.value))}
              className="range-slider"
            />
          </div>

          {/* Garage Compare Trigger */}
          <button 
            type="button" 
            className="garage-trigger"
            onClick={() => setGarageOpen(true)}
            id="compare-trigger-btn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span>車庫比較</span>
            <span className="garage-badge">{garageCars.length}</span>
          </button>
        </div>
      </header>

      {/* 2. Main Dashboard Workspace Grid */}
      <main className="dashboard-grid">
        {/* Column 1: Brand Navigator (Left) */}
        <section className="dashboard-panel" id="brand-navigator">
          <h2 className="panel-title">
            <span>品牌選單</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Brands</span>
          </h2>
          <div className="brands-list">
            {brands.map((brandName) => {
              const story = brandStories[brandName];
              const isActive = selectedBrand === brandName;
              return (
                <div
                  key={brandName}
                  className={`brand-card ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedBrand(brandName)}
                  id={`brand-tab-${brandName.toLowerCase().replace('-','').replace(' ','')}`}
                >
                  <div className="brand-logo-emblem">
                    {story.logo.includes('/') || story.logo.includes('.') || story.logo.startsWith('data:') ? (
                      <img src={story.logo} alt={`${brandName} logo`} className="brand-logo-img" />
                    ) : (
                      story.logo
                    )}
                  </div>
                  <div className="brand-info">
                    <div className="brand-name">{brandName}</div>
                    <div className="brand-meta">{story.country}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Brand History Codex */}
          <div className="brand-history-summary">
            <div style={{ fontFamily: 'var(--tech)', fontSize: '0.75rem', color: 'var(--brand-color)', marginBottom: '5px', textTransform: 'uppercase' }}>
              ✦ 品牌傳奇歷史 ({brandStory.foundation} 創立)
            </div>
            <div>{brandStory.history}</div>
            <div style={{ marginTop: '8px', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              創辦人: {brandStory.founder}
            </div>
          </div>
        </section>

        {/* Column 2: Codex Cards Deck (Middle) */}
        <section className="dashboard-panel" id="codex-deck">
          <div className="deck-container">
            <h2 className="panel-title">
              <span>車款目錄 ({filteredCars.length})</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--brand-color)' }}>{selectedBrand.toUpperCase()}</span>
            </h2>

            {/* Spirit Selector Tabs */}
            <div className="spirit-tabs">
              {['All', 'Hyper Exotic', 'Track Weapon', 'Super SUV', 'Grand Tourer', 'Luxury Executive'].map(spiritName => (
                <button
                  key={spiritName}
                  type="button"
                  className={`spirit-tab ${selectedSpirit === spiritName ? 'active' : ''}`}
                  onClick={() => setSelectedSpirit(spiritName)}
                >
                  {spiritName === 'All' ? '全部車種' : carData.find(c => c.spirit === spiritName)?.spiritZh || spiritName}
                </button>
              ))}
            </div>

            {/* Scrollable Card Grid */}
            <div className="cards-scroll-deck">
              {filteredCars.length > 0 ? (
                filteredCars.map((car) => {
                  const isSelected = selectedCarId === car.id;
                  const isInGarage = garageCars.includes(car.id);
                  const colors = brandColors[selectedBrand];
                  return (
                    <div
                      key={car.id}
                      className={`car-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedCarId(car.id)}
                      id={`car-card-${car.id}`}
                    >
                      {/* Compare toggle badge */}
                      <button
                        type="button"
                        className={`compare-add-btn ${isInGarage ? 'in-garage' : ''}`}
                        onClick={(e) => toggleGarageCar(car.id, e)}
                        title={isInGarage ? "移出比較庫" : "加入比較庫"}
                      >
                        {isInGarage ? '✓' : '+'}
                      </button>

                      <div className="car-card-header">
                        <div className="car-card-title">
                          <span className="car-card-brand">{car.brandZh}</span>
                          <h3 className="car-card-name">{car.name}</h3>
                        </div>
                        <span className="car-card-badge">
                          {car.spiritZh}
                        </span>
                      </div>

                      {/* Vector Outline */}
                      <div className="car-silhouette-container">
                        <CarSilhouette type={car.bodyType} color={colors.main} />
                      </div>

                      <div className="car-card-quick-stats">
                        <div className="quick-stat-item">
                          <span className="quick-stat-label">加速 0-100</span>
                          <span className="quick-stat-value">
                            {car.specs.acceleration}
                            <span className="quick-stat-unit">s</span>
                          </span>
                        </div>
                        <div className="quick-stat-item">
                          <span className="quick-stat-label">最大馬力</span>
                          <span className="quick-stat-value">
                            {car.specs.horsepower}
                            <span className="quick-stat-unit">hp</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="empty-deck-state">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '8px', color: 'var(--brand-color)' }}>
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>沒有符合當前篩選條件的車款</span>
                  <button 
                    type="button"
                    className="spirit-select-btn"
                    onClick={() => {
                      setMaxAcceleration(5.0);
                      setMinHorsepower(300);
                      setSelectedSpirit('All');
                    }}
                  >
                    重設篩選器
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Column 3: Engineering Dossier (Right) */}
        <section className={`dashboard-panel ${xrayMode ? 'blueprint-mode' : ''}`} id="engineering-dossier">
          <h2 className="panel-title">
            <span>工程法典</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Specs & Story</span>
          </h2>

          <div className="dossier-scroller">
            {/* Dossier Header */}
            <div className="dossier-hero">
              <span className="dossier-class">{activeCar.priceClass}</span>
              <h1 className="dossier-name">{activeCar.name}</h1>
             <div className="dossier-brand-emblem">
               {brandStory.logo.includes('/') || brandStory.logo.includes('.') || brandStory.logo.startsWith('data:') ? (
                 <img src={brandStory.logo} alt={`${selectedBrand} logo`} className="brand-logo-img" />
               ) : (
                 brandStory.logo
               )}
             </div>
            </div>

            {/* Dossier Car Image */}
            <div className="dossier-image-container">
              <img 
                className={`dossier-image ${xrayMode ? 'xray-filter' : ''}`} 
                src={activeCar.imageUrl} 
                alt={activeCar.name} 
              />
              <div className="dossier-image-overlay">
                <span className="dossier-image-caption">HOLOGRAPHIC SCAN</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--brand-accent)', fontFamily: 'var(--tech)' }}>
                  {xrayMode ? 'SPECTRAL VIEW' : 'REAL IMAGE'}
                </span>
              </div>
            </div>

            {/* X-Ray Tech Blueprint Toggle */}
            <div className="xray-toggle-container">
              <div className="xray-label">
                <div className="pulse-red-dot" style={{ display: xrayMode ? 'block' : 'none' }}></div>
                <span>{xrayMode ? '✦ X-RAY 藍圖模式開啟' : '♢ 開啟 X-RAY 藍圖規格'}</span>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={xrayMode}
                  onChange={(e) => setXrayMode(e.target.checked)}
                />
                <span className="slider-toggle"></span>
              </label>
            </div>

            {/* Gauge stats */}
            <div className="performance-gauges">
              {/* Speed Gauge */}
              <div className="gauge-card">
                <div className="gauge-svg-container">
                  <svg className="gauge-svg" width="60" height="60">
                    <circle className="gauge-bg" cx="30" cy="30" r="26" />
                    <circle 
                      className="gauge-fill" 
                      cx="30" 
                      cy="30" 
                      r="26" 
                      strokeDasharray={163.3}
                      strokeDashoffset={163.3 - (163.3 * activeCar.specs.topSpeed) / 400}
                    />
                  </svg>
                  <div className="gauge-text">KM</div>
                </div>
                <div className="gauge-info">
                  <span className="gauge-label">極速</span>
                  <span className="gauge-val-large">{activeCar.specs.topSpeed} <span style={{ fontSize: '0.7rem' }}>km/h</span></span>
                </div>
              </div>

              {/* Power Gauge */}
              <div className="gauge-card">
                <div className="gauge-svg-container">
                  <svg className="gauge-svg" width="60" height="60">
                    <circle className="gauge-bg" cx="30" cy="30" r="26" />
                    <circle 
                      className="gauge-fill" 
                      cx="30" 
                      cy="30" 
                      r="26" 
                      strokeDasharray={163.3}
                      strokeDashoffset={163.3 - (163.3 * activeCar.specs.horsepower) / 1100}
                    />
                  </svg>
                  <div className="gauge-text">HP</div>
                </div>
                <div className="gauge-info">
                  <span className="gauge-label">動力</span>
                  <span className="gauge-val-large">{activeCar.specs.horsepower} <span style={{ fontSize: '0.7rem' }}>hp</span></span>
                </div>
              </div>
            </div>

            {/* Spec Matrix table */}
            <div className="spec-matrix">
              <div className="spec-matrix-title">規格參數 (Technical Matrix)</div>
              
              <div className="spec-row">
                <span className="spec-row-label">動力心臟 (Powertrain)</span>
                <span className="spec-row-value">{activeCar.specs.engineType}</span>
              </div>

              <div className="spec-row">
                <span className="spec-row-label">扭力峰值 (Peak Torque)</span>
                <span className="spec-row-value">{activeCar.specs.torque} Nm</span>
              </div>

              <div className="spec-row">
                <span className="spec-row-label">變速系統 (Transmission)</span>
                <span className="spec-row-value">{activeCar.specs.gearbox}</span>
              </div>

              <div className="spec-row">
                <span className="spec-row-label">驅動方式 (Drivetrain)</span>
                <span className="spec-row-value">{activeCar.specs.drivetrain}</span>
              </div>

              <div className="spec-row">
                <span className="spec-row-label">整備質量 (Curb Weight)</span>
                <span className="spec-row-value">{activeCar.specs.weight} kg</span>
              </div>
            </div>

            {/* Sound Wave Engine Synthesizer */}
            <div className="sound-codex-panel">
              <div className="sound-header">
                <div className="sound-title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'middle', display: 'inline-block' }}>
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                  <span>引擎聲浪合成器</span>
                </div>
                <span className="sound-badge">{activeCar.soundType.replace('_', ' ')}</span>
              </div>
              <p className="sound-instructions">按住「轟鳴引擎」按鈕可以模擬踩下油門拉高轉速的聲浪！</p>
              
              <div className="sound-visualizer-box">
                <canvas ref={canvasRef} className="sound-visualizer-canvas" width="380" height="60" />
                {isReving && (
                  <span style={{ 
                    position: 'absolute', 
                    fontFamily: 'var(--display)', 
                    fontSize: '0.75rem', 
                    color: 'var(--brand-color)',
                    top: '5px',
                    right: '10px'
                  }}>
                    {Math.floor(800 + revPercent * 75)} RPM
                  </span>
                )}
              </div>

              <div className="rev-btn-container">
                <button
                  type="button"
                  className="rev-btn"
                  onMouseDown={handleRevStart}
                  onMouseUp={handleRevEnd}
                  onMouseLeave={handleRevEnd}
                  onTouchStart={(e) => { e.preventDefault(); handleRevStart(); }}
                  onTouchEnd={handleRevEnd}
                  id="engine-rev-button"
                >
                  {isReving ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rev-icon-pulse" style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                      <span>轉速攀升中...</span>
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', display: 'inline-block', verticalAlign: 'middle' }}>
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                      </svg>
                      <span>轟鳴引擎 (Hold to Rev)</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Tabs for Design details (Exterior/Interior) */}
            <div className="design-codex-tabs">
              <button
                type="button"
                className={`design-codex-tab ${activeDesignTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveDesignTab('description')}
              >
                車款概述
              </button>
              <button
                type="button"
                className={`design-codex-tab ${activeDesignTab === 'exterior' ? 'active' : ''}`}
                onClick={() => setActiveDesignTab('exterior')}
              >
                外觀空力
              </button>
              <button
                type="button"
                className={`design-codex-tab ${activeDesignTab === 'interior' ? 'active' : ''}`}
                onClick={() => setActiveDesignTab('interior')}
              >
                內裝科技
              </button>
              <button
                type="button"
                className={`design-codex-tab ${activeDesignTab === 'story' ? 'active' : ''}`}
                onClick={() => setActiveDesignTab('story')}
              >
                傳奇歷史
              </button>
            </div>

            {/* Tab content panel */}
            <div className="design-codex-content">
              {activeDesignTab === 'description' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span className="narrative-title">車型概述</span>
                  <p className="narrative-description">{activeCar.description}</p>
                </div>
              )}
              {activeDesignTab === 'exterior' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span className="narrative-title" style={{ color: 'var(--brand-accent)' }}>外觀空力設計</span>
                  <p className="narrative-description">{activeCar.exterior}</p>
                </div>
              )}
              {activeDesignTab === 'interior' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span className="narrative-title" style={{ color: 'var(--brand-accent)' }}>座艙工藝科技</span>
                  <p className="narrative-description">{activeCar.interior}</p>
                </div>
              )}
              {activeDesignTab === 'story' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span className="narrative-title">賽道故事 & 歷史底蘊</span>
                  <p className="narrative-story" style={{ borderTop: 'none', paddingTop: 0 }}>{activeCar.story}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 3. Garage Compare Panel Overlay */}
      <section className={`compare-modal ${garageOpen ? 'open' : ''}`} id="compare-modal-panel">
        <div className="compare-header">
          <h2 className="compare-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px', verticalAlign: 'middle', display: 'inline-block' }}>
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            <span>跨品牌車庫規格比對表</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 'normal' }}>
              (最多支援 4 台車款)
            </span>
          </h2>
          <button 
            type="button" 
            className="close-compare-btn"
            onClick={() => setGarageOpen(false)}
            id="close-compare-btn"
          >
            關閉面板
          </button>
        </div>

        <div className="compare-table-container">
          {garageCars.length > 0 ? (
            <table className="compare-table">
              <thead>
                <tr>
                  <th>品牌車款</th>
                  <th>駕馭靈魂</th>
                  <th>0-100 加速</th>
                  <th>馬力</th>
                  <th>扭力</th>
                  <th>引擎配置</th>
                  <th>驅動</th>
                  <th>整備重量</th>
                  <th>極速</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {garageCars.map((carId) => {
                  const car = carData.find(c => c.id === carId);
                  if (!car) return null;
                  return (
                    <tr key={car.id} id={`compare-row-${car.id}`}>
                      <td>
                        <span style={{ fontFamily: 'var(--tech)', color: 'var(--text-secondary)' }}>
                          [{car.brand}]
                        </span>{' '}
                        <strong style={{ fontFamily: 'var(--display)', fontSize: '0.95rem' }}>
                          {car.name}
                        </strong>
                      </td>
                      <td>{car.spiritZh}</td>
                      <td style={{ fontFamily: 'var(--display)', fontWeight: 'bold' }}>
                        {car.specs.acceleration} 秒
                      </td>
                      <td style={{ fontFamily: 'var(--display)' }}>
                        {car.specs.horsepower} hp
                      </td>
                      <td style={{ fontFamily: 'var(--tech)' }}>
                        {car.specs.torque} Nm
                      </td>
                      <td style={{ fontSize: '0.8rem' }}>{car.specs.engineType}</td>
                      <td>{car.specs.drivetrain}</td>
                      <td>{car.specs.weight} kg</td>
                      <td style={{ fontFamily: 'var(--display)', color: 'var(--brand-color)' }}>
                        {car.specs.topSpeed} km/h
                      </td>
                      <td>
                        <button
                          type="button"
                          className="compare-remove-btn"
                          onClick={(e) => toggleGarageCar(car.id, e)}
                        >
                          移除
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="compare-empty-state">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '10px', color: 'var(--text-secondary)' }}>
                <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
              </svg>
              <span>比較庫內沒有車款。請點擊車款卡片右上角的「+」將車款加入比較！</span>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
