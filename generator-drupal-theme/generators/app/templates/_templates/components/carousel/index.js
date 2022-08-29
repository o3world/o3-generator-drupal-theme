import './_carousel.scss';

/* Focusin/out event polyfill (for Firefox) by nuxodin
 * Source: https://gist.github.com/nuxodin/9250e56a3ce6c0446efa
 */

!function(){
  var w = window,
  d = w.document;

  if( w.onfocusin === undefined ){
    d.addEventListener('focus' ,addPolyfill ,true);
    d.addEventListener('blur' ,addPolyfill ,true);
    d.addEventListener('focusin' ,removePolyfill ,true);
    d.addEventListener('focusout' ,removePolyfill ,true);
  }
  function addPolyfill(e){
    var type = e.type === 'focus' ? 'focusin' : 'focusout';
    var event = new CustomEvent(type, { bubbles:true, cancelable:false });
    event.c1Generated = true;
    e.target.dispatchEvent( event );
  }
  function removePolyfill(e){
    if(!e.c1Generated){ // focus after focusin, so chrome will the first time trigger tow times focusin
      d.removeEventListener('focus' ,addPolyfill ,true);
      d.removeEventListener('blur' ,addPolyfill ,true);
      d.removeEventListener('focusin' ,removePolyfill ,true);
      d.removeEventListener('focusout' ,removePolyfill ,true);
    }
    setTimeout(function(){
      d.removeEventListener('focusin' ,removePolyfill ,true);
      d.removeEventListener('focusout' ,removePolyfill ,true);
    });
  }
}();

/*
Carousel Prototype
Eric Eggert for W3C
https://www.w3.org/WAI/tutorials/carousels/full-code/
*/

