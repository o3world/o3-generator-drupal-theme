import './_notifications.scss';

// Polyfills
if (!Array.prototype.forEach) {
	Array.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// Notifications Functionality
let notificationTriggers = document.querySelectorAll('[data-notification-trigger]');
let notificationCloseButtons = document.querySelectorAll('[data-notification-close]');

for (let i = 0; i < notificationCloseButtons.length; i++) {
  notificationCloseButtons[i].addEventListener("click", () => {
    closeNotification(notificationCloseButtons[i]);
  })
};

for (let i = 0; i < notificationTriggers.length; i++) {
  notificationTriggers[i].addEventListener("click", () => {
    addNotification(notificationTriggers[i]);
  });
};

let addNotification = (e) => {
  let container = e.parentNode;
  let isDismissible = container.dataset.isDismissible;
  let text = container.dataset.notificationText;
  let type = container.dataset.notificationType;
  let template = '';
  let buttonString = '<button class="notification__close" aria-label="close notification" data-notification-close>x</button>';

  if (isDismissible === '') {
    template = '<div class="notification notification--' + type + ' notification--dismissible" role="notification"><span>' + text + '</span>' + buttonString +'</div>';
    container.innerHTML += template;

    let closeButton = container.querySelector('[data-notification-close]');

    closeButton.addEventListener("click", () => {
      closeNotification(closeButton);
    })
  } else {
    template = '<div class="notification notification--' + type + '" role=notification"><span>' + text + '</span></div>';
    container.innerHTML += template;
  }
}

let closeNotification = (e) => {
  let notification = e.parentNode;
  notification.parentNode.removeChild(notification);
}
