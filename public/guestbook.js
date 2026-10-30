'use strict';
const RSVP_TOKEN_KEY='hassan-nadine-rsvp-token';
const RSVP_CONFIRMED_KEY='hassan-nadine-rsvp-confirmed';
// The public invitation can move to GitHub Pages while replies keep their data.
const RSVP_API_BASE='https://hassan-nadine-november-2026.orangeokapi26.chatgpt.site';
const rsvpForm=$('#reply-form');
const confirmation=$('#rsvp-confirmation');
let rsvpLoading=true,rsvpSubmitting=false,rsvpJustSubmitted=false;
let guestToken=readRsvpStorage(RSVP_TOKEN_KEY);
let rsvpConfirmed=readRsvpStorage(RSVP_CONFIRMED_KEY)==='1';
let rsvpError='';
let wishes=[],wishesCursor=null,wishesLoading=false,wishesError=false,wishesController,wishesRequest=0;

function readRsvpStorage(key){
  try{const value=localStorage.getItem(key);if(value!==null)return value;}catch{}
  try{const item=document.cookie.split('; ').find(value=>value.startsWith(key+'='));return item?decodeURIComponent(item.slice(key.length+1)):null;}catch{return null;}
}
function writeRsvpStorage(key,value){
  try{localStorage.setItem(key,value);}catch{}
  try{document.cookie=key+'='+encodeURIComponent(value)+'; Path=/; Max-Age=31536000; SameSite=Lax'+(location.protocol==='https:'?'; Secure':'');}catch{}
}
function clearRsvpStorage(key){
  try{localStorage.removeItem(key);}catch{}
  try{document.cookie=key+'=; Path=/; Max-Age=0; SameSite=Lax';}catch{}
}
function ensureGuestToken(){
  if(!guestToken||!/^[a-f0-9]{64}$/i.test(guestToken)){
    guestToken=Array.from(crypto.getRandomValues(new Uint8Array(32)),byte=>byte.toString(16).padStart(2,'0')).join('');
    writeRsvpStorage(RSVP_TOKEN_KEY,guestToken);
  }
  return guestToken;
}
async function rsvpFetch(path,options={}){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
  try{
    const response=await fetch(new URL(path,RSVP_API_BASE),{...options,cache:'no-store',credentials:'omit',signal:controller.signal});
    const body=await response.json();if(!response.ok)throw new Error(body.error||'request_failed');return body;
  }finally{clearTimeout(timer);}
}
function renderRsvp(){
  $('#reply').classList.toggle('has-confirmation',rsvpConfirmed);
  $('#reply-intro').hidden=rsvpConfirmed;rsvpForm.hidden=rsvpConfirmed||rsvpLoading;
  $('#rsvp-loading').hidden=!rsvpLoading||rsvpConfirmed;confirmation.hidden=!rsvpConfirmed;
  $('#confirmation-message').textContent=t(rsvpJustSubmitted?'confirmedNow':'confirmedBefore');
  $('#reply-form-error').hidden=!rsvpError;$('#reply-form-error').textContent=rsvpError?t(rsvpError):'';
  const button=$('.reply-submit');button.disabled=rsvpSubmitting;button.setAttribute('aria-busy',String(rsvpSubmitting));
  $('[data-i18n]',button).textContent=t(rsvpSubmitting?'sendingReply':'submitReply');
}
async function restoreRsvp(){
  renderRsvp();
  try{
    if(guestToken&&/^[a-f0-9]{64}$/i.test(guestToken)){
      const result=await rsvpFetch('/api/rsvp',{headers:{'X-Rsvp-Token':guestToken}});rsvpConfirmed=result.submitted===true;
      if(rsvpConfirmed)writeRsvpStorage(RSVP_CONFIRMED_KEY,'1');else clearRsvpStorage(RSVP_CONFIRMED_KEY);
    }else{rsvpConfirmed=false;clearRsvpStorage(RSVP_CONFIRMED_KEY);}
  }catch{if(!rsvpConfirmed)rsvpError='rsvpStatusError';}
  finally{rsvpLoading=false;renderRsvp();}
}
$$('input[name=attendance]').forEach(input=>input.addEventListener('change',()=>{$('#guests-field').hidden=$('input[name=attendance]:checked').value==='no';}));
rsvpForm.addEventListener('submit',async event=>{
  event.preventDefault();if(rsvpSubmitting||rsvpConfirmed)return;
  const name=$('#guest-name').value.trim();if(!name){$('#guest-name').value='';$('#guest-name').reportValidity();return;}
  const attendance=$('input[name=attendance]:checked').value;
  const payload={token:ensureGuestToken(),name,attendance,guests:attendance==='yes'?Number($('#guest-count').value):0,message:$('#guest-message').value.trim()};
  rsvpSubmitting=true;rsvpError='';renderRsvp();
  const controls=$$('input,textarea,select',rsvpForm);controls.forEach(control=>control.disabled=true);
  try{
    const result=await rsvpFetch('/api/rsvp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(result.submitted!==true)throw new Error('not_saved');
    rsvpConfirmed=true;rsvpJustSubmitted=result.created===true;writeRsvpStorage(RSVP_CONFIRMED_KEY,'1');rsvpForm.reset();renderRsvp();
    confirmation.focus({preventScroll:true});loadWishes(true);
  }catch{rsvpError='rsvpSaveError';}
  finally{rsvpSubmitting=false;controls.forEach(control=>control.disabled=false);renderRsvp();}
});
function makeWishCard(wish){
  const card=document.createElement('article');card.className='wish-card';card.setAttribute('role','listitem');
  const quote=document.createElementNS('http://www.w3.org/2000/svg','svg');quote.setAttribute('viewBox','0 0 28 28');quote.setAttribute('class','wish-quote');quote.setAttribute('aria-hidden','true');
  const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','M4 5h7v9c0 5-2 8-7 9v-5c2-.5 3-2 3-4H4Zm13 0h7v9c0 5-2 8-7 9v-5c2-.5 3-2 3-4h-3Z');quote.append(path);
  const body=document.createElement('p');body.className='wish-message';body.dir='auto';body.lang=/[\u0600-\u06ff]/.test(wish.message)?'ar':'en';body.textContent=wish.message||'♡';if(!wish.message)body.classList.add('wish-heart-only');
  const footer=document.createElement('footer');footer.className='wish-footer';
  const name=document.createElement('span');name.className='wish-author';name.dir='auto';name.lang=/[\u0600-\u06ff]/.test(wish.name)?'ar':'en';name.textContent=wish.name;
  const heart=document.createElement('span');heart.className='wish-heart';heart.textContent='♡';heart.setAttribute('aria-hidden','true');
  footer.append(name,heart);card.append(quote,body,footer);return card;
}
function renderWishes(){
  $('#wishes-grid').replaceChildren(...wishes.map(makeWishCard));
  const status=$('#wishes-status');status.hidden=wishes.length>0;status.textContent=t(wishesLoading?'wishesLoading':wishesError?'wishesError':'wishesEmpty');
  $('#wishes-retry').hidden=!wishesError||wishesLoading;
  const more=$('#wishes-more');more.hidden=!wishesCursor;more.disabled=wishesLoading;more.textContent=t(wishesLoading?'wishesLoading':'wishesMore');
}
async function loadWishes(reset=true){
  if(!reset&&(!wishesCursor||wishesLoading))return;
  wishesController?.abort();const controller=new AbortController();wishesController=controller;
  const request=++wishesRequest,cursor=reset?null:wishesCursor;
  wishesLoading=true;wishesError=false;renderWishes();const timer=setTimeout(()=>controller.abort(),15000);
  try{
    const url=new URL('/api/wishes',RSVP_API_BASE);if(cursor)url.searchParams.set('before',String(cursor));
    const response=await fetch(url,{cache:'no-store',credentials:'omit',signal:controller.signal});if(!response.ok)throw new Error('wishes_failed');
    const data=await response.json();if(request!==wishesRequest)return;if(!Array.isArray(data.wishes))throw new Error('invalid_wishes');
    const items=data.wishes.filter(wish=>Number.isSafeInteger(wish.id)&&typeof wish.name==='string'&&typeof wish.message==='string');
    wishes=reset?items:[...wishes,...items.filter(wish=>!wishes.some(existing=>existing.id===wish.id))];wishesCursor=Number.isSafeInteger(data.nextCursor)?data.nextCursor:null;
  }catch{if(request===wishesRequest)wishesError=true;}
  finally{clearTimeout(timer);if(request===wishesRequest){wishesLoading=false;renderWishes();}}
}
$('#wishes-more').addEventListener('click',()=>loadWishes(false));$('#wishes-retry').addEventListener('click',()=>loadWishes(true));
document.addEventListener('invitation:languagechange',()=>{renderRsvp();renderWishes();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&!wishesLoading&&wishes.length<=12)loadWishes(true);});
setInterval(()=>{if(!opened||document.visibilityState!=='visible'||wishesLoading||wishes.length>12)return;const area=$('#wishes').getBoundingClientRect();if(area.top<innerHeight&&area.bottom>0)loadWishes(true);},45000);
restoreRsvp();loadWishes(true);
