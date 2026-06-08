// Ferrari Images
import sf90StradaleImg from '../assets/SF90 Stradale.jpg';
import daytonaSp3Img from '../assets/Daytona SP3.jpg';
import comp812Img from '../assets/812 Competizione.jpg';
import gtb296Img from '../assets/296 GTB.jpg';
import purosangueImg from '../assets/Purosangue.jpeg';
import romaImg from '../assets/Roma.jpeg';
import laferrariImg from '../assets/LaFerrari.webp';

// Lamborghini Images
import revueltoImg from '../assets/Revuelto.jpg';
import sterratoImg from '../assets/Huracán Sterrato.jpg';
import urusPerfImg from '../assets/Urus Performante.webp';
import svjImg from '../assets/Aventador SVJ.jpg';
import sianImg from '../assets/Sián FKP 37.jpg';
import countachImg from '../assets/Countach LPI 800-4.webp';

// Porsche Images
import gt3rsImg from '../assets/911 GT3 RS (992).jpg';
import taycanImg from '../assets/Taycan Turbo S.webp';
import spyder918Img from '../assets/918 Spyder.jpg';
import gt4rsImg from '../assets/718 Cayman GT4 RS.jpeg';
import panameraImg from '../assets/Panamera Turbo E-Hybrid.jpg';
import cayenneGtImg from '../assets/Cayenne Turbo GT.jpg';

// Maserati Images
import mc20Img from '../assets/MC20.jpg';
import gtTrofeoImg from '../assets/GranTurismo Trofeo.jpg';
import cabrioFolgoreImg from '../assets/GranCabrio Folgore.webp';
import grecaleTrofeoImg from '../assets/Grecale Trofeo.jpg';
import levanteTrofeoImg from '../assets/Levante Trofeo.jpg';
import quattroporteTrofeoImg from '../assets/Quattroporte Trofeo.webp';

// Mercedes-Benz Images
import amgOneImg from '../assets/AMG One.jpg';
import amgGtBlackImg from '../assets/AMG GT Black Series.jpg';
import sl63seImg from '../assets/SL 63 S E Performance.jpg';
import g63Img from '../assets/Mercedes-AMG G 63.jpg';
import maybachS680Img from '../assets/Mercedes-Maybach S 680.jpg';
import c63seImg from '../assets/AMG C 63 S E Performance.jpg';

// BMW Images
import m8CompImg from '../assets/M8 Competition Coupe.jpg';
import m5csImg from '../assets/M5 CS (F90).jpg';
import m3TouringImg from '../assets/M3 Touring (G81).webp';
import i7M70Img from '../assets/i7 M70 xDrive.jpg';
import xmLabelRedImg from '../assets/XM Label Red.jpg';
import z4M40iImg from '../assets/Z4 M40i (Manual Edition).jpg';

import bmwLogo from '../assets/bmw.png';
import ferrariLogo from '../assets/ferrari.png';
import lamborghiniLogo from '../assets/lamborghini.png';
import maseratiLogo from '../assets/maserati.png';
import mercedesLogo from '../assets/mercedes.png';
import porscheLogo from '../assets/porsche.png';

export interface CarSpecs {
  horsepower: number;    // hp / cv
  torque: string;        // Nm
  acceleration: number;  // 0-100 km/h (seconds)
  topSpeed: number;      // km/h
  engineType: string;    // e.g., "6.5L V12 NA"
  drivetrain: string;    // e.g., "AWD", "RWD"
  weight: string;        // kg
  gearbox: string;       // e.g., "8-Speed DCT"
}

export interface Car {
  id: string;
  name: string;
  brand: 'Ferrari' | 'Lamborghini' | 'Porsche' | 'Maserati' | 'Mercedes-Benz' | 'BMW';
  brandZh: string;
  spirit: 'Track Weapon' | 'Hyper Exotic' | 'Grand Tourer' | 'Super SUV' | 'Luxury Executive';
  spiritZh: string;
  priceClass: string;
  specs: CarSpecs;
  soundType: 'v6' | 'v8' | 'v10' | 'v12' | 'electric' | 'f1_hybrid';
  description: string;
  story: string;
  bodyType: 'supercar' | 'sedan' | 'suv' | 'cabriolet' | 'wagon';
  imageUrl: string;
  exterior: string;
  interior: string;
}

export const brandStories: Record<string, { logo: string; history: string; foundation: string; founder: string; country: string }> = {
  Ferrari: {
    logo: ferrariLogo,
    foundation: "1939",
    founder: "Enzo Ferrari",
    country: "義大利 (Maranello)",
    history: "法拉利（Ferrari）由恩佐·法拉利創立，最初為「Scuderia Ferrari」賽車隊。自創立以來，法拉利便將賽道基因注入每一輛道路跑車中。躍馬標誌象徵著不妥協的性能、賽車技術的結晶，以及對極致速度的無盡追尋。不論是自然進氣 V12 還是尖端混動 F1 技術，法拉利代表著跑車世界的至高殿堂。"
  },
  Lamborghini: {
    logo: lamborghiniLogo,
    foundation: "1963",
    founder: "Ferruccio Lamborghini",
    country: "義大利 (Sant'Agata Bolognese)",
    history: "藍寶堅尼（Lamborghini）的誕生源於創辦人費魯吉歐對法拉利離合器問題的不滿。他決心打造出超越對手的完美跑車。藍寶堅尼以憤怒公牛為圖騰，設計語彙充斥著極具侵略性的幾何線條、剪刀門以及狂暴的自然進氣引擎，以「不妥協、極端、感性」的精神，成為超級跑車界最耀眼的叛逆星辰。"
  },
  Porsche: {
    logo: porscheLogo,
    foundation: "1931",
    founder: "Ferdinand Porsche",
    country: "德國 (Stuttgart)",
    history: "保時捷（Porsche）以極致工程美學與日常實用性的完美結合著稱。自傳奇 911 誕生以來，其後置水平對臥引擎配置成為車壇神話。保時捷在勒芒耐力賽擁有無與倫比的奪冠紀錄，其車輛以精密操控、無懈可擊的可靠度與頂尖德意志工藝，征服了無數熱愛操駕的硬派車迷。"
  },
  Maserati: {
    logo: maseratiLogo,
    foundation: "1914",
    founder: "Maserati Brothers",
    country: "義大利 (Modena)",
    history: "瑪莎拉蒂（Maserati）以博洛尼亞海神噴泉的三叉戟為標誌，完美詮釋了義大利「優雅與狂野」的交織。瑪莎拉蒂是 Grand Tourer (GT) 概念的先驅，致力於打造能以極高速度進行長途舒適奔馳的奢華跑車。其獨特的排氣聲浪被譽為「來自天堂的交響樂」，是紳士與賽車手的終極座駕。"
  },
  'Mercedes-Benz': {
    logo: mercedesLogo,
    foundation: "1926",
    founder: "Karl Benz & Gottlieb Daimler",
    country: "德國 (Stuttgart)",
    history: "梅賽德斯-賓士（Mercedes-Benz）是現代汽車的發明者。「The Best or Nothing」是其不變的信條。旗下的高性能部門 AMG，自1967年起便以「單人單機」的手工組裝哲學，打造出擁有狂暴扭力與肌肉線條的性能猛獸。從 F1 道路版超超跑 AMG One 到硬派越野 G-Class，賓士展現了汽車工業無可撼動的領袖氣場。"
  },
  BMW: {
    logo: bmwLogo,
    foundation: "1916",
    founder: "Franz Josef Popp",
    country: "德國 (Munich)",
    history: "BMW 以「Sheer Driving Pleasure (純粹駕駛樂趣)」為品牌靈魂。旗下的 M 部門 (BMW M GmbH) 最初是為了支援賽車計劃而成立，隨後將賽道技術移植至市售車款。BMW 堅持接近 50:50 的前後車身配重，並以直列六缸引擎與極致的底盤調教著稱，讓駕駛者與車輛達到人車合一的操控境界。"
  }
};

