'use strict';

// Event day begins at midnight in Cairo (UTC+02 in November). No start time was supplied.
const EVENT_DAY = '2026-11-28T00:00:00+02:00';
const MAP_LINK = 'https://maps.app.goo.gl/yQRxbXB1je18tpCD7?g_st=iw';
const PUBLISHED_URL = "https://ahmeddoaia10.github.io/Hassan-Nadeen-Wedding/";
const LANGUAGE_PREFERENCE = 'hassan-nadine-language';
const MUSIC_TRACKS = {
  ar:'./assets/alf-mashallah.mp3',
  en:'./assets/our-song.mp3'
};
const translations = {
  ar: {
    submitReply:'تأكيد الرد وإرسال التهنئة',sendingReply:'جارٍ تسجيل ردك…',rsvpLoading:'لحظة، بنتأكد من تسجيلك…',confirmedNow:'تم تسجيل ردك بنجاح. شكرًا لمشاركتنا فرحتنا!',confirmedBefore:'سبق لك تسجيل ردك. شكرًا لمشاركتنا فرحتنا!',rsvpSaveError:'ماقدرناش نحفظ ردك دلوقتي. كلامك موجود؛ حاول تاني بعد التأكد من الاتصال.',rsvpStatusError:'تعذّر التحقق من رد سابق. تقدر تحاول الإرسال، وردك مش هيتكرر.',wishesTitle:'تهاني من القلب',wishesSubtitle:'كلمات حلوة من أحباب حسن ونادين',wishesLoading:'بنحمّل التهاني…',wishesEmpty:'كونوا أول من يشاركنا كلمة حلوة 🤍',wishesError:'مش قادرين نحمّل التهاني دلوقتي. جرّب تاني بعد قليل.',wishesRetry:'حاول تاني',wishesMore:'عرض تهاني أكثر',
    tapHint:'اضغط على الظرف لتبدأ الحكاية',playMusic:'تشغيل الموسيقى',pauseMusic:'إيقاف الموسيقى',
    navWishes:'التهاني',
    navDate:'يومنا',navStory:'دعوتنا',navGallery:'لحظاتنا',navVenue:'المكان',navReply:'ردك الحلو',navShare:'مشاركة الدعوة',heroPrelude:'وبكل الحب… نبدأ حكايتنا',namesAr:'حسن <span>و</span> نادين',heroInvitation:'ندعوكم لتشاركونا أجمل يوم في عمرنا.<br>وجودكم هو أحلى تفاصيل فرحتنا.',discover:'كل تفاصيل يومنا',
    dateTitle:'يوم من العمر',dateSubtitle:'احفظوا التاريخ… واستعدوا لليلة مليانة حب',saturday:'السبت',november:'نوفمبر',addCalendar:'ضيف اليوم للتقويم',countdownTitle:'باقي على يومنا الحلو',days:'يوم',hours:'ساعة',minutes:'دقيقة',seconds:'ثانية',celebrationDay:'وصل يومنا الحلو… فرحتنا تكمل بيكم 🤍',
    familyNote:'بقلوب مليانة فرحة،<br>يتشرف حسن ونادين وعائلتاهما بدعوتكم<br>لمشاركتهم بداية عمر جديد معًا.',galleryTitle:'من حكايتنا',gallerySubtitle:'صور صغيرة شايلة فرحة كبيرة.<br>والأجمل لسه جاي… معاكم.',photoOne:'وابتدت حكايتنا',photoTwo:'في عيونك… لقيت بيتي',photoThree:'أحلى ضحكة سوا',photoFour:'والمشوار كله سوا',galleryQuote:'ومعاك… يحلو العمر',
    venueTitle:'هنا نكمّل فرحتنا',venueName:'دار المشاة',venueCardSubtitle:'دار المشاة… هنا نحتفل بأجمل بداية',venueAddress:'بجوار كوبري الفنجري، مصر الجديدة',venueDate:'السبت، ٢٨ نوفمبر ٢٠٢٦',directions:'View Location',venueFootnote:'ضغطة واحدة وتوصلوا لنا',openGoogleMaps:'فتح في Google Maps',
    replyTitle:'أكد حضورك وسيب كلمة حلوة',replySubtitle:'فرحتنا تكمل بوجودكم.<br>سجّل ردك وشاركنا تهنئة من القلب.',replyNote:'اسمك وتهنئتك هيظهروا في قسم التهاني للجميع. اختيار الحضور وعدد الأشخاص مش هيظهروا للعامة.',guestName:'اسمك الجميل',attending:'هتشاركنا فرحتنا؟',attendYes:'أكيد، هكون معاكم 🤍',attendNo:'هكون معاكم بقلبي',guestCount:'عدد الأشخاص',yourMessage:'كلمة للعروسين <span class="optional">(اختياري)</span>',namePlaceholder:'الاسم',messagePlaceholder:'ربنا يسعدكم ويتمم فرحتكم على خير…',
    shareTitle:'الفرحة حلوة بلمّتنا',shareSubtitle:'شارك الدعوة مع اللي بتحبهم',whatsapp:'واتساب',copyLink:'نسخ اللينك',share:'مشاركة',footerText:'مستنيينكم… عشان فرحتنا تكمل 🤍',copied:'تم النسخ 🤍',copyFailed:'النسخ غير متاح هنا. يمكنك نسخ اللينك من شريط العنوان.',audioFailed:'اضغط على زر الموسيقى مرة تانية لتشغيل الأغنية.',shareText:'بكل الحب، ندعوكم لمشاركتنا فرحة زفاف حسن ونادين 🤍\nالسبت، ٢٨ نوفمبر ٢٠٢٦\nدار المشاة، القاهرة',
    openLabel:'افتح دعوة حسن ونادين',menuOpen:'فتح القائمة',menuClose:'إغلاق القائمة',closePhoto:'إغلاق الصور',previousPhoto:'الصورة السابقة',nextPhoto:'الصورة التالية',countdownLabel:'العد التنازلي ليوم الزفاف',mapTitle:'موقع دار المشاة في القاهرة على Google Maps',photoLabel:'تكبير الصورة',topLabel:'العودة إلى أول الدعوة',title:'حسن ونادين | ٢٨ نوفمبر ٢٠٢٦'
  },
  en: {
    submitReply:'Confirm attendance & send wishes',sendingReply:'Saving your reply…',rsvpLoading:'Checking your response…',confirmedNow:'Your response has been received. Thank you for celebrating with us!',confirmedBefore:'You have already sent your response. Thank you!',rsvpSaveError:'We could not save your reply yet. Your words are still here; please check your connection and try again.',rsvpStatusError:'We could not check a previous response. You can try submitting; your reply will not be duplicated.',wishesTitle:'Warm Wishes & Congratulations',wishesSubtitle:'Heartfelt messages from loved ones celebrating Hassan & Nadine',wishesLoading:'Loading your lovely wishes…',wishesEmpty:'Be the first to leave a little love 🤍',wishesError:'We could not load the wishes right now. Please try again.',wishesRetry:'Try again',wishesMore:'More lovely wishes',
    tapHint:'Tap the envelope to begin our story',playMusic:'Play Music',pauseMusic:'Pause Music',
    navWishes:'Warm wishes',
    navDate:'Our day',navStory:'Our invitation',navGallery:'Our moments',navVenue:'The venue',navReply:'Your reply',navShare:'Share the invitation',heroPrelude:'With love, our forever begins',namesAr:'Together with our families',heroInvitation:'We invite you to celebrate our wedding.<br>Your presence will make our day complete.',discover:'Discover our day',
    dateTitle:'A day to remember',dateSubtitle:'Keep this date close to your heart.',saturday:'SATURDAY',november:'November',addCalendar:'Add to your calendar',countdownTitle:'Every second brings us closer',days:'Days',hours:'Hours',minutes:'Minutes',seconds:'Seconds',celebrationDay:'Our wedding day is here. Celebrate with us! 🤍',
    familyNote:'With hearts full of joy,<br>Hassan, Nadine, and their families invite you<br>to celebrate a beautiful new beginning.',galleryTitle:'A glimpse of us',gallerySubtitle:'Little moments, so much happiness.<br>And the best is yet to come… with you.',photoOne:'Where our story begins',photoTwo:'Home, in your eyes',photoThree:'Our favorite kind of joy',photoFour:'Every step, together',galleryQuote:'Life is sweeter with you.',
    venueTitle:'A place for our joy',venueName:'Infantry House',venueCardSubtitle:'A beautiful place for a beautiful beginning',venueAddress:'Beside El Fangary Bridge, Heliopolis',venueDate:'Saturday, 28 November 2026',directions:'View Location',venueFootnote:'One little tap to find your way',openGoogleMaps:'Open in Google Maps',
    replyTitle:'RSVP & Wishes',replySubtitle:'Our joy is complete with you.<br>Confirm your reply and leave a heartfelt wish.',replyNote:'Your name and wish will appear publicly below. Your attendance choice and guest count will stay private.',guestName:'Your lovely name',attending:'Will you celebrate with us?',attendYes:'Yes, I will be there 🤍',attendNo:'Celebrating with you in spirit',guestCount:'Number of guests',yourMessage:'A note for the couple <span class="optional">(optional)</span>',namePlaceholder:'Your name',messagePlaceholder:'Wishing you a lifetime of love and happiness…',
    shareTitle:'Joy is better together',shareSubtitle:'Send our invitation to someone you love',whatsapp:'WhatsApp',copyLink:'Copy link',share:'Share',footerText:'We cannot wait to celebrate with you 🤍',copied:'Copied with love 🤍',copyFailed:'Copy is unavailable here. You can copy the link from your address bar.',audioFailed:'Tap the music button again to play our song.',shareText:'With love, you are invited to celebrate Hassan & Nadine’s wedding 🤍\nSaturday, 28 November 2026\nInfantry House, Cairo',
    openLabel:'Open Hassan and Nadine’s invitation',menuOpen:'Open menu',menuClose:'Close menu',closePhoto:'Close photos',previousPhoto:'Previous photo',nextPhoto:'Next photo',countdownLabel:'Countdown to the wedding day',mapTitle:'Infantry House in Cairo on Google Maps',photoLabel:'View photo',topLabel:'Back to the top',title:'Hassan & Nadine | 28 November 2026'
  }
};
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
let language = 'ar';
try {
  const savedLanguage=localStorage.getItem(LANGUAGE_PREFERENCE);
  if(savedLanguage==='ar'||savedLanguage==='en')language=savedLanguage;
} catch { /* The invitation also works when browser storage is unavailable. */ }
let opened = false;
let currentTrackLanguage = null;
let musicWanted = false;
let musicRequest = 0;
let photoIndex = 0;
let lastPhotoButton;
let toastTimeout;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const intro = $('#intro');
const main = $('#invitation');
const audio = $('#wedding-music');
const musicButton = $('#music-toggle');
const lightbox = $('#lightbox');
const photos = [
  {src:'./assets/photos/our-moment.webp',alt:{ar:'حسن ونادين يمسكان بأيدي بعضهما أمام الورود',en:'Hassan and Nadine holding hands beneath white flowers'}},
  {src:'./assets/photos/together.webp',alt:{ar:'حسن ونادين يبتسمان لبعضهما',en:'Hassan and Nadine smiling at each other'}},
  {src:'./assets/photos/a-little-joy.webp',alt:{ar:'ابتسامة حسن ونادين في لحظة سعيدة',en:'Hassan and Nadine sharing a joyful smile'}},
  {src:'./assets/photos/forever.webp',alt:{ar:'حسن ونادين معًا في إضاءة دافئة',en:'Hassan and Nadine together in a warm golden glow'}}
];

