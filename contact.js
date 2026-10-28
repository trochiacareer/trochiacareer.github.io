/* Independent of the site's decorative scripts and third-party icon libraries. */
(function () {
  'use strict';
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');
  if (!form || !status || !window.fetch || !window.AbortController) return;
  const button = form.querySelector('button[type="submit"]');
  let pending = false;

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    if (pending || !form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    if (data._honey) return;
    pending = true;
    button.disabled = true;
    button.textContent = 'Αποστολή…';
    form.setAttribute('aria-busy', 'true');
    status.textContent = 'Το μήνυμά σας υποβάλλεται. Παρακαλούμε περιμένετε.';
    const controller = new AbortController();
    const timer = setTimeout(function () { controller.abort(); }, 20000);
    try {
      const endpoint = new URL(form.action);
      endpoint.pathname = '/ajax' + endpoint.pathname;
      const response = await fetch(endpoint.href, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(data),
        signal: controller.signal
      });
      if (!response.ok) throw new Error('HTTP response failed');
      const result = await response.json();
      if (result.success !== true && result.success !== 'true') {
        throw new Error('Submission was not confirmed');
      }
      status.textContent = 'Το μήνυμά σας υποβλήθηκε επιτυχώς. Θα επικοινωνήσουμε μαζί σας σύντομα.';
      form.reset();
    } catch (error) {
      status.textContent = error.name === 'AbortError'
        ? 'Η υπηρεσία καθυστερεί και δεν μπορέσαμε να επιβεβαιώσουμε την αποστολή. Τα στοιχεία σας παραμένουν στη φόρμα. Επικοινωνήστε μέσω του email ή του τηλεφώνου παρακάτω. Αν δοκιμάσετε ξανά, ενδέχεται να λάβουμε το μήνυμα δύο φορές.'
        : 'Δεν μπορέσαμε να επιβεβαιώσουμε την αποστολή. Τα στοιχεία σας παραμένουν στη φόρμα. Μπορείτε να επικοινωνήσετε μέσω του email ή του τηλεφώνου παρακάτω. Αν δοκιμάσετε ξανά, ενδέχεται να λάβουμε το μήνυμα δύο φορές.';
    } finally {
      clearTimeout(timer);
      pending = false;
      button.disabled = false;
      button.textContent = 'Αποστολή μηνύματος';
      form.removeAttribute('aria-busy');
      status.focus();
    }
  });
}());
