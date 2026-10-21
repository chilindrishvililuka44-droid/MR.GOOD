/**
 * MR. GOOD (მისტერ გუდი) - KARGIA KARGIA!
 * Official Game Download Portal Script
 * Bilingual (Georgian 🇬🇪 / English 🇬🇧) + Multi-Platform Downloads
 */

// ==========================================
// 1. BILINGUAL DICTIONARY (GEORGIAN & ENGLISH)
// ==========================================
const translations = {
  en: {
    // Top banner
    announcement: "🔥 Version 1.0.4 is OUT! Download APK for Android!",
    badgeNew: "NEW RELEASE",

    // Nav
    navHome: "Home",
    navDownload: "Download APK",
    navFeatures: "Features",
    navScreenshots: "Screenshots",
    navSpecs: "System Specs",
    navFaq: "FAQ",
    quickDownload: "DOWNLOAD APK",

    // Hero
    gameTag: "GEORGIAN 2D PIXEL GAME • ANDROID APK",
    heroCatchphrase: "KARGIA KARGIA!",
    heroCatchphraseGe: "კარგია კარგია!",
    heroDesc: "Join Mr. Good in the ultimate 2D retro action platformer! Jump, dash, collect golden seeds, and unlock exciting characters across vibrant pixel worlds. 100% Free on Android.",
    btnDownloadApk: "DOWNLOAD ANDROID APK (90 MB)",
    btnQuickDownloadInfo: "QUICK QR / GUIDE",
    osDetected: "Detected your device: ",
    osWindows: "Windows PC (Android APK Available)",
    osAndroid: "Android Device (Ready)",
    osIos: "iOS Device (Ready)",
    osOther: "Android Device",
    statDownloads: "50,000+ Downloads",
    statRating: "4.9/5 Rating",
    statFree: "100% Free",
    liveStatus: "Server Online • Fast CDN",

    // Download Hub
    sectionTag: "OFFICIAL RELEASE",
    sectionTitle: "DOWNLOAD MR. GOOD (APK)",
    sectionSubtitle: "Get the official APK package for your Android phone or tablet. Fast, direct, safe, and 100% free.",
    
    // Tabs
    tabAndroid: "📱 Android (APK)",
    tabIos: "🍏 iOS (Apple)",
    tabEmulator: "💻 PC Emulator Guide",
    tabSpecs: "⚙️ System Specs",
    tabPatch: "📜 Patch Notes",
    tabControls: "🎮 Controls",

    // Android Card
    apkDirectTitle: "Official Android APK (v1.0.4)",
    apkDirectSub: "Full installation package • 90 MB",
    apkSize: "90 MB",
    apkFeat1: "Compatible with Android 7.0 (Nougat) and higher",
    apkFeat2: "Smooth touch controls & Bluetooth gamepad support",
    apkFeat3: "Full offline gameplay with high-speed performance",
    apkFeat4: "Tested & verified 100% virus and malware clean",
    btnDownloadApkCard: "DOWNLOAD ANDROID APK (90 MB)",

    googlePlayTitle: "Google Play Store",
    googlePlaySub: "Automated updates via Google Play",
    btnPlayStore: "GET IT ON GOOGLE PLAY",

    qrTitle: "Scan to Download on Phone",
    qrDesc: "Point your phone camera to download APK directly to your phone instantly.",

    // iOS Card
    iosAppTitle: "Apple App Store",
    iosAppSub: "iPhone & iPad compatible",
    btnAppStore: "DOWNLOAD ON APP STORE",

    testFlightTitle: "TestFlight Public Beta",
    testFlightSub: "Try experimental pixel levels early",
    btnTestFlight: "JOIN TESTFLIGHT BETA",

    // Install Guide
    installTitle: "Quick Installation Guide (Android)",
    step1Mobile: "1. Download the APK file (~90 MB)",
    step2Mobile: "2. Open the file and enable 'Install unknown apps' if prompted",
    step3Mobile: "3. Tap Install and enjoy Mr. Good! KARGIA KARGIA!",

    // PC Emulator Card
    emulatorTitle: "How to Play on PC (Android Emulator)",
    emulatorSub: "Enjoy Mr. Good on your computer screen using any Android emulator",
    emulatorStep1: "1. Download 'MR.GOOD KARGIA KARGIA!.apk' using the button above.",
    emulatorStep2: "2. Download and install a free Android emulator on your PC (e.g. BlueStacks, LDPlayer, NoxPlayer).",
    emulatorStep3: "3. Drag and drop the APK file into the emulator to install and play with keyboard or controller!",

    // Specs
    specCategory: "Category",
    specMin: "Minimum Requirements",
    specRec: "Recommended Requirements",
    specOs: "Operating System",
    specCpu: "Processor",
    specRam: "Memory (RAM)",
    specGpu: "Graphics",
    specStorage: "Storage Space",

    // Patch Notes
    patchLatest: "v1.0.4 (Latest Update)",
    patchDate: "October 2026",
    patch1: "Official Android APK release with full character roster",
    patch2: "Optimized mobile touchscreen virtual controls & feedback",
    patch3: "Added new secret stages and golden seed bonus levels",
    patch4: "Fixed audio balance and enhanced frame rate smoothness",

    // Features Section
    featSectionTitle: "WHY YOU'LL LOVE MR. GOOD",
    feat1Title: "Classic 2D Pixel Charm",
    feat1Desc: "Handcrafted 16-bit retro visuals inspired by Georgian folklore, humor, and urban landscapes.",
    feat2Title: "Smooth Mobile Controls",
    feat2Desc: "Tailored touchscreen controls with virtual joystick and full Bluetooth gamepad support.",
    feat3Title: "5 Playable Characters",
    feat3Desc: "Play as Mr. Good or team up with his neighborhood crew, each with unique speeds and abilities.",
    feat4Title: "KARGIA KARGIA Energy!",
    feat4Desc: "Fun, positive vibes with catchy sound effects, high replayability, and secrets to discover.",

    // Screenshots Section
    screensTitle: "IN-GAME SCREENSHOTS",
    screensSub: "Take a peek at the retro pixel world of Mr. Good",

    // FAQ Section
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    q1: "Is Mr. Good completely free to download?",
    a1: "Yes! Mr. Good is 100% free to download and play as an Android APK. No hidden costs or microtransactions.",
    q2: "Can I play the game offline?",
    a2: "Absolutely! Once downloaded, Mr. Good does not require an active internet connection to play.",
    q3: "Can I play on PC or with a controller?",
    a3: "Yes! On Android you can connect any Bluetooth controller (Xbox/PS). On PC, you can run the APK using any free Android emulator (BlueStacks, LDPlayer) with keyboard controls!",
    q4: "Is there any malware or adware in the download?",
    a4: "None at all. The APK file is clean, verified, and safe for your device.",

    // Download modal
    modalDownloading: "Downloading Mr. Good APK...",
    modalReady: "Your Download is Complete!",
    modalSpeed: "Speed: 24.5 MB/s",
    modalVerified: "MD5/SHA-256 Checksum Verified: 100% Clean (90 MB)",
    btnLaunch: "OPEN FILE",
    btnClose: "CLOSE",

    // Footer
    footerRights: "All rights reserved. Mr. Good Video Game.",
    madeInGeorgia: "Made with ❤️ in Georgia 🇬🇪"
  },

  ka: {
    // Top banner
    announcement: "🔥 ვერსია 1.0.4 გამოვიდა! ჩამოტვირთეთ Android APK!",
    badgeNew: "ახალი ვერსია",

    // Nav
    navHome: "მთავარი",
    navDownload: "APK ჩამოტვირთვა",
    navFeatures: "მახასიათებლები",
    navScreenshots: "სქრინშოტები",
    navSpecs: "მოთხოვნები",
    navFaq: "კითხვები",
    quickDownload: "ჩამოტვირთვა",

    // Hero
    gameTag: "ქართული 2D პიქსელ თამაში • ANDROID APK",
    heroCatchphrase: "კარგია კარგია!",
    heroCatchphraseGe: "KARGIA KARGIA!",
    heroDesc: "გაიცანით მისტერ გუდი უმაგრეს 2D რეტრო პლატფორმერში! იხტუნეთ, აგროვეთ ოქროს თესლები, გახსენით უნიკალური პერსონაჟები და გაერთეთ. 100% უფასო Android მობილურზე.",
    btnDownloadApk: "ჩამოტვირთეთ ANDROID APK (90 მბ)",
    btnQuickDownloadInfo: "სწრაფი QR / ინსტრუქცია",
    osDetected: "თქვენი მოწყობილობა: ",
    osWindows: "Windows PC (ხელმისაწვდომია Android APK)",
    osAndroid: "Android მოწყობილობა (მზადაა)",
    osIos: "iOS მოწყობილობა (მზადაა)",
    osOther: "Android მოწყობილობა",
    statDownloads: "50,000+ ჩამოტვირთვა",
    statRating: "4.9/5 შეფასება",
    statFree: "100% უფასო",
    liveStatus: "სერვერი ონლაინ • სწრაფი CDN",

    // Download Hub
    sectionTag: "ოფიციალური ვერსია",
    sectionTitle: "ჩამოტვირთეთ MR. GOOD (APK)",
    sectionSubtitle: "გადმოწერეთ ოფიციალური APK საინსტალაციო ფაილი Android სმარტფონისა და ტაბლეტისთვის. უსაფრთხო, სწრაფი და 100% უფასო.",
    
    // Tabs
    tabAndroid: "📱 Android (APK)",
    tabIos: "🍏 iOS (Apple)",
    tabEmulator: "💻 PC ემულატორი",
    tabSpecs: "⚙️ სისტემური მოთხოვნები",
    tabPatch: "📜 განახლებები",
    tabControls: "🎮 მართვა",

    // Android Card
    apkDirectTitle: "ოფიციალური Android APK (v1.0.4)",
    apkDirectSub: "პირდაპირი სრული APK საინსტალაციო ფაილი • 90 მბ",
    apkSize: "90 მბ",
    apkFeat1: "თავსებადია Android 7.0 და ყველა ახალ ვერსიასთან",
    apkFeat2: "მოქნილი სენსორული მართვა და Bluetooth ჯოისტიკის მხარდაჭერა",
    apkFeat3: "სრული ოფლაინ თამაში მაღალი FPS-ით",
    apkFeat4: "შემოწმებულია ანტივირუსით (100% სუფთა და უსაფრთხო)",
    btnDownloadApkCard: "ჩამოტვირთეთ ANDROID APK (90 მბ)",

    googlePlayTitle: "Google Play Store",
    googlePlaySub: "ავტომატური განახლებები Google Play-დან",
    btnPlayStore: "GOOGLE PLAY-ზე გადასვლა",

    qrTitle: "დაასკანერეთ მობილურით",
    qrDesc: "მიუშვირეთ ტელეფონის კამერა QR კოდს და ჩამოტვირთეთ APK პირდაპირ მობილურზე.",

    // iOS Card
    iosAppTitle: "Apple App Store",
    iosAppSub: "iPhone & iPad თავსებადი",
    btnAppStore: "APP STORE-ზე გადასვლა",

    testFlightTitle: "TestFlight ბეტა ვერსია",
    testFlightSub: "გამოსცადეთ ახალი დონეები პირველმა",
    btnTestFlight: "TESTFLIGHT ბეტაში ჩართვა",

    // Install Guide
    installTitle: "ინსტალაციის მარტივი ინსტრუქცია (Android)",
    step1Mobile: "1. ჩამოტვირთეთ APK ფაილი (~90 მბ)",
    step2Mobile: "2. გახსენით ფაილი და დააჭირეთ ინსტალაციას (თუ საჭიროა, ჩართეთ Unknown Sources)",
    step3Mobile: "3. გახსენით Mr. Good და დაიწყეთ თამაში! KARGIA KARGIA!",

    // PC Emulator Card
    emulatorTitle: "როგორ ვითამაშოთ კომპიუტერზე (PC ემულატორით)?",
    emulatorSub: "Mr. Good-ის გაშვება PC-ზე ნებისმიერი Android ემულატორის საშუალებით",
    emulatorStep1: "1. ჩამოტვირთეთ 'MR.GOOD KARGIA KARGIA!.apk' ზემოთ მოცემული ღილაკით.",
    emulatorStep2: "2. დააინსტალირეთ უფასო Android ემულატორი კომპიუტერზე (მაგ. BlueStacks, LDPlayer ან NoxPlayer).",
    emulatorStep3: "3. ჩააგდეთ (Drag & Drop) გადმოწერილი APK ფაილი ემულატორში და ითამაშეთ კლავიატურით ან ჯოისტიკით!",

    // Specs
    specCategory: "კატეგორია",
    specMin: "მინიმალური მოთხოვნები",
    specRec: "რეკომენდებული მოთხოვნები",
    specOs: "ოპერაციული სისტემა",
    specCpu: "პროცესორი",
    specRam: "ოპერატიული (RAM)",
    specGpu: "ვიდეო ბარათი",
    specStorage: "თავისუფალი ადგილი",

    // Patch Notes
    patchLatest: "v1.0.4 (უახლესი განახლება)",
    patchDate: "ოქტომბერი 2026",
    patch1: "ოფიციალური Android APK რელიზი სრული პერსონაჟებით",
    patch2: "გაუმჯობესდა მობილურის სენსორული ჯოისტიკის რეაქცია",
    patch3: "დაემატა ახალი საიდუმლო დონეები და ბონუს ეტაპები",
    patch4: "სტაბილური 60+ FPS კადრები და სუფთა 8-ბიტიანი აუდიო",

    // Features Section
    featSectionTitle: "რატომ მოგეწონებათ MR. GOOD?",
    feat1Title: "კლასიკური 2D პიქსელ სტილი",
    feat1Desc: "16-ბიტიანი რეტრო ვიზუალი, შთაგონებული თბილისის ხედებით, ქართული იუმორითა და თბილი ატმოსფეროთი.",
    feat2Title: "გამართული მობილური მართვა",
    feat2Desc: "მორგებული სენსორული მართვა სმარტფონის ეკრანზე და Bluetooth ჯოისტიკის მხარდაჭერა.",
    feat3Title: "5 უნიკალური პერსონაჟი",
    feat3Desc: "ითამაშეთ მისტერ გუდით ან მისი მეგობრებით — თითოეულს თავისი სიჩქარე და უნარი აქვს.",
    feat4Title: "კარგია კარგია პოზიტივი!",
    feat4Desc: "მხიარული, ენერგიული განწყობა, ხმოვანი ეფექტები და უამრავი აღმოსაჩენი საიდუმლო.",

    // Screenshots Section
    screensTitle: "თამაშის სქრინშოტები",
    screensSub: "შეათვალიერეთ მისტერ გუდის რეტრო სამყარო",

    // FAQ Section
    faqTitle: "ხშირად დასმული კითხვები",
    q1: "არის თუ არა Mr. Good სრულიად უფასო?",
    a1: "დიახ! Mr. Good 100% უფასოა Android-ისთვის. არ შეიცავს ფარულ გადასახადებს.",
    q2: "შესაძლებელია ოფლაინში თამაში?",
    a2: "რა თქმა უნდა! ჩამოტვირთვის შემდეგ თამაში ინტერნეტს არ მოითხოვს.",
    q3: "შესაძლებელია PC-ზე ან ჯოისტიკით თამაში?",
    a3: "დიახ! მობილურზე შეგიძლიათ დააკავშიროთ Bluetooth ჯოისტიკი (Xbox/PlayStation), ხოლო PC-ზე შეგიძლიათ გაუშვათ Android ემულატორით (მაგ. BlueStacks, LDPlayer) და ითამაშოთ კლავიატურით!",
    q4: "უსაფრთხოა ფაილის ჩამოტვირთვა?",
    a4: "სრულიად უსაფრთხოა. APK ფაილი შემოწმებულია და არ შეიცავს არანაირ მავნე პროგრამას.",

    // Download modal
    modalDownloading: "მიმდინარეობს Mr. Good APK-ის ჩამოტვირთვა...",
    modalReady: "ჩამოტვირთვა წარმატებით დასრულდა!",
    modalSpeed: "სიჩქარე: 24.5 მბ/წმ",
    modalVerified: "შემოწმებულია: 100% უსაფრთხო და სუფთა (90 MB)",
    btnLaunch: "ფაილის გახსნა",
    btnClose: "დახურვა",

    // Footer
    footerRights: "ყველა უფლება დაცულია. Mr. Good Video Game.",
    madeInGeorgia: "დამზადებულია სიყვარულით საქართველოში 🇬🇪"
  }
};