document.body.classList.add('gate-closed');
main.inert = true;
if ('IntersectionObserver' in window && !reduceMotion) {
  document.body.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {entry.target.classList.add('visible');observer.unobserve(entry.target);}
  }, {threshold:.09});
  $$('.reveal').forEach(el => observer.observe(el));
}

function t(key) {return translations[language][key] || key;}
function toast(message) {
  clearTimeout(toastTimeout);
  $('#toast').textContent=message;
  $('#toast').classList.add('show');
  toastTimeout=setTimeout(()=>$('#toast').classList.remove('show'),3600);
}
function musicState() {
  const playing=!audio.paused;
  musicButton.lang=language;
  musicButton.dir=language==='ar'?'rtl':'ltr';
  musicButton.setAttribute('aria-pressed',String(playing));
  musicButton.setAttribute('aria-label',t(playing?'pauseMusic':'playMusic'));
  $('[data-i18n]',musicButton).textContent=t(playing?'pauseMusic':'playMusic');
}
function selectMusicTrack() {
  if(currentTrackLanguage===language)return;
  ++musicRequest;
  audio.pause();
  currentTrackLanguage=language;
  audio.src=MUSIC_TRACKS[language];
  audio.dataset.language=language;
  audio.load();
}
async function playMusic() {
  musicWanted=true;
  selectMusicTrack();
  const request=++musicRequest;
  audio.volume=.45;
  try {await audio.play();}
  catch(error) {
    // A newer language choice or a pause may intentionally cancel an old play request.
    if(request!==musicRequest||error.name==='AbortError')return;
    musicWanted=false;
    toast(t('audioFailed'));
  }
  if(request!==musicRequest)return;
  musicState();
}
function pauseMusic() {
  musicWanted=false;
  ++musicRequest;
  audio.pause();
  musicState();
}
musicButton.addEventListener('click',()=>audio.paused?playMusic():pauseMusic());
audio.addEventListener('play',musicState);
audio.addEventListener('pause',musicState);
audio.addEventListener('error',musicState);
$('#open-invitation').addEventListener('click',()=>{
  if(opened) return;
  opened=true;
  $('#open-invitation').disabled=true;
  playMusic(); // Called in the original tap so mobile browsers allow audio.
  intro.classList.add('opening');
  setTimeout(()=>{
    main.inert=false;
    intro.classList.add('leaving');
    document.body.classList.remove('gate-closed');
    window.scrollTo({top:0,behavior:'instant'});
    setTimeout(()=>{intro.hidden=true;musicButton.hidden=false;$('.brand').focus({preventScroll:true});},reduceMotion?20:500);
  },reduceMotion?50:1450);
});

