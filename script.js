// Small progressive enhancement: set current year and graceful form handler
document.getElementById('year').textContent = new Date().getFullYear();

// Optional: fake form submission to show UX without backend
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const name = form.querySelector('input[name="name"]').value || 'friend';
    const prev = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending…';
    setTimeout(() => {
      btn.textContent = 'Sent!';
      alert(`Thank you, ${name}! I’ll be in touch soon.\n\nReplace this demo with your form service when you publish.`);
      btn.textContent = prev;
      btn.disabled = false;
      form.reset();
    }, 900);
  });
}