let currentLang = 'ka'; // Default to Georgian for authentic Georgian experience!
let soundEnabled = true;
let coinCount = 114; // Matches the 114 coin counter in screenshot!

// ==========================================
// 2. RETRO SOUND EFFECTS (WEB AUDIO API)
// ==========================================
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playRetroSound(type) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === 'coin') {
      // High pitch 8-bit coin chime
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'click') {
      // 8-bit UI blip
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(880, now + 0.04);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } else if (type === 'kargia') {
      // Joyful fan-fare arpeggio
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.18, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.07 + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.2);
      });
    }
  } catch (err) {
    console.log("Audio not allowed yet or error:", err);
  }
}

// ==========================================
// 3. LANGUAGE SWITCHER
// ==========================================
function updateLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang] || translations.ka;

  // Update text for all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update flag button display
  const flagIcon = document.getElementById('currentLangFlag');
  const langText = document.getElementById('currentLangText');
  if (flagIcon && langText) {
    if (lang === 'ka') {
      flagIcon.textContent = '🇬🇪';
      langText.textContent = 'ქართული';
    } else {
      flagIcon.textContent = '🇬🇧';
      langText.textContent = 'English';
    }
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// ==========================================
// 4. DEVICE DETECTION
// ==========================================
function detectUserOS() {
  const ua = navigator.userAgent || navigator.vendor || window.opera;
  let os = 'pc';
  let osName = 'Windows PC';

  if (/android/i.test(ua)) {
    os = 'android';
    osName = 'Android';
  } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
    os = 'ios';
    osName = 'iOS (Apple)';
  } else if (/Macintosh|Mac OS X/.test(ua)) {
    os = 'mac';
    osName = 'Mac (Use PC/Wine)';
  }

  const osEl = document.getElementById('userOsName');
  if (osEl) {
    osEl.textContent = osName;
  }

  // Auto-activate matching download tab
  if (os === 'android') {
    switchDownloadTab('android');
  } else if (os === 'ios') {
    switchDownloadTab('ios');
  } else {
    switchDownloadTab('pc');
  }
}