function invitationUrl() {
  const url=new URL(location.protocol==='http:'||location.protocol==='https:'?location.href:PUBLISHED_URL);
  url.hash='';url.search='';
  // A stable fresh URL lets sharing apps request the updated photo preview.
  url.searchParams.set('invitation','hassan-nadine');
  return url.href;
}
function whatsappUrl(message) {return 'https://wa.me/?text='+encodeURIComponent(message);}
function updateShareLinks() {
  $('#share-whatsapp').href=whatsappUrl(t('shareText')+'\n'+invitationUrl());
}
function setLanguage(next) {
  if(next!=='ar'&&next!=='en')return;
  language=next;
  try {localStorage.setItem(LANGUAGE_PREFERENCE,language);} catch {}
  document.documentElement.lang=language;
  document.documentElement.dir=language==='ar'?'rtl':'ltr';
  document.title=t('title');
  $$('[data-i18n]').forEach(el=>{el.innerHTML=t(el.dataset.i18n);});
  $$('[data-placeholder]').forEach(el=>{el.placeholder=t(el.dataset.placeholder);});
  $$('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));
  $('.language-switch').setAttribute('aria-label',language==='ar'?'اختيار اللغة':'Choose language');
  $('#mobile-menu').dir=language==='ar'?'rtl':'ltr';
  $('#mobile-menu').setAttribute('aria-label',language==='ar'?'أقسام الدعوة':'Invitation sections');
  const labels=[['#open-invitation','openLabel'],['.lightbox-close','closePhoto'],['.lightbox-prev','previousPhoto'],['.lightbox-next','nextPhoto'],['.countdown','countdownLabel'],['.back-top','topLabel'],['.brand','topLabel']];
  labels.forEach(([selector,key])=>$(selector).setAttribute('aria-label',t(key)));
  $('#venue-map').title=t('mapTitle');
  $('#menu-toggle').setAttribute('aria-label',t($('#mobile-menu').hidden?'menuOpen':'menuClose'));
  $$('.photo-button').forEach((el,i)=>el.setAttribute('aria-label',t('photoLabel')+' '+(i+1)));
  photos.forEach((photo,i)=>$('[data-photo="'+i+'"] img').alt=photo.alt[language]);
  $('.photo-arch img').alt=photos[3].alt[language];
  if(lightbox.open) showPhoto(photoIndex);
  if(currentTrackLanguage!==language){
    if(opened&&musicWanted)playMusic();
    else selectMusicTrack();
  }
  musicState();updateShareLinks();
  document.dispatchEvent(new Event('invitation:languagechange'));
}
$$('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
const header=$('#site-header');
const navigationMenu=$('#mobile-menu');
const menuButton=$('#menu-toggle');
let navLastY=window.scrollY;
let navDirection=0;
let navDistance=0;
let navFramePending=false;

function setHeaderHidden(hidden){
  header.classList.toggle('nav-hidden',hidden);
  header.inert=hidden;
  if(hidden)header.setAttribute('aria-hidden','true');
  else header.removeAttribute('aria-hidden');
}
function closeMenu(restoreFocus=false){
  const wasOpen=!navigationMenu.hidden;
  navigationMenu.hidden=true;
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label',t('menuOpen'));
  if(wasOpen&&restoreFocus)menuButton.focus({preventScroll:true});
}
menuButton.addEventListener('click',()=>{
  const willOpen=navigationMenu.hidden;
  navigationMenu.hidden=!willOpen;
  menuButton.setAttribute('aria-expanded',String(willOpen));
  menuButton.setAttribute('aria-label',t(willOpen?'menuClose':'menuOpen'));
  setHeaderHidden(false);
  navDistance=0;
});
$$('.mobile-menu a').forEach(el=>el.addEventListener('click',()=>closeMenu()));
document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu(true);});
header.addEventListener('focusin',()=>setHeaderHidden(false));

