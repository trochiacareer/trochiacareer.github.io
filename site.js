
document.addEventListener('DOMContentLoaded', function () {
  /* Trochia Career monogram: trajectory ending on a clear target */
  const monogramMarkup = `
    <text x="36" y="54" text-anchor="middle" font-family="Cormorant Garamond,serif" font-size="52" font-weight="600" fill="#2d4736">T</text>
    <path d="M52 16C31 10 14 22 14 40C14 54 26 63 40 59" fill="none" stroke="#c97959" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="62" cy="35" r="7" fill="#fffdfa" stroke="#c97959" stroke-width="1.6"/>
    <circle cx="62" cy="35" r="4.5" fill="none" stroke="#c97959" stroke-width="1.6"/>
    <circle cx="62" cy="35" r="2.1" fill="#c97959"/>
    <path d="M36 60C48 59 55 53 59.2 43" fill="none" stroke="#c97959" stroke-width="1.9" stroke-linecap="round"/>
    <path d="M57.5 43.3L62 35L64.1 43.9Z" fill="#c97959"/>
  `;
  document.querySelectorAll('svg.monogram').forEach(function(svg){
    svg.setAttribute('viewBox','0 0 72 72');
    svg.innerHTML = monogramMarkup;
  });

  if (window.lucide) lucide.createIcons();

  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded','false');
    }));
  }

  const key='trochiacareer_analytics_consent';
  const banner=document.getElementById('cookie-consent');
  let saved=null;
  try{saved=localStorage.getItem(key)}catch(e){}
  function grant(){
    if (typeof gtag === 'function') {
      gtag('consent','update',{analytics_storage:'granted'});
      gtag('event','page_view');
    }
  }
  function deny(){
    if (typeof gtag === 'function') gtag('consent','update',{analytics_storage:'denied'});
  }
  function hide(){ if (banner) banner.style.display='none'; }
  if (banner) {
    if(saved==='granted'){grant()}
    else if(saved==='denied'){deny()}
    else{banner.style.display='block'}

    const accept=document.getElementById('cookie-accept');
    const reject=document.getElementById('cookie-reject');
    if (accept) accept.addEventListener('click',function(){try{localStorage.setItem(key,'granted')}catch(e){}grant();hide()});
    if (reject) reject.addEventListener('click',function(){try{localStorage.setItem(key,'denied')}catch(e){}deny();hide()});
  }
});
