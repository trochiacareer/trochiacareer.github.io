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

  /* Age navigation cards */
  const agesSection = document.getElementById('ages');
  if (agesSection) {
    if (!document.querySelector('link[data-age-navigation]')) {
      const ageCss = document.createElement('link');
      ageCss.rel = 'stylesheet';
      ageCss.href = 'age-navigation.css?v=20260915-1';
      ageCss.setAttribute('data-age-navigation','true');
      document.head.appendChild(ageCss);
    }

    const primaryIcon = `<svg viewBox="0 0 72 72" aria-hidden="true"><circle cx="27" cy="22" r="8" fill="#fff8ef" stroke="#234b3d" stroke-width="2.6"/><circle cx="47" cy="25" r="6.5" fill="#fff8ef" stroke="#c97959" stroke-width="2.4"/><path d="M14 53c1.7-12 6.8-19 13-19s11.3 7 13 19" fill="none" stroke="#234b3d" stroke-width="2.8" stroke-linecap="round"/><path d="M37 53c1.2-9 5-14 10-14 4.7 0 8.2 4.8 9.5 13" fill="none" stroke="#c97959" stroke-width="2.5" stroke-linecap="round"/><path d="M20 54h15" stroke="#d6b48d" stroke-width="4" stroke-linecap="round"/></svg>`;
    const middleIcon = `<svg viewBox="0 0 72 72" aria-hidden="true"><circle cx="36" cy="19" r="8" fill="#fff8ef" stroke="#234b3d" stroke-width="2.7"/><path d="M22 55c1.5-13 7-21 14-21s12.5 8 14 21" fill="none" stroke="#234b3d" stroke-width="2.8" stroke-linecap="round"/><rect x="18" y="29" width="11" height="22" rx="3" fill="#d6b48d" stroke="#c97959" stroke-width="2"/><rect x="43" y="29" width="11" height="22" rx="3" fill="#d6b48d" stroke="#c97959" stroke-width="2"/><path d="M25 32c3-5 7-8 11-8s8 3 11 8" fill="none" stroke="#c97959" stroke-width="2.4" stroke-linecap="round"/></svg>`;
    const highIcon = `<svg viewBox="0 0 72 72" aria-hidden="true"><path d="M10 25 36 13l26 12-26 12L10 25Z" fill="#fff8ef" stroke="#234b3d" stroke-width="2.7" stroke-linejoin="round"/><path d="M20 30v14c8 7 24 7 32 0V30" fill="#fff8ef" stroke="#234b3d" stroke-width="2.7" stroke-linejoin="round"/><path d="M61 25v18" stroke="#c97959" stroke-width="2.6" stroke-linecap="round"/><circle cx="61" cy="46" r="3" fill="#c97959"/></svg>`;

    agesSection.className = 'section age-nav-section';
    agesSection.innerHTML = `
      <div class="wrap">
        <div class="age-nav-head">
          <div class="eyebrow">Ανά ηλικία</div>
          <h2 class="age-nav-title">Σε ποια ηλικιακή βαθμίδα βρίσκεται το παιδί σας;</h2>
          <p class="age-nav-intro">Κάθε ηλικία φέρνει διαφορετικά ερωτήματα και χρειάζεται διαφορετική προσέγγιση. Επιλέξτε τη βαθμίδα που σας αφορά.</p>
        </div>
        <div class="age-choice-grid">
          <a class="age-choice-card" href="dimotiko.html" aria-label="Δείτε τις υπηρεσίες για μαθητές Δημοτικού">
            <div class="age-choice-icon">${primaryIcon}</div>
            <h3>Μαθητές Δημοτικού</h3>
            <p>Μαθησιακό προφίλ, δυνατά σημεία &amp; ταλέντα</p>
            <div class="age-choice-link">Δείτε περισσότερα <span>→</span></div>
          </a>
          <a class="age-choice-card" href="gymnasio.html" aria-label="Δείτε τις υπηρεσίες για μαθητές Γυμνασίου">
            <div class="age-choice-icon">${middleIcon}</div>
            <h3>Μαθητές Γυμνασίου</h3>
            <p>Αυτογνωσία, ενδιαφέροντα &amp; πρώτες κατευθύνσεις</p>
            <div class="age-choice-link">Δείτε περισσότερα <span>→</span></div>
          </a>
          <a class="age-choice-card" href="lykeio.html" aria-label="Δείτε τις υπηρεσίες για μαθητές Λυκείου">
            <div class="age-choice-icon">${highIcon}</div>
            <h3>Μαθητές Λυκείου</h3>
            <p>Σπουδές, επιλογές &amp; σχεδιασμός επόμενων βημάτων</p>
            <div class="age-choice-link">Δείτε περισσότερα <span>→</span></div>
          </a>
        </div>
      </div>`;
  }

  /* Six-step process flow */
  const processSection = document.getElementById('process');
  if (processSection) {
    if (!document.querySelector('link[data-process-flow]')) {
      const processCss = document.createElement('link');
      processCss.rel = 'stylesheet';
      processCss.href = 'process-flow.css?v=20260915-3';
      processCss.setAttribute('data-process-flow','true');
      document.head.appendChild(processCss);
    }

    const icon1 = `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M12 15h40a7 7 0 0 1 7 7v18a7 7 0 0 1-7 7H30L18 56v-9h-6a7 7 0 0 1-7-7V22a7 7 0 0 1 7-7Z" fill="#fff8ef" stroke="#234b3d" stroke-width="3" stroke-linejoin="round"/><circle cx="24" cy="31" r="3" fill="#c97959"/><circle cx="32" cy="31" r="3" fill="#c97959"/><circle cx="40" cy="31" r="3" fill="#c97959"/></svg>`;
    const icon2 = `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="13" y="14" width="38" height="42" rx="5" fill="#fff8ef" stroke="#234b3d" stroke-width="3"/><path d="M25 14v-3a7 7 0 0 1 14 0v3" fill="none" stroke="#234b3d" stroke-width="3" stroke-linecap="round"/><rect x="21" y="24" width="11" height="7" rx="1.5" fill="#c97959" opacity=".9"/><path d="m39 26 3 3 6-7" fill="none" stroke="#234b3d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 39h22M21 46h17" stroke="#234b3d" stroke-width="2.6" stroke-linecap="round"/></svg>`;
    const icon3 = `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M10 51h44" stroke="#234b3d" stroke-width="2.7" stroke-linecap="round"/><rect x="14" y="35" width="8" height="16" rx="1.5" fill="#6f8879"/><rect x="27" y="27" width="8" height="24" rx="1.5" fill="#d6b48d"/><rect x="40" y="18" width="8" height="33" rx="1.5" fill="#c97959"/><path d="M13 28c10-1 20-5 28-12l7-7" fill="none" stroke="#c97959" stroke-width="3" stroke-linecap="round"/><path d="m44 9 7-1-2 7" fill="none" stroke="#c97959" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    const icon4 = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="22" cy="27" r="9" fill="#fff8ef" stroke="#234b3d" stroke-width="3"/><path d="M8 51c2-10 8-15 14-15s12 5 14 15" fill="none" stroke="#234b3d" stroke-width="3" stroke-linecap="round"/><circle cx="43" cy="36" r="6" fill="#fff8ef" stroke="#234b3d" stroke-width="2.7"/><path d="M35 52c1.4-6.7 4.8-10 8-10s6.6 3.3 8 10" fill="none" stroke="#234b3d" stroke-width="2.7" stroke-linecap="round"/><path d="M35 12h15a7 7 0 0 1 7 7v6a7 7 0 0 1-7 7h-6l-6 5v-5h-3a7 7 0 0 1-7-7v-6a7 7 0 0 1 7-7Z" fill="#fff8ef" stroke="#c97959" stroke-width="2.7" stroke-linejoin="round"/></svg>`;
    const icon5 = `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M31 9v47" stroke="#234b3d" stroke-width="3" stroke-linecap="round"/><path d="M14 16h30l8 8-8 8H14l-8-8 8-8Z" fill="#234b3d"/><path d="M50 37H22l-8 8 8 8h28l8-8-8-8Z" fill="#c97959"/><path d="M20 24h22M26 45h20" stroke="#fff8ef" stroke-width="2.4" stroke-linecap="round"/></svg>`;
    const icon6 = `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="29" cy="35" r="22" fill="#fff8ef" stroke="#234b3d" stroke-width="3"/><circle cx="29" cy="35" r="14" fill="none" stroke="#234b3d" stroke-width="3"/><circle cx="29" cy="35" r="6" fill="#c97959"/><path d="M33 31 53 11" stroke="#c97959" stroke-width="4" stroke-linecap="round"/><path d="M49 10h10v10l-5-2-3-3-2-5Z" fill="#c97959"/></svg>`;

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
              <div class="process-icon">${icon1}</div>
              <h3>Επικοινωνία &amp; ενημέρωση</h3>
              <p>Συζήτηση για τις ανάγκες και τους στόχους.</p>
            </article>
            <div class="process-arrow" aria-hidden="true"></div>
            <article class="process-step">
              <div class="process-step-num">02</div>
              <div class="process-icon">${icon2}</div>
              <h3>Χορήγηση τεστ</h3>
              <p>Συμπλήρωση πιστοποιημένου ψυχομετρικού εργαλείου, όπου ενδείκνυται.</p>
            </article>
            <div class="process-arrow" aria-hidden="true"></div>
            <article class="process-step">
              <div class="process-step-num">03</div>
              <div class="process-icon">${icon3}</div>
              <h3>Ανάλυση αποτελεσμάτων</h3>
              <p>Επιστημονική επεξεργασία και ερμηνεία.</p>
            </article>
            <div class="process-arrow" aria-hidden="true"></div>
            <article class="process-step">
              <div class="process-step-num">04</div>
              <div class="process-icon">${icon4}</div>
              <h3>Συμβουλευτική συνεδρία</h3>
              <p>Αναλυτική συζήτηση για τα ευρήματα και τους στόχους.</p>
            </article>
            <div class="process-arrow" aria-hidden="true"></div>
            <article class="process-step">
              <div class="process-step-num">05</div>
              <div class="process-icon">${icon5}</div>
              <h3>Διερεύνηση επιλογών</h3>
              <p>Παρουσίαση εκπαιδευτικών και επαγγελματικών διεξόδων.</p>
            </article>
            <div class="process-arrow" aria-hidden="true"></div>
            <article class="process-step">
              <div class="process-step-num">06</div>
              <div class="process-icon">${icon6}</div>
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