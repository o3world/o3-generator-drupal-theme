import './_tool-tip.scss';

const wraps = document.querySelectorAll('[data-tooltip-area]');
const tooltips = document.querySelectorAll('[data-tooltip]');

// Mouse variables updated whenever the mouse move
let mouseX = 0;
let mouseY = 0;

for (let i = 0; i < wraps.length; i++) {
  const tooltip = wraps[i].querySelector('[data-tooltip]');

  tooltips[i].addEventListener('focus', () => {
    tooltip.setAttribute('aria-expanded', 'true');
    tooltip.setAttribute('style', `top: 0px; left: 0px`);
  });

  tooltips[i].addEventListener('focusout', () => {
    tooltip.setAttribute('aria-expanded', 'false');
  });

  wraps[i].addEventListener('mouseenter', () => {
    tooltip.setAttribute('aria-expanded', 'true');
  });

  wraps[i].addEventListener('mouseleave', () => {
    tooltip.setAttribute('aria-expanded', 'false');
  });

  wraps[i].addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    tooltip.setAttribute('style', `top: ${mouseY}px; left: ${mouseX}px`);
  }, false);
}
