const form = document.querySelector('.beta-form');
const error = document.querySelector('.form-error');
const success = document.querySelector('.form-success');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  error.hidden = true;
  success.hidden = true;

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const saves = form.elements.saves.value;
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !validEmail || !saves) {
    error.textContent = 'Add your name, a valid email address, and the kind of saves you want help with.';
    error.hidden = false;
    const target = !name ? form.elements.name : !validEmail ? form.elements.email : form.querySelector('input[name="saves"]');
    target.focus();
    return;
  }

  form.querySelectorAll('label, input, textarea, fieldset, button, small, .form-note').forEach((element) => {
    element.hidden = true;
  });
  success.hidden = false;
});