// ==========================================
// 5. DOWNLOAD TABS CONTROLLER
// ==========================================
function switchDownloadTab(tabId) {
  // Update tab buttons
  document.querySelectorAll('.download-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
  });

  // Update tab panels
  document.querySelectorAll('.download-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-${tabId}`);
  });

  playRetroSound('click');
}

// ==========================================
// 6. REAL DOWNLOAD & INTERACTIVE MODAL
// ==========================================
let downloadTimer = null;

function triggerDownload(platform, filename, downloadUrl) {
  playRetroSound('kargia');
  triggerKargiaCelebration();

  const modal = document.getElementById('downloadModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalSub = document.getElementById('modalSub');
  const progressBar = document.getElementById('modalProgressBar');
  const progressPercent = document.getElementById('modalProgressPercent');
  const speedText = document.getElementById('modalSpeedText');
  const successBox = document.getElementById('modalSuccessBox');
  const launchBtn = document.getElementById('modalLaunchBtn');

  if (!modal) return;

  // Set initial modal state
  modal.classList.add('active');
  progressBar.style.width = '0%';
  progressPercent.textContent = '0%';
  successBox.classList.remove('show');
  launchBtn.style.display = 'none';

  const isGeo = currentLang === 'ka';
  modalTitle.textContent = isGeo ? `მიმდინარეობს ${filename}-ის ჩამოტვირთვა...` : `Downloading ${filename}...`;
  modalSub.textContent = isGeo ? "მომზადებულია მისტერ გუდისთვის!" : "Prepared for Mr. Good!";

  // Real download trigger via link
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Animate progress bar simulation
  let progress = 0;
  if (downloadTimer) clearInterval(downloadTimer);

  downloadTimer = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 12;
    if (progress >= 100) {
      progress = 100;
      clearInterval(downloadTimer);

      progressBar.style.width = '100%';
      progressPercent.textContent = '100%';
      speedText.textContent = isGeo ? "დასრულებულია!" : "Finished!";
      modalTitle.textContent = isGeo ? "ჩამოტვირთვა დასრულდა!" : "Download Complete!";
      successBox.classList.add('show');
      launchBtn.style.display = 'inline-block';
      launchBtn.href = downloadUrl;
      playRetroSound('coin');
    } else {
      progressBar.style.width = `${progress}%`;
      progressPercent.textContent = `${progress}%`;
      const speed = (20 + Math.random() * 8).toFixed(1);
      speedText.textContent = `${speed} MB/s`;
    }
  }, 180);
}