function updateNavigation(){
  navFramePending=false;
  const maxScroll=Math.max(0,document.documentElement.scrollHeight-window.innerHeight);
  const y=Math.max(0,Math.min(window.scrollY,maxScroll));
  const delta=y-navLastY;
  navLastY=y;
  if(main.inert||document.body.classList.contains('modal-open')){navDistance=0;return;}
  if(y<90||!navigationMenu.hidden||header.querySelector(':focus-visible')){
    setHeaderHidden(false);navDistance=0;return;
  }
  if(Math.abs(delta)<1)return;
  const direction=delta>0?1:-1;
  if(direction!==navDirection){navDirection=direction;navDistance=0;}
  navDistance+=Math.abs(delta);
  // Small thresholds prevent flicker from touch momentum and tiny wheel movements.
  if(direction>0&&navDistance>14)setHeaderHidden(true);
  if(direction<0&&navDistance>6)setHeaderHidden(false);
}
window.addEventListener('scroll',()=>{
  if(!navFramePending){navFramePending=true;requestAnimationFrame(updateNavigation);}
},{passive:true});
window.addEventListener('resize',()=>{navLastY=window.scrollY;navDistance=0;});

function updateCountdown(now=Date.now()) {
  const remaining=Math.max(0,new Date(EVENT_DAY).getTime()-now);
  const seconds=Math.floor(remaining/1000);
  const parts=[Math.floor(seconds/86400),Math.floor(seconds%86400/3600),Math.floor(seconds%3600/60),seconds%60];
  ['days','hours','minutes','seconds'].forEach((unit,i)=>$('#count-'+unit).textContent=String(parts[i]).padStart(2,'0'));
  $('.countdown').hidden=remaining===0;
  $('.countdown-label').hidden=remaining===0;
  $('#countdown-end').hidden=remaining>0;
}
updateCountdown();setInterval(updateCountdown,1000);