var myCarousel = (function() {

  "use strict";

  // Initial variables
  var carousel, slides, index, slidenav, settings, timer, setFocus, animationSuspended;

  // Helper function: Iterates over an array of elements
  function forEachElement(elements, fn) {
    for (var i = 0; i < elements.length; i++)
    fn(elements[i], i);
  }

  // Helper function: Remove Class
  function removeClass(el, className) {
    if (el.classList) {
      el.classList.remove(className);
    } else {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

  // Helper function: Test if element has a specific class
  function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
  }

  // Initialization for the carousel
  // Argument: set = an object of settings
  // Possible settings:
  // id <string> ID of the carousel wrapper element (required).
  // slidenav <bool> If true, a list of slides is shown.
  // animate <bool> If true, the slides can be animated.
  // startAnimated <bool> If true, the animation begins immediately.
  //                      If false, the animation needsto be initiated by clicking the play button.
  function init(set) {

    // Make settings available to all functions
    settings = set;

    // Select the element and the individual slides
    carousel = document.getElementById(settings.id);
    slides = carousel.querySelectorAll('[data-slide-item]');

    carousel.classList.add('active');

    // Create unordered list for controls, and attach click events for previous and next slide
    var ctrls = document.createElement('ul');
    ctrls.className = 'u-list-unstyled carousel__nav controls';
    ctrls.innerHTML = '<li>' +
    '<button type="button" class="btn btn__carousel btn-prev" data-button-previous>' +
        '<span class="u-sr-only visuallyhidden">Go to previous item.</span>' +
        '<svg class="carousel__arrow carousel__arrow--prev" viewBox="0 0 407.437 407.437" role="presentation" aria-hidden="true"><polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815" fill="currentColor"/></svg>' +
        '</button>' +
      '</li>' +
      '<li>' +
        '<button type="button" class="btn btn__carousel btn-next" data-button-next>' +
          '<span class="u-sr-only visuallyhidden">Go to next item.</span>' +
          '<svg class="carousel__arrow carousel__arrow--next" viewBox="0 0 407.437 407.437" role="presentation" aria-hidden="true"><polygon points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815" fill="currentColor"/></svg>' +
        '</button>' +
      '</li>';

    ctrls.querySelector('[data-button-previous]')
      .addEventListener('click', function () {
      prevSlide(true);
    });
    ctrls.querySelector('[data-button-next]')
      .addEventListener('click', function () {
      nextSlide(true);
    });

    carousel.appendChild(ctrls);

    // If the carousel is animated or a slide navigation is requested in the settings, another unordered list that contains those elements is added. (Note that you cannot supress the navigation when it is animated.)
    if (settings.slidenav || settings.animate) {
      //console.log(settings);
      slidenav = document.createElement('ul');

      slidenav.className = 'u-list-inline slidenav';

      if (settings.animate) {
        var li = document.createElement('li');

        if (settings.startAnimated) {
          li.innerHTML = '<button class="btn btn__action" data-action="stop"><span class="u-sr-only visuallyhidden">Stop Animation</span><svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.3 11.3h21.5v21.5H11.3z"/></svg></button>';
        } else {
          li.innerHTML = '<button class="btn btn__action" data-action="start"><span class="u-sr-only visuallyhidden">Start Animation</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><path fill="currentColor" d="M10.6 6.4l25.7 14.3c.1.1.2.2.2.4s-.1.3-.2.4L10.8 37.6c-.1.1-.3.1-.6 0-.2-.1-.3-.3-.3-.4V6.8c0-.2.1-.3.3-.4.1-.1.3-.1.4 0z"/></svg></button>';
        }

        slidenav.appendChild(li);
      }

      if (settings.slidenav) {
        forEachElement(slides, function(el, i){
        var li = document.createElement('li');

        var klass = (i===0) ? 'class="btn current" ' : 'btn ';
        var kurrent = (i===0) ? ' <span class="u-sr-only visuallyhidden">(Current Item)</span>' : '';

        li.innerHTML = '<button '+ klass +'data-slide="' + i + '"><span class="u-sr-only visuallyhidden">News</span> ' + (i+1) + kurrent + '</button>';
        slidenav.appendChild(li);
        });
      }

      slidenav.addEventListener('click', function(event) {
        var button = event.target;

        if (button.localName == 'button') {
          if (button.getAttribute('data-slide')) {
            setSlides(button.getAttribute('data-slide'), true);
          }

          if (button.getAttribute('data-action') == "stop") {
            stopAnimation();
          } else if (button.getAttribute('data-action') == "start") {
            startAnimation();
          }
        }
      }, true);

      carousel.classList.add('has-slidenav');
      carousel.appendChild(slidenav);
    }

    // Add a live region to announce the slide number when using the previous/next buttons
    var liveregion = document.createElement('div');
    liveregion.setAttribute('aria-live', 'polite');
    liveregion.setAttribute('aria-atomic', 'true');
    liveregion.setAttribute('class', 'liveregion u-sr-only visuallyhidden');
    carousel.appendChild(liveregion);

    // After the slide has transitioned, remove the in-transition class. If focus should be set, set the tabindex attribute to -1 to prevent keyboard navigation to this while it is not visible, and focus the slide.
    slides[0].parentNode.addEventListener('transitionend', function (event) {
      var slide = event.target;
      removeClass(slide, 'in-transition');
      if (hasClass(slide, 'current'))  {
        if(setFocus) {
          slide.setAttribute('tabindex', '-1');
          slide.focus();
          setFocus = true;
        }
      }
    });

    // When the mouse enters the carousel, suspend the animation.
    carousel.addEventListener('mouseenter', suspendAnimation);

    // When the mouse leaves the carousel, and the animation is suspended, start the animation.
    carousel.addEventListener('mouseleave', function(event) {
      if (animationSuspended) {
        startAnimation();
      }
    });

    // When the focus enters the carousel, suspend the animation
    carousel.addEventListener('focusin', function(event) {
      if (!hasClass(event.target, 'slide')) {
        suspendAnimation();
      }
    });

    // When the focus leaves the carousel, and the animation is suspended, start the animation
    carousel.addEventListener('focusout', function(event) {
      if (!hasClass(event.target, 'slide') && animationSuspended) {
        startAnimation();
      }
    });

    // Set the index (= current slide) to 0 – the first slide
    index = 0;
    setSlides(index);

    // If the carousel is animated, advance to the
    // next slide after 5s
    if (settings.startAnimated) {
      timer = setTimeout(nextSlide, 5000);
    }
  }

  // Function to set a slide the current slide
  function setSlides(new_current, setFocusHere, transition, announceItemHere) {
    // Focus, transition and announceItem are optional parameters.
    // Focus denotes if the focus should be set after the
    // carousel advanced to slide number new_current.
    // Transition denotes if the transition is going into the
    // next or previous direction.
    // If announceItem is set to true, the live region’s text is changed (and announced)
    // Here defaults are set:
    let announceItem;
    setFocus = typeof setFocusHere !== 'undefined' ? setFocusHere : true;
    transition = typeof transition !== 'undefined' ? transition : 'none';
    announceItem = typeof announceItemHere !== 'undefined' ? announceItemHere : true;

    new_current = parseFloat(new_current);

    var length = slides.length;
    var new_next = new_current+1;
    var new_prev = new_current-1;

    // If the next slide number is equal to the length,
    // the next slide should be the first one of the slides.
    // If the previous slide number is less than 0.
    // the previous slide is the last of the slides.
    if(new_next === length) {
      new_next = 0;
    } else if(new_prev < 0) {
      new_prev = length-1;
    }

    // Reset slide classes
    for (var i = slides.length - 1; i >= 0; i--) {
      slides[i].className = "carousel__slide";
    }

    // Add classes to the previous, next and current slide
    slides[new_next].className = 'next carousel__slide' + ((transition == 'next') ? ' in-transition' : '');
    slides[new_next].setAttribute('aria-hidden', 'true');

    slides[new_prev].className = 'prev carousel__slide' + ((transition == 'prev') ? ' in-transition' : '');
    slides[new_prev].setAttribute('aria-hidden', 'true');

    slides[new_current].className = 'current carousel__slide';
    slides[new_current].removeAttribute('aria-hidden');

    // Update the text in the live region which is then announced by screen readers.
    if (announceItem) {
      carousel.querySelector('.liveregion').textContent = 'Item ' + (new_current + 1) + ' of ' + slides.length;
    }

    // Update the buttons in the slider navigation to match the currently displayed item
    if(settings.slidenav) {
      var buttons = carousel.querySelectorAll('.slidenav button[data-slide]');
      for (var j = buttons.length - 1; j >= 0; j--) {
        buttons[j].className = '';
        buttons[j].innerHTML = '<span class="u-sr-only visuallyhidden">Carousel Item </span> ' + (j+1);
      }
      buttons[new_current].className = "current";
      buttons[new_current].innerHTML = '<span class="u-sr-only visuallyhidden">Carousel Item </span> ' + (new_current+1) + ' <span class="u-sr-only visuallyhidden">(Current Item)</span>';
    }

    // Set the global index to the new current value
    index = new_current;
  }

  // Function to advance to the next slide
  function nextSlide(announceItem) {
    announceItem = typeof announceItem !== 'undefined' ? announceItem : true;

    var length = slides.length,
    new_current = index + 1;

    if(new_current === length) {
      new_current = 0;
    }

    // If we advance to the next slide, the previous needs to be
    // visible to the user, so the third parameter is 'prev', not
    // next.
    setSlides(new_current, false, 'prev', announceItem);

    // If the carousel is animated, advance to the next
    // slide after 5s
    if (settings.animate) {
      timer = setTimeout(nextSlide, 5000);
    }
  }

  // Function to advance to the previous slide
  function prevSlide(announceItem) {
    announceItem = typeof announceItem !== 'undefined' ? announceItem : true;

    var length = slides.length,
    new_current = index - 1;

    // If we are already on the first slide, show the last slide instead.
    if(new_current < 0) {
      new_current = length-1;
    }

    // If we advance to the previous slide, the next needs to be
    // visible to the user, so the third parameter is 'next', not
    // prev.
    setSlides(new_current, false, 'next', announceItem);
  }

  // Function to stop the animation
  function stopAnimation() {
    let _this;
    clearTimeout(timer);
    settings.animate = false;
    animationSuspended = false;
    _this = carousel.querySelector('[data-action]');
    _this.innerHTML = '<span class="u-sr-only visuallyhidden">Start Animation </span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"><path fill="currentColor" d="M10.6 6.4l25.7 14.3c.1.1.2.2.2.4s-.1.3-.2.4L10.8 37.6c-.1.1-.3.1-.6 0-.2-.1-.3-.3-.3-.4V6.8c0-.2.1-.3.3-.4.1-.1.3-.1.4 0z"/></svg>';
    _this.setAttribute('data-action', 'start');
  }

  // Function to start the animation
  function startAnimation() {
    let _this;
    settings.animate = true;
    animationSuspended = false;
    timer = setTimeout(nextSlide, 5000);
    _this = carousel.querySelector('[data-action]');
    _this.innerHTML = '<span class="u-sr-only visuallyhidden">Stop Animation </span><svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.3 11.3h21.5v21.5H11.3z"/></svg>';
    _this.setAttribute('data-action', 'stop');
  }

  // Function to suspend the animation
  function suspendAnimation() {
    if(settings.animate) {
      clearTimeout(timer);
      settings.animate = false;
      animationSuspended = true;
    }
  }

  // Making some functions public
  return {
    init:init,
    next:nextSlide,
    prev:prevSlide,
    goto:setSlides,
    stop:stopAnimation,
    start:startAnimation
  };
});

// check for multiple carousels on a page
var carouselIds = document.querySelectorAll('[data-carousel]');

for (let i = 0; i < carouselIds.length; i++) {
  let id;
  var carousel = new myCarousel();
  id = carouselIds[i].id;
  carousel.init({
    id: id,
    slidenav: true,
    animate: false,
    startAnimated: false,
    announceItem: true,
  });
}