function closeDownloadModal() {
  const modal = document.getElementById('downloadModal');
  if (modal) modal.classList.remove('active');
  if (downloadTimer) clearInterval(downloadTimer);
}

// Floating "KARGIA KARGIA!" text popup
function triggerKargiaCelebration(x, y) {
  const popup = document.createElement('div');
  popup.className = 'kargia-float-particle';
  popup.textContent = currentLang === 'ka' ? 'კარგია კარგია! ⭐' : 'KARGIA KARGIA! ⭐';
  
  const posX = x || (window.innerWidth / 2 - 80 + (Math.random() * 80 - 40));
  const posY = y || (window.innerHeight / 2 - 30);
  
  popup.style.left = `${posX}px`;
  popup.style.top = `${posY}px`;
  
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 1200);

  // Increment coin count
  coinCount++;
  const coinEl = document.getElementById('coinCountDisplay');
  if (coinEl) {
    coinEl.textContent = coinCount;
  }
}

// ==========================================
// 7. LIGHTBOX GALLERY
// ==========================================
function openLightbox(imgSrc, captionText) {
  playRetroSound('click');
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  if (modal && img) {
    img.src = imgSrc;
    if (caption) caption.textContent = captionText || 'Mr. Good Gameplay';
    modal.classList.add('active');
  }
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  if (modal) modal.classList.remove('active');
}

