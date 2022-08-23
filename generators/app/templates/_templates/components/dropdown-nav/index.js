import './_dropdown-nav.scss';

 // set aria attributes on buttons on mobile, links on desktop
 function setAriaAttributes(windowWidth, mobileBreakpointMax, subMenuLinks, subMenuToggles) {

  if (windowWidth < mobileBreakpointMax) {
    for (let i = 0; i < subMenuLinks.length; i++) {
      subMenuLinks[i].removeAttribute('aria-has-popup', 'false');
      subMenuLinks[i].removeAttribute('aria-expanded', 'false');
    }
    for (let i = 0; i < subMenuToggles.length; i++) {
      subMenuToggles[i].setAttribute('aria-has-popup', 'true');
      subMenuToggles[i].setAttribute('aria-expanded', 'false');
    }
  } else {
    for (let i = 0; i < subMenuLinks.length; i++) {
      subMenuLinks[i].setAttribute('aria-has-popup', 'true');
      subMenuLinks[i].setAttribute('aria-expanded', 'false');
    }
    for (let i = 0; i < subMenuToggles.length; i++) {
      subMenuToggles[i].removeAttribute('aria-has-popup', 'false');
      subMenuToggles[i].removeAttribute('aria-expanded', 'false');
    }
  }
}

function handleMobileNav(mainMenuToggle,navContainer,subMenuToggles, subNavContainer) {
  // open/close top level menu on mobile
  mainMenuToggle.addEventListener('click', function(e) {
    const toggleExpanded = (e.target.getAttribute('aria-expanded') === 'true') ? false : true;

    mainMenuToggle.setAttribute('aria-expanded', toggleExpanded);


    if (navContainer.classList.contains('is-open')) {
      navContainer.classList.remove('is-open');

      //when main menu is closed, also close all submenus
      for (let i = 0; i < subMenuToggles.length; i++) {
        if (subMenuToggles[i].classList.contains('is-open')) {
          subNavContainer.classList.remove('is-open');
        }
      }

    } else {
      navContainer.classList.add('is-open');
    }

  });

  // open/close sub-level menus on mobile using buttons
  for (let i = 0; i < subMenuToggles.length; i++) {

    subMenuToggles[i].addEventListener('click', function(e) {
      const subNavContainer = subMenuToggles[i].nextElementSibling;
      const subNavParent = subNavContainer.parentElement;
      const subMenuHeight = e.target.nextElementSibling.firstElementChild.offsetHeight;
      const subToggleIcon = e.target.querySelector('.sub-nav__arrow');

      // rotate arrow icon
      subToggleIcon.classList.add('is-active');

      if(subNavParent.classList.contains('is-open')) {
        subNavParent.classList.remove('is-open');
        subToggleIcon.classList.remove('is-active');
        subNavContainer.setAttribute('style', 'height: 0; visibility: hidden;');
        subMenuToggles[i].setAttribute('aria-expanded', 'false');
      } else {
        subNavParent.classList.add('is-open');
        subToggleIcon.classList.add('is-active');
        subNavContainer.setAttribute('style', `height: ${subMenuHeight}px; visibility: visible;`);
        subMenuToggles[i].setAttribute('aria-expanded', 'true');
      }

    });
  }
};

// handle touchscreens in landscape orientation where desktop version of menu is displayed
function handleTabletTouch(subMenuLinks) {
  if(subMenuLinks){
    for (let i = 0; i < subMenuLinks.length; i++) {

      subMenuLinks[i].addEventListener('touchstart', function(e) {
          const currentTarget = e.currentTarget;
          const previousCurrentTarget = document.querySelectorAll('.is-hovered');

          currentTarget.parentElement.classList.add('is-hovered');
          currentTarget.setAttribute('aria-expanded', 'true');

          for (let i = 0; i < previousCurrentTarget.length; i++) {
            previousCurrentTarget[i].classList.remove('is-hovered');
            previousCurrentTarget[i].firstElementChild.setAttribute('aria-expanded', 'false');
          }

          e.preventDefault();
      });
    }
  }
}

function collapseSubNav(navContainer,dropdownItems,subMenuArrows,subMenuLinks,subNavContainers) {

  if (navContainer.classList.contains('is-open')) {
    navContainer.classList.remove('is-open');
  }

  for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].classList.remove('is-open');
    dropdownItems[i].classList.remove('is-hovered');
  }

  for (let i = 0; i < subMenuArrows.length; i++) {
    subMenuArrows[i].classList.remove('is-active');
  }

  for (let i = 0; i < subMenuLinks.length; i++) {
    subMenuLinks[i].classList.remove('is-open');
  }

  for (let i = 0; i < subNavContainers.length; i++) {
    subNavContainers[i].setAttribute('style', '');
  }
}