function lockModal(){document.body.classList.add('modal-open');}
function unlockModal(){if(!lightbox.open)document.body.classList.remove('modal-open');}
function showPhoto(index) {
  photoIndex=(index+photos.length)%photos.length;
  $('#lightbox-image').src=photos[photoIndex].src;
  $('#lightbox-image').alt=photos[photoIndex].alt[language];
  $('#lightbox-counter').textContent=String(photoIndex+1).padStart(2,'0')+' / 04';
}
$$('.photo-button').forEach(button=>button.addEventListener('click',()=>{lastPhotoButton=button;showPhoto(Number(button.dataset.photo));lightbox.showModal();lockModal();}));
$('.lightbox-close').addEventListener('click',()=>lightbox.close());
$('.lightbox-prev').addEventListener('click',()=>showPhoto(photoIndex-1));
$('.lightbox-next').addEventListener('click',()=>showPhoto(photoIndex+1));
lightbox.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();showPhoto(photoIndex+1);}if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(photoIndex-1);}});
lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close();});
lightbox.addEventListener('close',()=>{unlockModal();lastPhotoButton?.focus({preventScroll:true});});
let touchStartX=null;
lightbox.addEventListener('touchstart',event=>{touchStartX=event.changedTouches[0]?.clientX??null;},{passive:true});
lightbox.addEventListener('touchend',event=>{if(touchStartX===null)return;const delta=event.changedTouches[0].clientX-touchStartX;if(Math.abs(delta)>55)showPhoto(photoIndex+(delta<0?1:-1));touchStartX=null;},{passive:true});

async function copyText(value) {
  try {
    if(navigator.clipboard&&window.isSecureContext) await navigator.clipboard.writeText(value);
    else {
      const target=document.body;
      const area=document.createElement('textarea');area.value=value;area.style.cssText='position:fixed;opacity:0;inset:0;width:1px;height:1px;';target.append(area);area.select();const result=document.execCommand('copy');area.remove();if(!result)throw new Error('Copy unavailable');
    }
    toast(t('copied'));
  } catch {toast(t('copyFailed'));}
}
$('#copy-link').addEventListener('click',()=>copyText(invitationUrl()));
$('#native-share').addEventListener('click',async()=>{
  if(navigator.share){try{await navigator.share({title:t('title'),text:t('shareText'),url:invitationUrl()});}catch(error){if(error.name!=='AbortError')copyText(invitationUrl());}}
  else copyText(invitationUrl());
});
setLanguage(language);