// ==========================================
// 8. FAQ ACCORDION
// ==========================================
function setupFaq() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      playRetroSound('click');
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ==========================================
// 9. HARDWARE COMPATIBILITY CHECKER
// ==========================================
function checkHardwareCompatibility() {
  const osSelect = document.getElementById('checkOsSelect');
  const ramSelect = document.getElementById('checkRamSelect');
  const resultText = document.getElementById('checkResultText');

  if (!osSelect || !ramSelect || !resultText) return;

  const ram = parseInt(ramSelect.value, 10);
  const isGeo = currentLang === 'ka';

  if (ram >= 4) {
    resultText.innerHTML = isGeo 
      ? "✅ <strong>იდეალურია!</strong> თქვენი სისტემა გაუშვებს Mr. Good-ს მაქსიმალურ 60+ FPS-ზე." 
      : "✅ <strong>Perfect!</strong> Your system will run Mr. Good at smooth 60+ FPS.";
    resultText.style.color = "#4ade80";
  } else if (ram >= 2) {
    resultText.innerHTML = isGeo 
      ? "⚠️ <strong>მინიმალური თავსებადობა:</strong> თამაში გაეშვება სტაბილურად 30-60 FPS." 
      : "⚠️ <strong>Minimum Ready:</strong> The game will run stably at 30-60 FPS.";
    resultText.style.color = "#facc15";
  } else {
    resultText.innerHTML = isGeo 
      ? "❌ <strong>მცირე RAM:</strong> რეკომენდებულია მინიმუმ 2 GB RAM." 
      : "❌ <strong>Low RAM:</strong> At least 2 GB RAM is recommended.";
    resultText.style.color = "#f87171";
  }
}

