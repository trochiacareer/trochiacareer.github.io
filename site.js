document.addEventListener('DOMContentLoaded', function () {
  /* Restore the original elegant Trochia Career monogram with a thin upward trajectory */
  const originalLogo = `
    <g style="display:block">
      <text x="36" y="54" text-anchor="middle" font-family="Cormorant Garamond,serif" font-size="52" font-weight="600" fill="#2d4736">T</text>
      <path d="M52 16C31 10 14 22 14 40C14 54 26 63 40 59" fill="none" stroke="#c97959" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M36 60C49 59 59 48 64 34" fill="none" stroke="#c97959" stroke-width="1.8" stroke-linecap="round"/>
      <path d="M64 29L59 35L66 36Z" fill="#c97959"/>
    </g>`;

  document.querySelectorAll('svg.monogram').forEach(function(svg){
    svg.setAttribute('viewBox','0 0 72 72');
    svg.style.backgroundImage = 'none';
    svg.innerHTML = originalLogo;
  });

  /* Six-step process flow */
  const processSection = document.getElementById('process');
  if (processSection) {
    if (!document.querySelector('link[data-process-flow]')) {
      const processCss = document.createElement('link');
      processCss.rel = 'stylesheet';
      processCss.href = 'process-flow.css?v=20260915-1';
      processCss.setAttribute('data-process-flow','true');
      document.head.appendChild(processCss);
    }

    processSection.className = 'section process-section';
    processSection.innerHTML = `
      <div class="wrap">
        <div class="process-head">
          <div class="eyebrow">Η διαδικασία</div>
          <h2 class="process-title">Η διαδικασία βήμα προς βήμα</h2>
          <p class="process-intro">Μια οργανωμένη πορεία από την πρώτη επικοινωνία μέχρι το σχέδιο δράσης, προσαρμοσμένη στην ηλικία και στις ανάγκες του παιδιού.</p>
        </div>
        <div class="process-flow-wrap" aria-label="Η διαδικασία σε έξι βήματα">
          <div class="process-flow">
            <article class="process-step">
              <div class="process-step-num">01</div>
              <div class="process-icon"><i data-lucide="message-circle"></i></div>
              <h3>Επικοινωνία &amp; ενημέρωση</h3>
              <p>Συζήτηση για τις ανάγκες και τους στόχους.</p>
            </article>
            <div class="process-arrow" aria-hidden="true"></div>
            <article class="process-step">
              <div class="process-step-num">02</div>
              <div class="process-icon"><i data-lucide="clipboard-check"></i></div>
              <h3>Χορήγηση τεστ</h3>
              <p>Συμπλήρωση πιστοποιημένου ψυχομετρικού εργαλείου, όπου ενδείκνυται.</p>
            </article>
            <div class="process-arrow" aria-hidden="true"></div>
            <article class="process-step">
              <div class="process-step-num">03</div>
              <div class="process-icon"><i data-lucide="bar-chart-3"></i></div>
              <h3>Ανάλυση αποτελεσμάτων</h3>
              <p>Επιστημονική επεξεργασία και ερμηνεία.</p>
            </article>
            <div class="process-arrow" aria-hidden="true"></div>
            <article class="process-step">
              <div class="process-step-num">04</div>
              <div class="process-icon"><i data-lucide="users"></i></div>
              <h3>Συμβουλευτική συνεδρία</h3>
              <p>Αναλυτική συζήτηση για τα ευρήματα και τους στόχους.</p>
            </article>
            <div class="process-arrow" aria-hidden="true"></div>
            <article class="process-step">
              <div class="process-step-num">05</div>
              <div class="process-icon"><i data-lucide="signpost"></i></div>
              <h3>Διερεύνηση επιλογών</h3>
              <p>Παρουσίαση εκπαιδευτικών και επαγγελματικών διεξόδων.</p>
            </article>
            <div class="process-arrow" aria-hidden="true"></div>
            <article class="process-step">
              <div class="process-step-num">06</div>
              <div class="process-icon"><i data-lucide="target"></i></div>
              <h3>Σχέδιο δράσης</h3>
              <p>Διαμόρφωση πλάνου για τα επόμενα βήματα.</p>
            </article>
          </div>
        </div>
        <div class="process-note">Στο κινητό σύρετε οριζόντια για να δείτε όλα τα βήματα.</div>
      </div>`;
  }

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