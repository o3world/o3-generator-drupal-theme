import './_video.scss';

// Polyfills
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// Self invoking function to setup API script in the DOM
(function() {
  const apiRef = document.createElement('script');
  const firstScript = document.getElementsByTagName('script')[0];

  apiRef.src = "//www.youtube.com/player_api";
  firstScript.parentNode.insertBefore(apiRef, firstScript);
})();

window.onYouTubePlayerAPIReady = function() {
  const videos = document.querySelectorAll('[data-video-inline]');
  const apiVideos = [];

  videos.forEach((video, i) => {

    // assign all iframes on the page to a cooresponding YT Player object
    apiVideos.push(new YT.Player(videos[i].querySelectorAll('iframe')[0]));

    // click event to insert and play youtube video
    videos[i].addEventListener('click', function() {

      if (!this.classList.contains('video--active')) {

        this.classList.add('video--active');

        apiVideos[i].playVideo();
      }
    });

    // manually set controls for space bar
    // this is neccesary because Youtube keyboard controls are unavailable until
    // after manual click on iframe (as opposed to current button)
    videos[i].addEventListener('keypress', function(e) {

        if (e.keyCode === 32) {
          if (apiVideos[i].getPlayerState() == 1) {
            apiVideos[i].pauseVideo();
          } else {
            apiVideos[i].playVideo();
          }
        }
      });
  });
};