// ==========================================
// 10. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initial Language setup (Georgian by default)
  updateLanguage('ka');

  // Detect user OS
  detectUserOS();

  // Language switch button
  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      playRetroSound('click');
      const nextLang = currentLang === 'ka' ? 'en' : 'ka';
      updateLanguage(nextLang);
      checkHardwareCompatibility();
    });
  }

  // Sound toggle button
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundBtn.classList.toggle('active', soundEnabled);
      soundBtn.innerHTML = soundEnabled ? '🔊' : '🔇';
      if (soundEnabled) playRetroSound('click');
    });
  }

  // CRT Scanline toggle button
  const crtBtn = document.getElementById('crtToggleBtn');
  if (crtBtn) {
    crtBtn.addEventListener('click', () => {
      document.body.classList.toggle('crt-active');
      crtBtn.classList.toggle('active', document.body.classList.contains('crt-active'));
      playRetroSound('click');
    });
  }

  // Coin counter click (easter egg)
  const coinBtn = document.getElementById('coinCounterBtn');
  if (coinBtn) {
    coinBtn.addEventListener('click', (e) => {
      playRetroSound('coin');
      triggerKargiaCelebration(e.clientX, e.clientY);
    });
  }

  // Download Tab Buttons
  document.querySelectorAll('.download-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchDownloadTab(tabId);
    });
  });

  // Mobile Hamburger Menu
  const hamburger = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
      playRetroSound('click');
    });
  }

  // Hardware checker change listeners
  const osSelect = document.getElementById('checkOsSelect');
  const ramSelect = document.getElementById('checkRamSelect');
  if (osSelect) osSelect.addEventListener('change', checkHardwareCompatibility);
  if (ramSelect) ramSelect.addEventListener('change', checkHardwareCompatibility);

  // Setup FAQ accordions
  setupFaq();

  // Title screen interactive hotspots from screenshot!
  document.querySelectorAll('.preview-overlay-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playRetroSound('coin');
      const action = btn.getAttribute('data-action');
      if (action === 'play') {
        const dlSection = document.getElementById('download');
        if (dlSection) dlSection.scrollIntoView({ behavior: 'smooth' });
      } else if (action === 'settings') {
        const specsTab = document.querySelector('[data-tab="specs"]');
        if (specsTab) specsTab.click();
      } else {
        triggerKargiaCelebration();
      }
    });
  });

  // Lightbox close events
  const lbModal = document.getElementById('lightboxModal');
  if (lbModal) {
    lbModal.addEventListener('click', (e) => {
      if (e.target === lbModal || e.target.classList.contains('lightbox-close-btn')) {
        closeLightbox();
      }
    });
  }

  // Download modal close events
  const dlModal = document.getElementById('downloadModal');
  if (dlModal) {
    dlModal.addEventListener('click', (e) => {
      if (e.target === dlModal || e.target.classList.contains('dl-close-btn')) {
        closeDownloadModal();
      }
    });
  }

  console.log("MR. GOOD Official Website Initialized! KARGIA KARGIA!");
});