export const carData: Car[] = [
  // ==================== FERRARI ====================
  {
    id: "ferrari-sf90",
    name: "SF90 Stradale",
    brand: "Ferrari",
    brandZh: "法拉利",
    spirit: "Hyper Exotic",
    spiritZh: "頂級超跑",
    priceClass: "旗艦超跑 (Flagship Hypercar)",
    bodyType: "supercar",
    imageUrl: sf90StradaleImg,
    specs: {
      horsepower: 1000,
      torque: "800",
      acceleration: 2.5,
      topSpeed: 340,
      engineType: "4.0L Twin-Turbo V8 + 3 Electric Motors",
      drivetrain: "AWD",
      weight: "1570",
      gearbox: "8-Speed Dual-Clutch DCT"
    },
    soundType: "f1_hybrid",
    description: "SF90 Stradale 是法拉利首款插電式混合動力 (PHEV) 超級跑車，代表著馬拉內羅在技術研發上的重大跨越。它將一台屢獲殊榮的雙渦輪 V8 引擎與三台電動馬達完美融合，創造出令人屏息的千匹馬力輸出。",
    exterior: "外觀設計將空氣力學效率推向極致。車頭採用低矮平扁的楔形輪廓，搭配標誌性的C字型矩陣式LED頭燈。車尾採用高聳的雙出排氣管佈局，並配置了革命性的「閉合式Gurney襟翼」主動尾翼系統，能在高速彎道中產生高達390公斤的下壓力，同時在直線段主動閉合以減少風阻。",
    interior: "座艙導入源自 F1 的「眼不離路，手不離盤」革命性人機介面。駕駛前方是一塊 16 吋曲面高解析度數位儀表板，為業界首創。方向盤上佈滿了全觸控感應按鍵與實體 Manettino 旋鈕，可輕鬆切換動力模式。輕量化碳纖維桶椅與包覆式 Alcantara 麂皮，創造出戰鬥感滿分的奢華駕駛空間。",
    story: "該車命名向 Scuderia Ferrari 車隊成立90週年致敬，象徵著法拉利 F1 賽車技術向市售道路用車的直接轉移。其前軸兩具馬達可實現主動式扭力分配，在過彎時提供極限的抓地力與敏捷度，開啟了躍馬品牌的電氣化巔峰時代。"
  },
  {
    id: "ferrari-daytona-sp3",
    name: "Daytona SP3",
    brand: "Ferrari",
    brandZh: "法拉利",
    spirit: "Hyper Exotic",
    spiritZh: "頂級超跑",
    priceClass: "限量收藏級 (Icona Series)",
    bodyType: "supercar",
    imageUrl: daytonaSp3Img,
    specs: {
      horsepower: 840,
      torque: "697",
      acceleration: 2.85,
      topSpeed: 340,
      engineType: "6.5L V12 Naturally Aspirated",
      drivetrain: "RWD",
      weight: "1485",
      gearbox: "7-Speed Dual-Clutch DCT"
    },
    soundType: "v12",
    description: "Daytona SP3 屬於法拉利極致稀有的「Icona」系列。外觀採用了極具雕塑感的未來派設計，完美致敬了 1960 年代黃金賽車時期的經典賽車輪廓，並搭載了法拉利歷史上最強大的純燃油 V12 自然進氣引擎。",
    exterior: "車身外觀擁有誇張流暢的起伏肌肉線條，隆起的雙前輪拱直逼經典賽車 330 P4。車頭的大燈配備了獨特的可移動「眼瞼」遮罩。車尾則是整車最震撼的視覺焦點，由一系列橫向延伸的碳纖維葉片格柵組成，搭配整合式尾翼與中置雙出排氣孔，將復古賽車美學與未來科技感完美揉合。",
    interior: "極簡奢華的座艙設計直接將座椅與碳纖維單體車架融為一體，形成一條連貫的藍色織物曲面，大幅度降低車身重心。踏板與安全帶皆可進行前後手動/電動調節。液晶儀表與投射HUD取代了傳統中控，為駕駛者提供極具沉浸感且不受干擾的純粹賽車駕駛視角。",
    story: "此車是為了紀念 1967 年 24 Hours of Daytona 賽事中，法拉利 330 P3/4、330 P4 和 412 P 創下並列衝線包攬前三名的偉大史詩時刻。車身採用全碳纖維單體座艙，全球僅限量 599 台，是汽車收藏家夢寐以求的殿堂級傑作。"
  },
  {
    id: "ferrari-812-comp",
    name: "812 Competizione",
    brand: "Ferrari",
    brandZh: "法拉利",
    spirit: "Track Weapon",
    spiritZh: "賽道利器",
    priceClass: "限量賽道版 (Limited Edition)",
    bodyType: "supercar",
    imageUrl: comp812Img,
    specs: {
      horsepower: 830,
      torque: "692",
      acceleration: 2.85,
      topSpeed: 340,
      engineType: "6.5L V12 Naturally Aspirated",
      drivetrain: "RWD",
      weight: "1487",
      gearbox: "7-Speed Dual-Clutch DCT"
    },
    soundType: "v12",
    description: "812 Competizione 是前置 V12 躍馬跑車的終極賽道進化版。工程師將自然進氣 V12 引擎的轉速極限推升至難以置信的 9,500 rpm，並引入了獨立四輪轉向系統，帶來極致敏銳的過彎動態。",
    exterior: "外觀最引人矚目之處在於用一體化鋁質護板取代了整個後窗玻璃，並在其上安置了三對專利渦流產生器（Vortex Generators），用以優化車底空氣流速並提升下壓力。車頭引擎蓋橫貫一條醒目的碳纖維葉片裝飾，車尾散熱孔與巨大擴散器融為一體，流露出濃郁的賽車暴力美學。",
    interior: "內裝採用大量高強度輕量化材料，中控台經過重新設計減重，排氣通道飾板呈現出標誌性的 H 型閘門排檔座。賽車桶椅覆蓋有透氣的高抓地力網狀織物與 Alcantara，黃色縫線與指針細節與外觀賽車條紋呼應，散發濃烈硬派競技氛圍。",
    story: "這款車是法拉利對純燃油前置 V12 傳奇致敬的巔峰之作。車後窗改為單一鋁質結構並設有渦流產生器，能產生極為誇張的下壓力。全車充斥著碳纖維減重材質，是純粹內燃機愛好者的終極賽道聖杯。"
  },
  {
    id: "ferrari-296-gtb",
    name: "296 GTB",
    brand: "Ferrari",
    brandZh: "法拉利",
    spirit: "Hyper Exotic",
    spiritZh: "頂級超跑",
    priceClass: "中置超跑 (Supercar)",
    bodyType: "supercar",
    imageUrl: gtb296Img,
    specs: {
      horsepower: 830,
      torque: "740",
      acceleration: 2.9,
      topSpeed: 330,
      engineType: "3.0L Twin-Turbo V6 Hybrid",
      drivetrain: "RWD",
      weight: "1470",
      gearbox: "8-Speed Dual-Clutch DCT"
    },
    soundType: "f1_hybrid",
    description: "296 GTB 定義了「駕馭樂趣」的新維度。它採用全新的 120° V6 雙渦輪增壓引擎，搭配插電式混合動力馬達，可爆發出 830 匹的最大馬力，軸距較以往中置車款縮短，操控反應靈敏無比。",
    exterior: "車身輪廓極其洗鍊乾淨，甚至帶有 1963 年 250 LM 賽車的優雅影子。車頭進氣道與前煞車冷卻氣流通道高度整合，兩側B柱上方設有極簡進氣孔。車尾配備主動式擾流板，平時隱藏於車身線條中，需要時可升起產生 100 公斤的下壓力，完美兼顧優雅美學與高速貼地性。",
    interior: "座艙內部採用數位化極簡美學。中央沒有雜亂的實體按鍵，取而代之的是高度整合的觸控面板與駕駛側全數位儀表。副駕駛前方也設有一條彩色狀態液晶屏，能即時顯示車速、引擎轉速與 G 值，讓乘客一同體驗躍馬的馳騁極限。",
    story: "這台全新 V6 引擎被研發團隊親切地稱為「Piccolo V12（小V12）」，因為其獨特的排氣聲浪與諧振非常接近純 V12。它展現了法拉利如何在減少排氣量與電氣化的浪潮下，依然保留靈魂深處的賽道激情。"
  },
  {
    id: "ferrari-purosangue",
    name: "Purosangue",
    brand: "Ferrari",
    brandZh: "法拉利",
    spirit: "Super SUV",
    spiritZh: "性能休旅",
    priceClass: "奢華跑旅 (Luxury FUV)",
    bodyType: "suv",
    imageUrl: purosangueImg,
    specs: {
      horsepower: 725,
      torque: "716",
      acceleration: 3.3,
      topSpeed: 310,
      engineType: "6.5L V12 Naturally Aspirated",
      drivetrain: "AWD",
      weight: "2033",
      gearbox: "8-Speed Dual-Clutch DCT"
    },
    soundType: "v12",
    description: "Purosangue（義大利語意為「純血」）是法拉利歷史上第一款四門四座跑車。它拒絕被定義為常規的 SUV，而是採用前中置引擎、後置變速箱的超跑佈局，並搭載令人熱血沸騰的自然進氣 V12 引擎。",
    exterior: "外觀設計充滿流體力學線條，肌肉感的側翼與低矮車頂輪廓與普通 SUV 劃清界線。最引人矚目的是革命性的「迎賓對開式車門」設計，後門向後開啟達79度，無B柱設計創造出極其優雅的尊榮上下車動態。車尾配置了四出排氣尾管與巨大的下擾流板，宣示其躍馬血統。",
    interior: "座艙內部是奢華與科技的交響樂。採用四個獨立運動桶型座椅，每個座椅均配備獨立的加熱與多向電動調節功能。儀表板採用對稱式「雙座艙」佈局，駕駛與副駕駛各自擁有一塊 10.2 吋數位螢幕。全車車頂可選配全景變色玻璃天窗，帶來極致尊榮奢華與通透感。",
    story: "法拉利為了保持純粹操控，為其開發了革命性的「FAST（法拉利主動懸吊技術）」系統，能以 48V 主動式馬達抵消側傾，使其在彎道中的表現如同真正的雙門超跑。對開式車門設計與極致奢華的座艙，讓它成為地表最具賽道靈魂的奢華跑旅。"
  },
  {
    id: "ferrari-roma",
    name: "Roma",
    brand: "Ferrari",
    brandZh: "法拉利",
    spirit: "Grand Tourer",
    spiritZh: "豪華跑車",
    priceClass: "優雅跑車 (GT Coupe)",
    bodyType: "supercar",
    imageUrl: romaImg,
    specs: {
      horsepower: 620,
      torque: "760",
      acceleration: 3.4,
      topSpeed: 320,
      engineType: "3.9L Twin-Turbo V8",
      drivetrain: "RWD",
      weight: "1472",
      gearbox: "8-Speed Dual-Clutch DCT"
    },
    soundType: "v8",
    description: "Ferrari Roma 以「La Nuova Dolce Vita（全新美好生活）」為設計概念，完美展現了 1950 和 1960 年代羅馬優雅、精緻的生活方式。車身線條極致簡約優雅，沒有多餘的擾流板，充滿了紳士氣息。",
    exterior: "外觀設計極具雕塑美感，摒棄了所有多餘的線條與通風孔。車頭採用同色調的漸層點陣式進氣格柵，搭配橫向 LED 頭燈，顯得極具復古科幻感。車尾線條向後收窄，配備了與車尾面板融為一體的隱藏式主動尾翼，在日常行駛中保持純粹的優雅線條。",
    interior: "座艙設計採用獨特的「雙座艙（Dual Cockpit）」概念，將駕駛席與副駕駛席劃分為相互獨立的半包圍空間。中控台配備一塊 8.4 吋縱向懸浮觸控螢幕，搭配全數位儀表。細節做工極其細膩，運用高檔 Fraum 皮革、金屬撥桿與鋼琴烤漆面板，打造浪漫奢華的義式休旅氣氛。",
    story: "儘管外表優雅內斂，Roma 內在依然狂野。它搭載連續四年獲得「國際年度引擎大獎」的 V8 雙渦輪增壓引擎，配合新型的8速雙離合變速箱，能提供極致流暢的動力輸出，是日常代步與高速巡航的優雅之選。"
  },
  {
    id: "ferrari-laferrari",
    name: "LaFerrari",
    brand: "Ferrari",
    brandZh: "法拉利",
    spirit: "Hyper Exotic",
    spiritZh: "頂級超跑",
    priceClass: "傳奇神車 (Legendary Hypercar)",
    bodyType: "supercar",
    imageUrl: laferrariImg,
    specs: {
      horsepower: 963,
      torque: "900",
      acceleration: 2.9,
      topSpeed: 350,
      engineType: "6.3L V12 NA + HY-KERS System",
      drivetrain: "RWD",
      weight: "1255",
      gearbox: "7-Speed Dual-Clutch DCT"
    },
    soundType: "f1_hybrid",
    description: "LaFerrari（意為「唯一的法拉利」）是法拉利在 21 世紀推出的首款混合動力超級跑車，與 McLaren P1 和 Porsche 918 Spyder 並稱為「三大神車（The Holy Trinity）」。",
    exterior: "車身設計深受 F1 空氣力學啟發。低扁的車頭配備中央氣流分流板，車身兩側設有巨大的凹陷散熱通道以引導輪拱氣流。車尾部分配置了主動式擾流板與可調節葉片擴散器。標誌性的前翻式蝶翼車門在開啟時張力十足，視覺效果震撼。",
    interior: "賽車座艙極致專注。座椅為手工量身定制的固定式賽車桶椅，方向盤形狀偏向方形以騰出視線，並整合了大部分 F1 控制旋鈕。踏板組與方向盤可進行手動大範圍滑動調節，座艙內部隨處可見未加修飾的碳纖維紋路與極簡防滑材質，充滿純粹競技氣息。",
    story: "它採用了源自 F1 賽車的 HY-KERS 動能回收系統，可在低轉速下由馬達瞬間補足扭力，並搭配高亢嘶吼的 6.3 升 V12 自然進氣引擎。其車身結構由四種不同類型的碳纖維手工製成，全球限量 499 台，是躍馬技術史上的不朽丰碑。"
  },

  // ==================== LAMBORGHINI ====================
  {
    id: "lambo-revuelto",
    name: "Revuelto",
    brand: "Lamborghini",
    brandZh: "藍寶堅尼",
    spirit: "Hyper Exotic",
    spiritZh: "頂級超跑",
    priceClass: "新世代旗艦 (V12 Flagship)",
    bodyType: "supercar",
    imageUrl: revueltoImg,
    specs: {
      horsepower: 1015,
      torque: "807",
      acceleration: 2.5,
      topSpeed: 350,
      engineType: "6.5L V12 NA + 3 Electric Motors",
      drivetrain: "AWD",
      weight: "1772",
      gearbox: "8-Speed Dual-Clutch DCT"
    },
    soundType: "f1_hybrid",
    description: "Revuelto 是藍寶堅尼首款高性能混合動力超級跑車（HPEV），取代了傳奇的 Aventador。它保留了標誌性的 V12 自然進氣引擎，並搭配三個電動馬達與橫置雙離合變速箱，綜合馬力衝破千匹大關。",
    exterior: "設計充斥著公牛標誌性的幾何線條。車頭燈組採用醒目的三叉「Y」型 LED 日行燈設計，極具科幻未來感。車尾引擎蓋為全開放式設計，直接露出精美的 V12 內燃機藝術品。上方配備三段可調式主動尾翼，車尾中置雙出六角形排氣尾管與巨大的擴散器，視覺效果張狂。",
    interior: "戰鬥機般的「飛航式」座艙設計。中控台由 12.3 吋數位儀表、8.4 吋懸浮中控螢幕與副駕駛前方 9.1 吋彩色螢幕組成三屏聯動。方向盤上設有旋鈕可即時切換高達13種駕駛模式組合。標誌性的紅色戰鬥機翻蓋式發動鈕依然被保留在中央，極具儀式感。",
    story: "該車首次引入了單體式碳纖維前車架結構（Monofuselage），相比前代車型剛性提升、重量減輕。外觀充斥著象徵未來的「Y」型 LED 元素與碳纖維折線，完美延續了大牛家族令人窒息的視覺張力與超凡性能。"
  },
  {
    id: "lambo-sterrato",
    name: "Huracán Sterrato",
    brand: "Lamborghini",
    brandZh: "藍寶堅尼",
    spirit: "Track Weapon",
    spiritZh: "賽道利器",
    priceClass: "越野狂牛 (All-Terrain Special)",
    bodyType: "supercar",
    imageUrl: sterratoImg,
    specs: {
      horsepower: 610,
      torque: "560",
      acceleration: 3.4,
      topSpeed: 260,
      engineType: "5.2L V10 Naturally Aspirated",
      drivetrain: "AWD",
      weight: "1470",
      gearbox: "7-Speed Dual-Clutch DCT"
    },
    soundType: "v10",
    description: "Huracán Sterrato 是地表首款將超級跑車駕駛動態與拉力越野精神結合的跨界大作。車身高度提升了 44 mm，配備了誇張的寬體輪拱、車頂進氣口與全地形輪胎，準備征服泥地、沙地與碎石路面。",
    exterior: "狂野的跨界越野外觀。車頭蓋加裝了兩個精悍的 LED 探照輔助燈，車底安裝了鋁合金防護裝甲。側裙加寬並設有鉚釘露出的防刮碳纖維寬體輪拱，車頂上方高聳的「進氣呼吸管（Snorkel）」能在漫天沙塵的越野路段為中置 V10 引擎提供潔淨的空氣。",
    interior: "防塵防水的競技內裝。座艙大面積採用專屬的深綠色 Alcantara 麂皮，並在數位中控螢幕中引入了拉力賽專用的「越野儀表功能」，包括傾斜儀、指南針、轉向角指示器與地理坐標顯示，讓車主在沙地飛馳時能精準掌握動態。",
    story: "這款車是純燃油 V10 自然進氣引擎的小牛絕唱。藍寶堅尼為其重新編寫了 LDVI 車身動態整合系統，加入了專屬的「RALLY (拉力)」模式，允許車尾在低抓地力路面上進行大角度漂移，帶來前所未有的野性駕馭快感。"
  },
  {
    id: "lambo-urus-perf",
    name: "Urus Performante",
    brand: "Lamborghini",
    brandZh: "藍寶堅尼",
    spirit: "Super SUV",
    spiritZh: "性能休旅",
    priceClass: "極限跑旅 (Performance SUV)",
    bodyType: "suv",
    imageUrl: urusPerfImg,
    specs: {
      horsepower: 666,
      torque: "850",
      acceleration: 3.3,
      topSpeed: 306,
      engineType: "4.0L Twin-Turbo V8",
      drivetrain: "AWD",
      weight: "2150",
      gearbox: "8-Speed Automatic"
    },
    soundType: "v8",
    description: "Urus Performante 將 Super SUV 的性能極限推向全新高度。全車換裝大量碳纖維組件使重量減輕了 47 公斤，車身高度降低、輪距加寬，並配備了鋼製彈簧懸吊以換取最純粹的動態操控反應。",
    exterior: "全車大量使用輕量化碳纖維。引擎蓋為碳纖維雙散熱口設計，前保險桿進氣通道經過重新雕塑以優化煞車冷卻。車尾後方安裝了源自 Aventador SVJ 的天鵝頸尾翼，使後軸下壓力提升了 38%，再配合輕量化天蠍（Akrapovič）鈦合金排氣管，戰鬥感極強。",
    interior: "戰鬥跑旅座艙。全車座椅、中控台與天篷皆由 Nero Cosmus 黑色 Alcantara 包覆，並綴以紅色 Performante 對比縫線。多功能方向盤結合了碳纖維與麂皮，中央的 Tamburo 駕駛模式選擇器新增了「RALLY」模式，帶來頂級 SUV 絕無僅有的極限操控回饋。",
    story: "為了展現其實力，Urus Performante 在發表前便於美國派克峰國際爬山賽（Pikes Peak）創下了 10 分 32.064 秒的量產 SUV 歷史紀錄。其後軸配備了全新差速器，並新增專為泥地狂奔設計的 RALLY 模式，無愧於「狂牛跑旅」之名。"
  },
  {
    id: "lambo-svj",
    name: "Aventador SVJ",
    brand: "Lamborghini",
    brandZh: "藍寶堅尼",
    spirit: "Track Weapon",
    spiritZh: "賽道利器",
    priceClass: "傳奇限量 (Limited Edition)",
    bodyType: "supercar",
    imageUrl: svjImg,
    specs: {
      horsepower: 770,
      torque: "720",
      acceleration: 2.8,
      topSpeed: 350,
      engineType: "6.5L V12 Naturally Aspirated",
      drivetrain: "AWD",
      weight: "1525",
      gearbox: "7-Speed ISR Single-Clutch"
    },
    soundType: "v12",
    description: "Aventador SVJ (Superveloce Jota) 是純燃油 V12 大牛的終極賽道王者。它配備了藍寶堅尼革命性的 ALA 2.0 主動式空氣力學系統，能透過前擾流板與引擎蓋上的閥門，主動引導氣流以提供極限下壓力或降低阻力。",
    exterior: "極度張狂且充滿雕塑感的空氣力學車身。車頭配備 ALA 2.0 主動式氣流閥門，車尾配置了極大的中置 Y 型碳纖維固定尾翼，能大幅增加過彎貼地性。車尾的排氣管被移至牌照上方的高聳中置雙出位置，排氣時宛如噴火噴射機，震撼無比。",
    interior: "極簡純碳競技座艙。為了極限輕量化，車門內板完全由單塊乾式碳纖維板代替，並使用賽車紅拉帶作為門把手。賽車儀表板內含 ALA 主動空氣力學狀態指示。高包裹性碳纖維桶椅與隨處可見的 Y 字型麂皮刺繡，營造出緊繃的熱血賽車氛圍。",
    story: "SVJ 曾在綠色地獄「德國紐柏林北環賽道」創下 6 分 44.97 秒的量產車最速單圈世界紀錄。其純燃油 V12 引擎高亢尖銳的排氣聲浪如同過往的 F1 賽車，加上全球僅限量 900 台，使其成為超跑歷史上最具收藏價值的狂牛之一。"
  },
  {
    id: "lambo-sian",
    name: "Sián FKP 37",
    brand: "Lamborghini",
    brandZh: "藍寶堅尼",
    spirit: "Hyper Exotic",
    spiritZh: "頂級超跑",
    priceClass: "超級電容神車 (Hypercar)",
    bodyType: "supercar",
    imageUrl: sianImg,
    specs: {
      horsepower: 819,
      torque: "760",
      acceleration: 2.8,
      topSpeed: 355,
      engineType: "6.5L V12 NA + 48V Supercapacitor",
      drivetrain: "AWD",
      weight: "1600",
      gearbox: "7-Speed ISR Single-Clutch"
    },
    soundType: "f1_hybrid",
    description: "Sián FKP 37 是藍寶堅尼首款採用混合動力技術的限量超跑。它微型化了電能驅動系統，革命性地使用「超級電容（Supercapacitor）」技術，重量僅為同等功率電池的三分之一，卻能瞬間釋放與回收極大電流。",
    exterior: "極具震撼張力的科幻外觀。車頭燈採用非常前衛的 Y 字型日行燈，側車身大進氣口直接向 Countach 致敬。車尾由六個六角形尾燈與獨特的浮動式垂直尾翼葉片組成，後方配備主動溫控葉片，能感應排氣溫度自動開啟散熱，令人嘆為觀止。",
    interior: "極致細膩的高科技奢華座艙。中控台以大面積液晶中控螢幕與金屬雕琢的空調出風口組成。內裝採用了義大利國寶級皮廠 Poltrona Frau 的奢華皮革，更首度引進了 3D 列印出風口，將頂級手藝與先進製造技術融為一體。",
    story: "車名中的「Sián」在博洛尼亞方言中意為「閃電」，而「FKP 37」則是向逝世的福斯集團前主席 Ferdinand Karl Piëch（生於1937年）致敬。該車全球僅限量 63 台，其設計語彙強烈啟發自 1970 年代的 Countach 楔形元素。"
  },
  {
    id: "lambo-countach",
    name: "Countach LPI 800-4",
    brand: "Lamborghini",
    brandZh: "藍寶堅尼",
    spirit: "Hyper Exotic",
    spiritZh: "頂級超跑",
    priceClass: "致敬復刻版 (Retro Modern Hypercar)",
    bodyType: "supercar",
    imageUrl: countachImg,
    specs: {
      horsepower: 814,
      torque: "735",
      acceleration: 2.8,
      topSpeed: 355,
      engineType: "6.5L V12 NA + 48V Supercapacitor",
      drivetrain: "AWD",
      weight: "1595",
      gearbox: "7-Speed ISR Single-Clutch"
    },
    soundType: "f1_hybrid",
    description: "Countach LPI 800-4 是為慶祝傳奇契形超跑 Countach 問世50週年而打造的現代復刻傑作。它保留了經典的側進氣口、水平尾燈與標誌性的剪刀門，骨子裡則流淌著現代 V12 超級電容混合動力的血液。",
    exterior: "經典契形設計的現代轉譯。低矮扁平的無大燈蓋車頭、側窗下方的魚鰓狀黑色散熱片以及車側標誌性的三角黑色進氣道，皆完美復刻了經典 Countach LP400 的靈魂。車尾搭配經典的四出圓形尾管與隱格式倒三圓尾燈，完美連結了 70 年代科幻美學與現代科技。",
    interior: "紅黑撞色的經典復古座艙。座椅縫線細節取材自原版 Countach 的縱向皮革凹槽。中控台配有一塊 8.4 吋 HDMI 觸控螢幕，內建專屬的「Stile (設計)」軟體，可為車主播放 Countach 的設計演變史，儀表風格亦可切換為復古指針顯示。",
    story: "這款車限量生產 112 台，該數字源自於當年原創項目代號「LP 112」。它將 70 年代的科幻美學與現代極致工程相結合，完美體現了藍寶堅尼如何用現代科技重新詮釋車壇歷史上最偉大的設計圖騰。"
  },

  // ==================== PORSCHE ====================
  {
    id: "porsche-911gt3rs",
    name: "911 GT3 RS (992)",
    brand: "Porsche",
    brandZh: "保時捷",
    spirit: "Track Weapon",
    spiritZh: "賽道利器",
    priceClass: "道路版賽車 (Road-legal Racer)",
    bodyType: "supercar",
    imageUrl: gt3rsImg,
    specs: {
      horsepower: 525,
      torque: "465",
      acceleration: 3.2,
      topSpeed: 296,
      engineType: "4.0L Flat-6 Naturally Aspirated",
      drivetrain: "RWD",
      weight: "1450",
      gearbox: "7-speed PDK"
    },
    soundType: "v6",
    description: "911 GT3 RS (992) 是無妥協賽車基因的終極體現。它取消了前行李箱以容納革命性的「中央單一水箱」，並配備了帶有 DRS（可變尾翼系統）的巨大主動式天鵝頸尾翼，在高速下能產生高達 860 公斤的下壓力。",
    exterior: "純粹的空氣力學怪物。前艙蓋設有兩個巨大的黑色導風通道，前輪拱上方配備鋸齒狀的排氣鯊魚鰓，用以宣洩輪拱壓力。最震撼的是車頂高度以上的巨大「天鵝頸」主動式尾翼，配備源自 F1 的 DRS 功能，能瞬間平放尾翼以降低阻力，在極限過彎時直立以增強穩定性。",
    interior: "戰鬥氣息濃郁的輕量化賽車艙。標配碳纖維防滾籠與六點式安全帶。方向盤上設有四個獨立賽車旋鈕，可即時調整 PASM 避震阻尼回彈、後差速器鎖定比率以及 TC 循跡切換。輕量化碳纖維一體式桶椅與極簡門拉帶，盡顯公路賽車本色。",
    story: "這款車是自然進氣高轉速水平對臥六缸引擎的巔峰之作，轉速可直達 9000 rpm。駕駛艙內的轉向盤設有四個獨立旋鈕，允許駕駛者在行進間手動調整避震器的阻尼回彈、後差速器鎖定比例以及循跡控制系統，簡直就是一台擁有車牌的杯賽賽車。"
  },
  {
    id: "porsche-taycan-s",
    name: "Taycan Turbo S",
    brand: "Porsche",
    brandZh: "保時捷",
    spirit: "Luxury Executive",
    spiritZh: "奢華旗艦",
    priceClass: "純電跑房車 (Electric Performance)",
    bodyType: "sedan",
    imageUrl: taycanImg,
    specs: {
      horsepower: 952,
      torque: "1110",
      acceleration: 2.4,
      topSpeed: 260,
      engineType: "Dual Electric Motors (800V Architecture)",
      drivetrain: "AWD",
      weight: "2295",
      gearbox: "2-Speed Automatic (Rear Axle)"
    },
    soundType: "electric",
    description: "全新改款的 Taycan Turbo S 將純電超跑的性能推向極限。憑藉強化的雙馬達與 800V 高壓系統，在 Launch Control 彈射起步模式下可瞬間爆發高達 952 匹馬力與 1110 Nm 的驚人扭力，0-100 加速僅需 2.4 秒。",
    exterior: "極富未來感的保時捷家族飛線設計。車頭兩側設有獨特的垂直導風口，並搭配標誌性的四點式 LED 矩陣大燈。低扁寬體車身配備主動式擾流板與自動開閉進氣葉片，車尾採用經典的貫穿式 LED 燈帶與立體保時捷玻璃字標，呈現科技動感美學。",
    interior: "全數位化奢華科技座艙。中控台由一塊 16.8 吋獨立曲面數位儀表板、10.9 吋中控觸控幕以及可選配的副駕駛座螢幕組成，物理按鍵減至最少。內裝選用頂級的無皮革環保材質（Race-Tex）與高檔木飾板，打造靜謐且充滿未來科技感的操駕環境。",
    story: "保時捷堅持純電車款依然必須擁有純正的保時捷操駕手感。Taycan 首次配備了新型的 Porsche Active Ride 主動懸吊，能在起步與煞車時完全抵消車身前仰後傾，甚至在過彎時像摩托車般往彎內傾斜，徹底顛覆了物理定律。"
  },
  {
    id: "porsche-918",
    name: "918 Spyder",
    brand: "Porsche",
    brandZh: "保時捷",
    spirit: "Hyper Exotic",
    spiritZh: "頂級超跑",
    priceClass: "傳奇三神車 (Legendary Hypercar)",
    bodyType: "supercar",
    imageUrl: spyder918Img,
    specs: {
      horsepower: 887,
      torque: "1280",
      acceleration: 2.6,
      topSpeed: 345,
      engineType: "4.6L V8 + Dual Electric Motors",
      drivetrain: "AWD",
      weight: "1674",
      gearbox: "7-speed PDK"
    },
    soundType: "f1_hybrid",
    description: "918 Spyder 是保時捷的科技光環旗艦超跑，與 LaFerrari、McLaren P1 同屬超跑黃金時代的混動三大神車。其搭載源自 Le Mans 賽車的 4.6 升高轉速 V8 引擎，並配置前後兩具電動馬達。",
    exterior: "經典的勒芒賽車比例車身。車頂蓋為手動碳纖維可拆卸式設計，拆下後可收納至前行李箱。最著名的特徵是其排氣管設計在引擎正上方的「頂置垂直排氣管（Top Pipes）」，使得高亢排氣直接朝上空排放，帶來震撼的聽覺效果與獨特的熱空氣擴散軌跡。",
    interior: "極具前衛科技感的懸浮式中控橋。斜傾的碳纖維中控面板上整合了革命性的縱向觸控操作系統，實體儀表由三個經典的砲筒式液晶屏組成。大量高精度磨砂鋁合金旋鈕與極輕量碳纖維包圍，完美在極簡賽道美學與奢華質感中取得平衡。",
    story: "這台車最具特色的是其頂置排氣管（Top Pipes），廢氣直接從引擎上方排空，能大幅降低發動機艙溫度。它也是歷史上首款在德國紐柏林北環賽道打破 7 分鐘大關（創下 6 分 57 秒）的道路版量產車，全球限量 918 台。"
  },
  {
    id: "porsche-gt4rs",
    name: "718 Cayman GT4 RS",
    brand: "Porsche",
    brandZh: "保時捷",
    spirit: "Track Weapon",
    spiritZh: "賽道利器",
    priceClass: "中置小鋼砲 (Mid-engine Track Car)",
    bodyType: "supercar",
    imageUrl: gt4rsImg,
    specs: {
      horsepower: 500,
      torque: "450",
      acceleration: 3.4,
      topSpeed: 315,
      engineType: "4.0L Flat-6 Naturally Aspirated",
      drivetrain: "RWD",
      weight: "1415",
      gearbox: "7-speed PDK"
    },
    soundType: "v6",
    description: "718 Cayman GT4 RS 是保時捷首次將 911 GT3 的 4.0 升純自然進氣引擎塞入中置引擎的 Cayman 車體中。中置引擎帶來的完美重心配比，與 500 匹馬力的狂暴輸出，使它成為最危險的彎道利器。",
    exterior: "極富競技攻擊性的中置小跑車外觀。前艙蓋採用雙 NACA 進氣口，前輪拱配置散熱格柵。最獨特的是將原本的後側三角玻璃窗改為「獨立碳纖維引擎吸氣道」，搭配車尾的天鵝頸式雙固定尾翼與雙出圓形尾管，提供賽車級的高速氣流傳輸。",
    interior: "專為極致操駕打造的賽車座艙。儀表板與車門飾板由防反光 Race-Tex 麂皮包覆，配備了極度包裹的碳纖維單體桶椅。由於引擎進氣口直通座艙後方，駕駛者在踩下油門時，可直接在耳後聽到直列六缸 9,000 rpm 吸氣與排氣的機械嘶吼聲，極致熱血。",
    story: "該車的進氣口直接設計在駕駛員左右耳後方的側窗位置。當發動機高達 9000 rpm 嘶吼時，強烈的吸氣諧振聲會直接震撼駕駛者的耳膜，提供極致沉浸且原始的機械駕馭快感，在小跑車界完全沒有競爭對手。"
  },
  {
    id: "porsche-panamera-hybrid",
    name: "Panamera Turbo E-Hybrid",
    brand: "Porsche",
    brandZh: "保時捷",
    spirit: "Luxury Executive",
    spiritZh: "奢華旗艦",
    priceClass: "奢華轎跑 (Luxury Sports Sedan)",
    bodyType: "sedan",
    imageUrl: panameraImg,
    specs: {
      horsepower: 680,
      torque: "930",
      acceleration: 3.2,
      topSpeed: 315,
      engineType: "4.0L V8 Twin-Turbo + Electric Motor",
      drivetrain: "AWD",
      weight: "2360",
      gearbox: "8-speed PDK"
    },
    soundType: "v8",
    description: "Panamera Turbo E-Hybrid 完美融合了賽道跑車的動態實力與頂級商務轎車的奢華乘坐體驗。全新研發的 V8 雙渦輪混動系統不僅能提供 680 匹馬力的強大輸出，亦支援純電靜音行駛。",
    exterior: "優雅動感的四門轎跑車身輪廓。車頭進氣口更為開闊，搭配貫穿式車身腰線與無窗框車門。車尾配備了保時捷標誌性的「三段式折疊主動尾翼」，在高速時會向兩側展開以增加後軸下壓力。專屬的「Turbonite (灰金)」消光套件點綴各處徽飾，氣場強大。",
    interior: "極致奢華的數位行政座艙。中控台配備了最新的曲面液晶儀表與嵌入式副駕駛座螢幕，排檔桿移至方向盤後方以釋放中央空間。後排配備雙獨立按摩座椅與中央液晶控制屏幕，搭配頂級 Burmester 3D 環繞音響，兼顧總裁坐駕的尊榮質感。",
    story: "為了提供極致的行路質感，此車配備了革命性的 Porsche Active Ride 主動懸吊控制系統，可對每個避震器進行獨立的液壓控制，在碎石路面行駛時完全撫平顛簸，而在切換至 Sport Plus 模式時，又瞬間轉變為支撐力十足的硬派跑車底盤。"
  },
  {
    id: "porsche-cayenne-gt",
    name: "Cayenne Turbo GT",
    brand: "Porsche",
    brandZh: "保時捷",
    spirit: "Super SUV",
    spiritZh: "性能休旅",
    priceClass: "最強 SUV (Ultimate Performance SUV)",
    bodyType: "suv",
    imageUrl: cayenneGtImg,
    specs: {
      horsepower: 659,
      torque: "850",
      acceleration: 3.3,
      topSpeed: 305,
      engineType: "4.0L Twin-Turbo V8",
      drivetrain: "AWD",
      weight: "2245",
      gearbox: "8-Speed Tiptronic S"
    },
    soundType: "v8",
    description: "Cayenne Turbo GT 是保時捷休旅家族的性能顛峰。僅提供 Coupe 跑旅車身結構，配備了極致激進的碳纖維空氣力學套件、中置雙出鈦合金排氣管以及專屬調教的底盤控制系統，旨在打造最速 SUV。",
    exterior: "極度強悍的轎跑 SUV 線條。配備碳纖維車頂、碳纖維側尾翼板，前進氣壩格柵更寬大。車尾頂部裝有固定式碳纖維擾流板，並在行李箱蓋邊緣配置了加寬的主動升降式尾翼，搭配中置雙出鈦合金輕量化排氣尾管，帶來極具辨識度的外觀視覺張力。",
    interior: "戰鬥感爆表的跑旅座艙。四個獨立跑車桶椅大面積採用 Race-Tex 防滑麂皮包覆，配備了黃色或青銅色對比車縫線與 Turbo GT 專屬頭枕刺繡。麂皮多功能方向盤上方印有黃色回正標記，搭配高精度液晶儀表，將熱血操控氛圍與 SUV 的空間實用性完美結合。",
    story: "此車在發表前，便由保時捷測試車手 Lars Kern 在紐柏林北環賽道創下 7 分 38.925 秒的震撼單圈紀錄，超越了許多純正跑車。其 V8 雙渦輪引擎曲軸、活塞、連桿皆經過賽用級強化，能承受持續的賽道壓榨。"
  },

  // ==================== MASERATI ====================
  {
    id: "maserati-mc20",
    name: "MC20",
    brand: "Maserati",
    brandZh: "瑪莎拉蒂",
    spirit: "Hyper Exotic",
    spiritZh: "頂級超跑",
    priceClass: "中置超跑 (Mid-engine Supercar)",
    bodyType: "supercar",
    imageUrl: mc20Img,
    specs: {
      horsepower: 630,
      torque: "730",
      acceleration: 2.9,
      topSpeed: 325,
      engineType: "3.0L V6 Twin-Turbo (Nettuno)",
      drivetrain: "RWD",
      weight: "1500",
      gearbox: "8-Speed Dual-Clutch DCT"
    },
    soundType: "v6",
    description: "MC20 (Maserati Corse 2020) 宣告了三叉戟品牌重返超級跑車領域的榮光。採用全碳纖維單體座艙與蝶翼式車門，風洞實驗室打磨的車身外觀極致平滑優雅，無需誇張的尾翼即可透過底盤擴散器產生極高下壓力。",
    exterior: "極簡優雅的雕塑藝術外觀。全車採用了炫目的「蝶翼式側翻車門」，開啟時張力非凡且極其方便進出。車身上部線條流暢優雅，完全沒有傳統超跑誇張的導流板，下部則採用外露的深色碳纖維空氣動力組件。車尾配備精悍的雙出排氣與造型典雅的 Trident 三叉戟散熱尾窗，動人心魄。",
    interior: "極簡奢華的義式工藝座艙。以碳纖維、黑色皮革與藍色縫線交叉點綴。中控台高度精簡，只保留一個碳纖維控制旋鈕用於切換駕駛模式，並配備兩個 10 25 吋高解析度數位液晶螢幕。極佳的工藝細節與精緻的手感，展現了瑪莎拉蒂獨一無二的跑車格調。",
    story: "其心臟是名為「海王星 (Nettuno)」的全新 3.0 升 V6 引擎，這台引擎完全由瑪莎拉蒂自主研發，並引入了「雙火星塞雙燃燒室」的 F1 賽車前哨燃燒室技術（Maserati Twin Combustion），在市售跑車中屬首創，爆發出高達 630 匹的強悍馬力。"
  },
  {
    id: "maserati-gt-trofeo",
    name: "GranTurismo Trofeo",
    brand: "Maserati",
    brandZh: "瑪莎拉蒂",
    spirit: "Grand Tourer",
    spiritZh: "豪華跑車",
    priceClass: "豪華跑車 (Luxury GT)",
    bodyType: "supercar",
    imageUrl: gtTrofeoImg,
    specs: {
      horsepower: 550,
      torque: "650",
      acceleration: 3.5,
      topSpeed: 320,
      engineType: "3.0L V6 Twin-Turbo (Nettuno)",
      drivetrain: "AWD",
      weight: "1795",
      gearbox: "8-Speed Automatic"
    },
    soundType: "v6",
    description: "全新 GranTurismo Trofeo 延續了三叉戟品牌傳承 75 年的 GT 跑車精神。車身輪廓優雅修長，經典的一體式引擎蓋兼具雕塑美感與空氣力學，座艙內部配備頂級皮革與先進雙螢幕系統，是義式優雅奔馳的代表。",
    exterior: "無可挑剔的完美比例車身。車頭配備低扁的三叉戟盾形格柵與直立式 LED 大燈。長車頭、短車尾的經典 GT 輪廓線條極其滑順，葉子板兩側設有標誌性的三孔散熱埠。車尾圓潤飽滿，配備燻黑 LED 尾燈與四出運動排氣尾管，展現出奢華優雅的動態氣息。",
    interior: "極致奢華的四座豪華座艙。全車座椅採用義大利頂級手工小牛皮包覆，綴以刺繡三叉戟標誌。中控台配置了雙觸控螢幕（上方 12.3 吋、下方 8.8 吋），搭配經典的「智能數位時鐘」，可變換時鐘、G值與指南針界面。Sonus faber 義大利頂級音響帶來極致聽覺盛宴。",
    story: "此車搭載與 MC20 超跑同源但調校更溫和的「海王星」V6 引擎。為了實現全天候的輕鬆驾馭，新一代 GT 首次換裝了智慧四輪驅動系統，並配備主動式氣壓懸吊，使它既能在彎道中狂奔，也能舒適載著四名成人進行洲際旅行。"
  },
  {
    id: "maserati-cabrio-folgore",
    name: "GranCabrio Folgore",
    brand: "Maserati",
    brandZh: "瑪莎拉蒂",
    spirit: "Grand Tourer",
    spiritZh: "豪華跑車",
    priceClass: "純電敞篷 (Electric GT Convertible)",
    bodyType: "cabriolet",
    imageUrl: cabrioFolgoreImg,
    specs: {
      horsepower: 829,
      torque: "1350",
      acceleration: 2.8,
      topSpeed: 290,
      engineType: "Triple Electric Motors (800V Architecture)",
      drivetrain: "AWD",
      weight: "2200",
      gearbox: "Single-Speed Direct Drive"
    },
    soundType: "electric",
    description: "GranCabrio Folgore 是超豪華品牌中首款全純電的四座敞篷跑車。配備極具科技感的 800V 電能架構與三具高性能馬達（前一後二），可瞬間爆發 829 匹馬力與 1350 Nm 的海嘯級扭力，開篷奔馳極致拉風。",
    exterior: "極致風流的電動軟頂敞篷外觀。織物軟頂篷可在時速 50 km/h 以下、14 秒內完成快速開閉。車頭格柵採用 Folgore 專屬的封閉式通風孔設計，車側配備特殊設計的空氣力學低阻輪圈，車尾取消了排氣尾管，取而代之的是極度平整的擴散底盤，風阻極低。",
    interior: "奢華優雅的無感電氣化座艙。座椅採用 Econyl 全新環保尼龍材料，其材質由海洋回收漁網製成，但質地溫潤如絲。前排座椅配備了專屬的「頸部暖風系統」，在低溫開蓬行駛時能為乘員提供溫馨暖意。中控與指針儀表全面數位化，隨時提供安靜奢華的高速旅程。",
    story: "「Folgore」在義大利語中意為「閃電」。瑪莎拉蒂拒絕讓純電車變得平淡無奇，特別聘請聲學工程師為其調校了專屬的「電能交響樂聲浪」，透過車內外高傳真音響系統，模擬傳統義式燃油引擎的共鳴聲，重現品牌的靈魂聽覺。"
  },
  {
    id: "maserati-grecale-trofeo",
    name: "Grecale Trofeo",
    brand: "Maserati",
    brandZh: "瑪莎拉蒂",
    spirit: "Super SUV",
    spiritZh: "性能休旅",
    priceClass: "豪華跑旅 (Luxury SUV)",
    bodyType: "suv",
    imageUrl: grecaleTrofeoImg,
    specs: {
      horsepower: 530,
      torque: "620",
      acceleration: 3.8,
      topSpeed: 285,
      engineType: "3.0L V6 Twin-Turbo (Nettuno)",
      drivetrain: "AWD",
      weight: "2027",
      gearbox: "8-Speed Automatic"
    },
    soundType: "v6",
    description: "Grecale 命名源自於席捲地中海的烈風。而 Grecale Trofeo 則是該家族的性能圖騰，將中置超跑的引擎技術移植入一部中型奢華 SUV 之中，帶來極致靈活且兼具日常實用性的鋼砲級駕駛感受。",
    exterior: "動感優雅的運動型 SUV 身段。車頭為突出的垂直盾形進氣格柵，並鑲嵌超大三叉戟，搭配靈感來自 MC20 的垂直大燈。Trofeo 版本配置了全碳纖維前下擾流板、運動側裙與後下擴散器，搭配 21 吋競技輪圈與紅色煞車卡鉗，流露十足的戰鬥姿態。",
    interior: "極致現代的數位座艙。車內配備四個液晶螢幕，取消了幾乎所有實體按鍵。座椅由頂級 3D 縫線真皮包覆，中控飾板引入了罕見的碳纖維紋理磨砂工藝。車內還配備了奢華的雙層天窗與 21 聲道 Sonus faber 殿堂級音響，在狂野馳騁間依然維持意式優雅舒適。",
    story: "這款跑旅搭載 530 匹馬力的「海王星」V6 引擎，並設有專屬的「Corsa (賽道)」模式。在此模式下，電子懸吊會將車身降至最低，油門反應與變速箱換檔速度變得極為激進，儀表盤亦切換至賽車動態顯示，隨時釋放狂野基因。"
  },
  {
    id: "maserati-levante-trofeo",
    name: "Levante Trofeo",
    brand: "Maserati",
    brandZh: "瑪莎拉蒂",
    spirit: "Super SUV",
    spiritZh: "性能休旅",
    priceClass: "奢華旗艦 SUV (V8 SUV)",
    bodyType: "suv",
    imageUrl: levanteTrofeoImg,
    specs: {
      horsepower: 580,
      torque: "730",
      acceleration: 4.1,
      topSpeed: 302,
      engineType: "3.8L Twin-Turbo V8 (Ferrari-built)",
      drivetrain: "AWD",
      weight: "2170",
      gearbox: "8-Speed Automatic"
    },
    soundType: "v8",
    description: "Levante Trofeo 是瑪莎拉蒂首款旗艦跑旅的終極版。它將一具由同門大師「法拉利」手工組裝的 3.8 升雙渦輪增壓 V8 引擎植入底盤，讓這台龐然大物擁有突破 300 km/h 極速的驚人實力。",
    exterior: "霸氣凌人的大型運動 SUV。車頭格柵採用雙肋垂直格柵，兩側進氣壩尺寸大幅增加且採用碳纖維網狀結構。引擎蓋上配置了專屬的散熱孔，車側標有黃色邊框的「Trofeo」專屬徽章。車尾配置了極具辨識度的四出深色運動尾管，散發不怒自威的君王氣場。",
    interior: "極奢皮革宮殿座艙。全車座椅採用了極其昂貴且質地嬌嫩的「Pieno Fiore」頂級天然皮革包覆，觸感細膩絲滑。天篷由黑色麂皮鋪陳，中控與排檔座使用外露式高光碳纖維板裝飾。類比指針時鐘高高座落於中央，將義大利傳統手工奢華演繹得淋漓盡致。",
    story: "這款 V8 引擎具有獨特的義大利十字曲軸設計，排氣聲浪高亢迷人。Levante Trofeo 配備了主動式 IVC（車身整合控制）系統與 Q4 智慧四輪驅動，在瀕臨失控邊緣時能主動修正轉向不足，確保極限安全與狂暴快感的並存。"
  },
  {
    id: "maserati-qp-trofeo",
    name: "Quattroporte Trofeo",
    brand: "Maserati",
    brandZh: "瑪莎拉蒂",
    spirit: "Luxury Executive",
    spiritZh: "奢華旗艦",
    priceClass: "奢華高性能轎跑 (Flagship Sedan)",
    bodyType: "sedan",
    imageUrl: quattroporteTrofeoImg,
    specs: {
      horsepower: 580,
      torque: "730",
      acceleration: 4.5,
      topSpeed: 326,
      engineType: "3.8L Twin-Turbo V8 (Ferrari-built)",
      drivetrain: "RWD",
      weight: "2000",
      gearbox: "8-Speed Automatic"
    },
    soundType: "v8",
    description: "Quattroporte（義大利語意為「四門」）是高性能奢華四門轎跑車的始祖。而 Quattroporte Trofeo 則是三叉戟家族中最優雅也最危險的西裝暴徒，結合了後輪驅動、V8 引擎與極致的總裁商務座艙。",
    exterior: "高貴典雅的商務運動大轎跑。車身長達 5.26 米，氣宇非凡。車頭格柵採用直立式亮黑設計，搭配修長典雅的 LED 頭燈。前輪葉子板散熱孔邊框點綴象徵高性能的紅色線條，車尾配置了經典的倒L字型迴力鏢尾燈與亮黑色四出運動排氣，流露出不可忽視的總裁坐駕威嚴。",
    interior: "極致尊貴的頭等艙座艙。後排配備了極寬敞的雙獨立總裁商務座椅，擁有獨立空調與影音娛樂系統。全車內置頂級 Pieno Fiore 天然真皮，並在門板與中控使用高檔黑木紋與碳纖維裝飾。極佳的隔音效果與奢華工藝，完美呈現低調奢華的移動總裁辦公室。",
    story: "此車搭載與法拉利同源的 580 匹 V8 雙渦輪引擎，在 Corsa 模式下，排氣閥門完全打開，會爆發出震耳欲聾的賽道聲浪。全球限量生產，其修長洗鍊的外觀與碳纖維包圍，使其成為低調富豪展現個性的終極座駕。"
  },

  // ==================== MERCEDES-BENZ ====================
  {
    id: "mercedes-amg-one",
    name: "AMG One",
    brand: "Mercedes-Benz",
    brandZh: "賓士",
    spirit: "Hyper Exotic",
    spiritZh: "頂級超跑",
    priceClass: "F1 道路神車 (F1 Hypercar)",
    bodyType: "supercar",
    imageUrl: amgOneImg,
    specs: {
      horsepower: 1063,
      torque: "900",
      acceleration: 2.9,
      topSpeed: 352,
      engineType: "1.6L V6 Turbocharged + 4 Electric Motors (F1 Engine)",
      drivetrain: "AWD",
      weight: "1695",
      gearbox: "7-Speed Automated Manual"
    },
    soundType: "f1_hybrid",
    description: "Mercedes-AMG One 是有史以來第一款將「正統 Formula 1 賽車引擎」直接移植至道路用車的終極神車。搭載與賓士 F1 冠軍賽車同源的 1.6 升 V6 電子渦輪增壓引擎，配合四具馬達，綜合輸出高達 1063 匹馬力。",
    exterior: "純粹的 F1 賽車道路化外觀。低矮前扁的車身設有極大前輪拱通風葉片，車頂高聳著巨大的「集氣進氣口」與碳纖維縱向「鯊魚鰭」，用以引導氣流並提高直道穩定度。車尾配置了極為龐大的主動升降式尾翼與正統 F1 中置三出圓形噴氣排氣尾管，充滿賽道侵略感。",
    interior: "極致硬派的雙人賽車艙。配備了完全移植自 F1 賽車的方形多功能競技方向盤，上方設有變速箱換檔提示燈。座椅為直接固定於單體碳纖維座艙上的兩張簡極運動桶椅，後視鏡改為全數位後視螢幕，車內大部分區域都是裸露的防滑碳纖維與麂皮，沒有任何多餘的舒適妥協點。",
    story: "研發這台車被賓士高層戲稱為「瘋狂的決定」，因為將怠速高達 5,000 rpm 的 F1 引擎降至道路法規標準並能在街頭行駛，幾乎是不可能的任務。AMG One 在 2022 年以 6 分 35.183 秒的震撼成績，徹底刷新並稱霸了德國紐柏林北環量產車最速紀錄。"
  },
  {
    id: "mercedes-amg-gt-black",
    name: "AMG GT Black Series",
    brand: "Mercedes-Benz",
    brandZh: "賓士",
    spirit: "Track Weapon",
    spiritZh: "賽道利器",
    priceClass: "賽道王者 (Track Focus Special)",
    bodyType: "supercar",
    imageUrl: amgGtBlackImg,
    specs: {
      horsepower: 730,
      torque: "800",
      acceleration: 3.2,
      topSpeed: 325,
      engineType: "4.0L V8 Twin-Turbo (Flat-Plane Crank)",
      drivetrain: "RWD",
      weight: "1540",
      gearbox: "7-Speed Dual-Clutch DCT"
    },
    soundType: "v8",
    description: "AMG GT Black Series 是賓士市售 V8 車款的至高巔峰。工程師首度為這具 4.0 升 V8 換裝「平面曲軸（Flat-Plane Crank）」，使其高轉速排氣效率更為狂暴，搭配極其誇張的雙層主動式尾翼與手動可調前擾流板。",
    exterior: "狂暴的 GT3 賽車化外觀。配備極為寬大的 Panamericana 直瀑式進氣格柵，引擎蓋採用全碳纖維雙排熱通道設計。車尾配備了誇張的「雙層天鵝頸主動尾翼」，上層翼板可由電腦自動調整多達 20 度偏轉角，車底配置賽車平整化底盤與四出鈦合金尾管，氣勢逼人。",
    interior: "橙黑配色的競技豪華座艙。配備高包覆性的 AMG 賽車桶椅，並以黑色麂皮（DINAMICA）與極醒目的橙色車縫線、賽車安全帶裝飾。多功能麂皮方向盤下方設有獨特的黃色 9 段 AMG 牽引力控制（TC）旋鈕，後方配備防滾籠，隨時準備上賽道刷圈。",
    story: "「Black Series」代表著 AMG 的極限改裝圖騰。此車的碳纖維引擎蓋上設有巨大的散熱開口，後尾翼的上層翼板可在行進間由電機主動旋轉達 20 度，以在彎道提供貼地抓地力或在直線降低阻力，是一部專為刷寫賽道紀錄而生的性能怪物。"
  },
  {
    id: "mercedes-sl63-se",
    name: "SL 63 S E Performance",
    brand: "Mercedes-Benz",
    brandZh: "賓士",
    spirit: "Grand Tourer",
    spiritZh: "豪華跑車",
    priceClass: "旗艦敞篷 (Hybrid Roadster)",
    bodyType: "cabriolet",
    imageUrl: sl63seImg,
    specs: {
      horsepower: 816,
      torque: "1420",
      acceleration: 2.9,
      topSpeed: 317,
      engineType: "4.0L V8 Twin-Turbo + Electric Motor",
      drivetrain: "AWD",
      weight: "2235",
      gearbox: "9-Speed MCT Automatic"
    },
    soundType: "v8",
    description: "全新 SL 63 S E Performance 將傳奇 SL 敞篷的優雅身段與 AMG 的「E Performance」高性能油電技術融為一體。前軸配備 4.0L V8 雙渦輪引擎，後軸配置高性能馬達與二速變速箱，能提供難以置信的 1420 Nm 狂暴扭力。",
    exterior: "優雅奢華與運動性能融合的敞篷跑車。採用經典的 3 層高科技織物軟頂設計，車頭為直瀑式格柵，車側線條飽滿迷人，配備隱藏式門把手。車尾配備了與行李箱蓋高度整合的「5段式主動升降擾流尾翼」，搭配專屬的梯形雙邊四出排氣管，極富優雅風姿。",
    interior: "「超數位化」的豪華座艙。車內配備了一塊可「手動/自動調整傾斜角度」的 11.9 吋懸浮中控觸控螢幕，用以完全避免開蓬行駛時陽光反射造成的眩光。座椅選用頂級 Nappa 真皮並具備通風與頸部暖風系統，輔以碳纖維元素，在狂暴加速之餘依然能悠閒享受陽光拂面。",
    story: "此車的油電架構直接借鑒了賓士 F1 車隊的技術，後軸的輕量化高性能電池採用先進的「液冷直冷技術」，能確保電池在持續極限充放電下依然維持在最佳工作溫度。軟頂敞篷可在 15 秒內完成開篷，展現極致風流。"
  },
  {
    id: "mercedes-g63",
    name: "Mercedes-AMG G 63",
    brand: "Mercedes-Benz",
    brandZh: "賓士",
    spirit: "Super SUV",
    spiritZh: "性能休旅",
    priceClass: "硬派越野之王 (Luxury Off-Roader)",
    bodyType: "suv",
    imageUrl: g63Img,
    specs: {
      horsepower: 585,
      torque: "850",
      acceleration: 4.5,
      topSpeed: 220,
      engineType: "4.0L Twin-Turbo V8",
      drivetrain: "AWD",
      weight: "2560",
      gearbox: "9-speed Automatic"
    },
    soundType: "v8",
    description: "Mercedes-AMG G 63 是全球最具辨識度的豪華硬派越野車。它保留了自 1979 年以來標誌性的三軸差速鎖、方正軍用外觀、外掛備胎與機械式車門鎖，並換裝了強大的 AMG 雙渦輪 V8 引擎與雙邊側排氣管。",
    exterior: "經典不朽的硬派方盒子外觀。車頭換裝了 AMG 專屬的鍍鉻直瀑格柵與圓形幾何多光束 LED 大燈。最亮眼的莫過於位於車側後輪前方、雙邊四出的側排氣管，搭配外掛式不鏽鋼備胎盒與極具機械聲響的車門鎖扣設計，呈現極致粗獷風格。",
    interior: "硬漢外表下的奢華科技宮殿。配置雙 12.3 吋一體式大螢幕，方向盤升級為 AMG 戰鬥方向盤並附設模式控制旋鈕。座椅為頂級 Nappa 真皮包裹的主動多仿形座椅，具備通風與按摩功能，甚至在副駕駛前方保留了傳奇的越野抓手與三個發光的金屬差速鎖按鍵，科技與野性共存。",
    story: "側邊雙出排氣管所產生的低沉 V8 隆隆聲（V8 Rumble）是 G 63 的標誌性靈魂。儘管車重超過 2.5 噸且阻力極大，但在全時四輪驅動與三把差速鎖的加持下，它既能像坦克般征服沙漠戈壁，也能在柏油路上以 4.5 秒的驚人速度完成彈射起步。"
  },
  {
    id: "mercedes-maybach-s680",
    name: "Mercedes-Maybach S 680",
    brand: "Mercedes-Benz",
    brandZh: "賓士",
    spirit: "Luxury Executive",
    spiritZh: "奢華旗艦",
    priceClass: "頂奢陸上頭等艙 (Maybach Flagship)",
    bodyType: "sedan",
    imageUrl: maybachS680Img,
    specs: {
      horsepower: 612,
      torque: "900",
      acceleration: 4.5,
      topSpeed: 250,
      engineType: "6.0L V12 Twin-Turbo",
      drivetrain: "AWD",
      weight: "2350",
      gearbox: "9-speed Automatic"
    },
    soundType: "v12",
    description: "Mercedes-Maybach S 680 代表著當今汽車工業在乘坐舒適度與極致奢華領域的最高峰。車身較長軸版 S-Class 再度加長，外觀採用經典的手工雙色車漆與象徵尊貴的 Maybach 瀑布式水箱罩，後座提供頂級按摩頭等艙座椅。",
    exterior: "極致尊貴的雙色塗裝大轎車。車身長達 5.47 米，軸距驚人。車頭配備 Maybach 專屬鍍鉻直瀑水箱格柵，C柱上鑲嵌發光的雙M徽飾。側窗包邊與B柱大面積採用高級亮銀鍍鉻裝飾，配備專屬的復古多輻式大餅輪圈，氣派非凡。",
    interior: "無懈可擊的陸上頭等艙。後排配備兩個「行政級雙獨立座椅」，最大傾斜角達 43.5 度，設有小腿托架、溫控杯架與折疊小桌板，甚至配備了銀製香檳杯與車載冰箱。全車採用頂級 Nappa 真皮吊頂與高級木紋包覆，搭配 Burmester 4D 環繞音響與主動降噪，靜若無聲。",
    story: "此車是賓士家族中僅存的純燃油 V12 雙渦輪引擎傑作。這具引擎的運轉平順度極高，甚至可以在發動機上立起一枚硬幣而不倒。座艙內配備了革命性的主動式路面雜音消減技術（Active Road Noise Compensation），能利用柏林之音喇叭產生反向聲波，創造如深海般的極致靜謐感。"
  },
  {
    id: "mercedes-c63se",
    name: "AMG C 63 S E Performance",
    brand: "Mercedes-Benz",
    brandZh: "賓士",
    spirit: "Grand Tourer",
    spiritZh: "豪華跑車",
    priceClass: "高科技鋼砲 (High-Tech Sport Sedan)",
    bodyType: "sedan",
    imageUrl: c63seImg,
    specs: {
      horsepower: 680,
      torque: "1020",
      acceleration: 3.4,
      topSpeed: 280,
      engineType: "2.0L Inline-4 Turbocharged Hybrid (M139)",
      drivetrain: "AWD",
      weight: "2115",
      gearbox: "9-Speed MCT Automatic"
    },
    soundType: "f1_hybrid",
    description: "全新 C 63 S E Performance 進行了顛覆性的技術變革，告別了過往的 V8 引擎，改採地表最強的 2.0 升直列四缸電子渦輪增壓引擎，配合後軸高性能馬達，可爆發高達 680 匹的綜合馬力與千牛頓米扭力。",
    exterior: "肌肉感十足的高性能房車。引擎蓋上配置了專屬的 AMG 散熱出風口與黑化的 AMG 蘋果樹徽章。車體大幅度加寬、前輪距擴大，車尾裝備了碳纖維運動鴨尾與侵略性極強的方形四出排氣管，極具視覺攻擊力。",
    interior: "極富科技感的運動座艙。換裝了最新的 AMG 運動方向盤，具備雙圓形快捷控制屏幕，用於即時設定避震與動力。跑車桶椅選用專屬透氣打孔真皮，車機 MBUX 系統融入了大量 AMG E-Performance 油電動力與賽道單圈計時顯示，科技感滿點。",
    story: "這款車所搭載的 M139 引擎配備了源自 F1 的「電子廢氣渦輪增壓器」，能利用馬達在廢氣到達前主動推動渦輪旋轉，徹底消除了渦輪遲滯。儘管缺少了 V8 的咆哮，但其極致的科技敏捷度與 4Matic+ 甩尾模式，開啟了高科技街頭鋼砲的全新紀元。"
  },

  // ==================== BMW ====================
  {
    id: "bmw-m8-comp",
    name: "M8 Competition Coupe",
    brand: "BMW",
    brandZh: "寶馬",
    spirit: "Grand Tourer",
    spiritZh: "豪華跑車",
    priceClass: "旗艦跑車 (Flagship Coupe)",
    bodyType: "supercar",
    imageUrl: m8CompImg,
    specs: {
      horsepower: 625,
      torque: "750",
      acceleration: 3.2,
      topSpeed: 305,
      engineType: "4.4L Twin-Turbo V8 (S63)",
      drivetrain: "AWD/RWD Selectable",
      weight: "1900",
      gearbox: "8-Speed M Steptronic"
    },
    soundType: "v8",
    description: "M8 Competition 是 BMW 性能與奢華的終極融合體。修長優雅的雙門 GT 跑車輪廓，車頂採用輕量化碳纖維增強塑料 (CFRP) 打造，座艙內部融合奢華真皮與賽車碳纖維飾板，是一台具備超跑實力的全天候巡航猛獸。",
    exterior: "流線霸氣的雙門轎跑外觀。車頭配備燻黑雙腎型水箱護罩與主動式雷射頭燈，車身側面線條極為優雅修長。標配碳纖維後視鏡蓋、碳纖維車頂，車尾配置精悍的黑化小鴨尾與雙邊四出大口徑圓形排氣管，動靜皆展現旗艦跑格。",
    interior: "極度奢華的皮質競技座艙。全車座椅採用 Merino 頂級真皮與 Alcantara 拼接，搭配六角形蜂巢縫線。配備了專屬的 M 款碳纖維賽車桶椅，中控台大量使用碳纖維飾板鋪陳，配合方向盤上的紅色 M1/M2 快捷按鍵，可在奢華巡航與狂暴賽道模式間瞬間切換。",
    story: "該車配備了先進的 M xDrive 智慧四輪驅動系統。駕駛者可以進入菜單完全切斷前軸動力，將車輛轉換為 100% 的純後輪驅動模式（2WD），並關閉循跡系統，讓這台旗艦 GT 瞬間化身為大角度白煙橫飛的漂移利器。"
  },
  {
    id: "bmw-m5-cs",
    name: "M5 CS (F90)",
    brand: "BMW",
    brandZh: "寶馬",
    spirit: "Track Weapon",
    spiritZh: "賽道利器",
    priceClass: "限量最強房車 (CS Special)",
    bodyType: "sedan",
    imageUrl: m5csImg,
    specs: {
      horsepower: 635,
      torque: "750",
      acceleration: 3.0,
      topSpeed: 305,
      engineType: "4.4L Twin-Turbo V8",
      drivetrain: "AWD/RWD Selectable",
      weight: "1825",
      gearbox: "8-Speed M Steptronic"
    },
    soundType: "v8",
    description: "M5 CS (Club Sport) 被全球主流汽車媒體公認為 BMW M 歷史上最偉大的現代傑作。它是 M5 家族中最輕、最狂暴的限量版本，減重了 70 公斤，懸吊避震器直接移植自 M8 Gran Coupe 賽用級底盤技術。",
    exterior: "限量版極致競技裝扮。車腎格柵外框採用專屬的「消光金銅色」漆面，日行燈為致敬賽車的「黃色天使眼」。前艙蓋與車頂完全由碳纖維（CFRP）製成，車尾配置碳纖維小尾翼與不鏽鋼雙邊四出运动排氣，彰顯絕無僅有的限量地位。",
    interior: "極致獨特的四座碳纖維桶椅配置。前後座皆配置獨立的碳纖維桶型賽車椅（極罕見），頭枕處印有德國紐柏林賽道路線圖。麂皮方向盤配置碳纖維換檔撥片，中控台取消了扶手箱以極簡皮革墊取代減重，戰鬥氛圍無人能及。",
    story: "外觀最著名的特徵是其金色雙腎格柵包邊、金色 20 吋輕量化輪圈，以及向早期賽車致敬的「黃色 LED 天使眼頭燈」。車內四座皆為獨立賽車碳纖維桶椅，能在 3.0 秒內將四人同時送達 100 km/h，是西裝暴徒的終極定義。"
  },
  {
    id: "bmw-m3-touring",
    name: "M3 Touring (G81)",
    brand: "BMW",
    brandZh: "寶馬",
    spirit: "Super SUV",
    spiritZh: "性能休旅",
    priceClass: "地表最強旅行車 (Super Wagon)",
    bodyType: "wagon",
    imageUrl: m3TouringImg,
    specs: {
      horsepower: 510,
      torque: "650",
      acceleration: 3.6,
      topSpeed: 280,
      engineType: "3.0L Twin-Turbo Inline-6 (S58)",
      drivetrain: "AWD/RWD Selectable",
      weight: "1865",
      gearbox: "8-Speed M Steptronic"
    },
    soundType: "v6",
    description: "M3 Touring 是 BMW M 部門建軍 50 週年送給全球車迷的終極大禮，首度將 M3 狂暴的賽道性能與五門旅行車的完美實用空間結合。車尾具有 500 公升至 1510 公升的靈活置物空間，堪稱最完美的「一車天下」方案。",
    exterior: "肌肉感炸裂的性能旅行車。車頭為極具張力的無框式雙腎型水箱護罩，兩側前葉子板加寬。車頂標配黑色高光澤行李架與車頂後擾流尾翼，車尾下方為霸氣無比的黑色擴散器與四出排氣尾管，展現無與倫比的性能鋼砲旅行車氣勢。",
    interior: "科技與實用融合的座艙。前排配置一體式懸浮曲面大螢幕（12.3 吋儀表+14.9 吋中控），並可選配碳纖維賽車桶椅。後排座椅支援 40:20:40 比例折疊，後檔風玻璃可獨立開啟，方便快速取物，將熱血駕駛精神與家庭實用完美兼顧。",
    story: "此車搭載備受讚譽的 S58 直列六缸雙渦輪引擎，高轉速延展性極佳。底盤後懸吊與車尾結構經過特殊強化，以應對旅行車尾部多餘的重量，確保其在賽道上的過彎敏捷度與普通的 M3 雙門跑車完全一致，圓了無數爸爸的熱血超跑夢。"
  },
  {
    id: "bmw-i7-m70",
    name: "i7 M70 xDrive",
    brand: "BMW",
    brandZh: "寶馬",
    spirit: "Luxury Executive",
    spiritZh: "奢華旗艦",
    priceClass: "頂級純電旗艦 (Electric Flagship)",
    bodyType: "sedan",
    imageUrl: i7M70Img,
    specs: {
      horsepower: 660,
      torque: "1100",
      acceleration: 3.7,
      topSpeed: 250,
      engineType: "Dual Electric Motors (M Performance)",
      drivetrain: "AWD",
      weight: "2695",
      gearbox: "Single-Speed Direct Drive"
    },
    soundType: "electric",
    description: "i7 M70 xDrive 是 BMW 有史以來最強大的純電動車型。定位為頂奢科技旗艦，後座配備了震撼業界的 31.3 吋 8K 超寬「BMW 劇院級螢幕」，搭配 Bowers & Wilkins 4D 環繞音響，打造無與倫比的行動劇院。",
    exterior: "君臨天下的未來奢華外型。車頭配備超大環形發光雙腎水箱格柵（Iconic Glow），搭配施華洛世奇水晶日行燈。車側為修長厚實的傳統豪華房車比例，可選配上下雙色車漆，車尾下方點綴黑化 M 款運動運動套件，氣宇非凡。",
    interior: "極致前衛的奢華數位宮殿。前排配置一體式懸浮曲面螢幕與貫穿式環艙光幕。後座是其靈魂，後排頂篷可降下 31.3 吋 8K 巨幕，結合「後排一鍵頭等艙座椅」可調整至最大仰角，搭配 36 支喇叭的 Bowers & Wilkins 4D 音響，打造無敵奢華行動影院。",
    story: "為了讓純電旗艦擁有 M 的駕駛靈魂，BMW 邀請好萊塢傳奇電影配樂大師 Hans Zimmer（漢斯·季默）合作，為其創作了專屬的「BMW IconicSounds Electric」電能聲浪，隨著駕駛者採下電門，音響會釋放出極具科幻宇宙感的加速共鳴聲。"
  },
  {
    id: "bmw-xm-red",
    name: "XM Label Red",
    brand: "BMW",
    brandZh: "寶馬",
    spirit: "Super SUV",
    spiritZh: "性能休旅",
    priceClass: "狂野插電混動 (Ultimate M Hybrid SUV)",
    bodyType: "suv",
    imageUrl: xmLabelRedImg,
    specs: {
      horsepower: 748,
      torque: "1000",
      acceleration: 3.8,
      topSpeed: 290,
      engineType: "4.4L Twin-Turbo V8 + Electric Motor (M Hybrid)",
      drivetrain: "AWD",
      weight: "2710",
      gearbox: "8-Speed M Steptronic"
    },
    soundType: "v8",
    description: "XM Label Red 是 BMW M 部門獨立研發的旗艦 SUV，也是 M 家族史上輸出馬力最強的車款。外觀採用了極具挑釁意味的巨型紅色發光雙腎格柵與黑紅撞色塗裝，座艙內部則是奢華無比的 M Lounge 概念設計。",
    exterior: "極具張力與爭議性的前衛科幻 SUV 外型。水箱格柵周圍、車窗輪廓線條以及 22 吋輪圈細節皆漆上專屬的「多倫多紅（Toronto Red）」邊框，十分搶眼。車尾配置了極為罕見的「縱向雙邊四出六角形」排氣尾管與巨大的擾流板，震撼力十足。",
    interior: "極奢紅黑「M Lounge」座艙。前排配置一體式大曲面螢幕與 M 款碳纖維運動方向盤。後座採用極致寬大舒適的「奢華沙發座墊」設計，後排車頂採用獨創的「3D 幾何棱鏡天篷」，內建 100 顆 LED 光源，可隨駕駛模式與音樂動態變色，極具夜店奢華氛圍。",
    story: "這是自 1978 年傳奇中置超跑 M1 以來，BMW M 部門首次推出的專屬車型（沒有普通 BMW 版本）。它搭載了最新研發的插電式混合動力 V8 系統，能在低速提供靜音純電行駛，而在高負荷下爆發 748 匹的驚人怪力。"
  },
  {
    id: "bmw-z4-m40i",
    name: "Z4 M40i (Manual Edition)",
    brand: "BMW",
    brandZh: "寶馬",
    spirit: "Grand Tourer",
    spiritZh: "豪華跑車",
    priceClass: "經典手排敞篷 (Manual Roadster)",
    bodyType: "cabriolet",
    imageUrl: z4M40iImg,
    specs: {
      horsepower: 340,
      torque: "500",
      acceleration: 4.6,
      topSpeed: 250,
      engineType: "3.0L Turbocharged Inline-6 (B58)",
      drivetrain: "RWD",
      weight: "1550",
      gearbox: "6-Speed Manual"
    },
    soundType: "v6",
    description: "Z4 M40i (Hands-on-Gear) 代表著對純粹機械操控的浪漫堅守。在自動變速箱統治的時代，BMW 特別為其 3.0 升直六渦輪引擎搭配了六速「純手排」變速箱，採用經典的軟頂敞篷、短軸距與後輪驅動配置。",
    exterior: "經典拉風的雙門雙座小敞篷跑車。配備長車頭、極短車尾的經典雙座比例。車頭採用網狀雙腎格柵與垂直排列 LED 大燈。黑色高科技軟頂可在時速 50 km/h 以下、10 秒內完成快速開關，車尾配置上翹的鴨尾與雙出運動排氣，靈活小巧。",
    interior: "純粹的駕駛者導向操駕艙。中控台略微偏向駕駛者，配備數位化儀表與中控屏。內裝為精緻的雙色 Merino 真皮包裹，最吸睛的莫過於鞍座中央那支精緻的「6速手排排檔桿」，搭配三個閃亮的金屬踏板，將極致的機械參與感帶入現代科技車艙。",
    story: "這款手排特別版配備了經過特別調教的後防傾桿、主動式 M 差速器與更為硬朗的前懸吊彈簧。雖然加速成績略慢於自排版本，但每一次手動換檔的阻尼感與油門跟趾動作的完美契合，帶給駕駛者靈魂深處的純粹喜悅。"
  }
];