// Utility function to make window resizing more performant.
function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

function init() {
  //only run if the nav is present
  const mobileBreakpointMax = 768;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const dropdownItems = document.querySelectorAll('[data-dropdown-item]');
  const navContainer = document.querySelector('[data-nav-list-container]');
  const mainMenuToggle = document.querySelector('[data-nav-toggle]');
  const subNavContainers = document.querySelectorAll('[data-sub-list-container]');
  const subNavContainer = document.querySelector('[data-sub-list-container]');
  const subMenuToggles = document.querySelectorAll('[data-subnav-toggle]');
  const subMenuLinks = document.querySelectorAll('[data-has-popup]');
  const subMenuArrows = document.querySelectorAll('.sub-nav__arrow');

  setAriaAttributes(windowWidth, mobileBreakpointMax, subMenuLinks, subMenuToggles,subNavContainer);

  handleMobileNav(mainMenuToggle,navContainer,subMenuToggles);

  // Set listeners for mouse and focus events
  if (windowWidth > mobileBreakpointMax) {

    for (let i = 0; i < subMenuLinks.length; i++) {
      const linkWithSubmenu = subMenuLinks[i].parentElement;
      const link = subMenuLinks[i];

      linkWithSubmenu.addEventListener('focusin', () => {
        link.setAttribute('aria-expanded', 'true');
        link.classList.add('is-open');
      });

      linkWithSubmenu.addEventListener('focusout', () => {
        link.setAttribute('aria-expanded', 'false');
        link.classList.remove('is-open');
      });

      linkWithSubmenu.addEventListener('mouseenter', () => {
        subMenuLinks[i].setAttribute('aria-expanded', 'true');
        subMenuLinks[i].classList.add('is-open');
      });

      linkWithSubmenu.addEventListener('mouseleave', () => {
        subMenuLinks[i].setAttribute('aria-expanded', 'false');
        subMenuLinks[i].classList.remove('is-open');
      });
    }
  }

  // Arrow key controls
  for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('keydown', (e) => {

      if (e.keyCode === 37) {
        if (i === 0) {
          dropdownItems[dropdownItems.length - 1]
            .querySelector('[data-dropdown-link]')
            .focus();
        } else {
          dropdownItems[i - 1]
            .querySelector('[data-dropdown-link]')
            .focus();
        }
      }

      if (e.keyCode === 39) {
        if (i === dropdownItems.length - 1) {
          dropdownItems[0]
            .querySelector('[data-dropdown-link]')
            .focus();
        } else {
          dropdownItems[i + 1]
            .querySelector('[data-dropdown-link]')
            .focus();
        }
      }
    });
  }

  window.addEventListener('resize', debounce(function() {

    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    collapseSubNav(navContainer,dropdownItems,subMenuArrows,subMenuLinks,subNavContainers);

    //reset aria attributes based on vieportWidth after resize
    if (viewportWidth < mobileBreakpointMax) {
      for (let i = 0; i < subMenuLinks.length; i++) {
        subMenuLinks[i].removeAttribute('aria-has-popup', 'false');
        subMenuLinks[i].removeAttribute('aria-expanded');
      }
      for (let i = 0; i < subMenuToggles.length; i++) {
        subMenuToggles[i].setAttribute('aria-has-popup', 'true');
        subMenuToggles[i].setAttribute('aria-expanded', 'false');
      }
    } else {
      for (let i = 0; i < subMenuLinks.length; i++) {
        subMenuLinks[i].setAttribute('aria-has-popup', 'true');
        subMenuLinks[i].setAttribute('aria-expanded', 'false');
      }
      for (let i = 0; i < subMenuToggles.length; i++) {
        subMenuToggles[i].removeAttribute('aria-has-popup', 'false');
        subMenuToggles[i].removeAttribute('aria-expanded', 'false');
      }
    }

    if (viewportWidth >= mobileBreakpointMax  && viewportWidth <= 1367) {
      handleTabletTouch(subMenuLinks);
    }

  }));
}

function navExists() {
  if(document.querySelectorAll('[data-nav-container]').length !== 0) {
    return true
  }
  return false
}

if(navExists()){
  init();
}
