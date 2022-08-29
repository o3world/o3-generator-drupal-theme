import './_toggle-button.scss';

const toggleButtons = document.querySelectorAll('[data-toggle-button]');

for (let i = 0; i < toggleButtons.length; i++) {
  let thisToggle = toggleButtons[i];

  thisToggle.addEventListener('click', () => {
    if (thisToggle.getAttribute('aria-checked') == 'true') {
      thisToggle.setAttribute('aria-checked', 'false');
    } else {
      thisToggle.setAttribute('aria-checked', 'true');
    }
  });
}
