
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.querySelector('.book-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach((el) => {
      if (!el.value.trim()) {
        el.style.borderColor = '#d33';
        el.focus();
        valid = false;
      } else {
        el.style.borderColor = '#dfe3e6';
      }
    });
    if (!valid) {
      e.preventDefault();
      alert('Please fill in the required fields.');
    }
  });
}