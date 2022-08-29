import './_button-dropdown.scss';

let dropdownContainers = document.querySelectorAll('[data-dropdown-container]');

for (let i = 0; i < dropdownContainers.length; i++) {

  let dropdownToggle = dropdownContainers[i].querySelector('[data-dropdown-toggle]');
  let dropdownPanel = dropdownContainers[i].querySelector('[data-dropdown-panel]');
  let listLinks = dropdownContainers[i].querySelectorAll('.dropdown__link');
  let dropdownStatus = false;

  // Watch for clicks outside of the panel or toggle
  document.addEventListener("click", (e) => {
    let panelClicked = dropdownPanel.contains(e.target);
    let toggleClicked = dropdownToggle.contains(e.target);

    if (dropdownStatus && (!panelClicked && !toggleClicked)) {
      closeDropdown(dropdownToggle, listLinks);
      dropdownStatus = false;
    }
  })

  // Watch for direct clicks on toggle
  dropdownToggle.addEventListener("click", () => {
    dropdownStatus = !dropdownStatus;
    handleDropdown(dropdownToggle, listLinks, dropdownStatus);
  });

  document.addEventListener("keydown", (e) => {
    if (!dropdownStatus && (e.keyCode == 13)) {
      handleDropdown(dropdownToggle, listLinks, dropdownStatus);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (dropdownStatus && (e.keyCode == 27)) {
      closeDropdown(dropdownToggle, listLinks);
      dropdownStatus = false;
    }
  });

  for (let i = 0; i < listLinks.length; i++) {
    listLinks[i].addEventListener("keydown", (e) => {

      if (e.keyCode === 38) {
        if (i === 0) {
          listLinks[listLinks.length - 1].focus();
        } else {
          listLinks[i - 1].focus();
        }
      }

      if (e.keyCode === 40) {
        if (i === listLinks.length - 1) {
          listLinks[0].focus();
        } else {
          listLinks[i + 1].focus();
        }
      }
    });
  };
};

let handleDropdown = (element, list, status) => {
  let parent = element.parentNode;

  if (status) {
    parent.classList.add('is-open');
    element.setAttribute("aria-expanded", "true");

    for (let i = 0; i < list.length; i++) {
      list[i].setAttribute("tabindex", "0");
    }
  } else {
    parent.classList.remove('is-open');
    element.setAttribute("aria-expanded", "false");

    for (let i = 0; i < list.length; i++) {
      list[i].setAttribute("tabindex", "-1");
    }
  }
}

let closeDropdown = (element, list) => {
  element.parentNode.classList.remove('is-open');
  element.setAttribute("aria-expanded", "false");

  for (let i = 0; i < list.length; i++) {
    list[i].setAttribute("tabindex", "-1");
  }
}
