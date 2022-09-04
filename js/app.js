
/* PARALLAX */
function initParallax() {

  var opThresh = 350;
  var opFactor = 750;

  window.addEventListener("scroll", function(event){

    var el = document.getElementById('parallax1');

    if(isElementInViewport(el)){
      var top = this.pageYOffset;

      var layers = document.getElementsByClassName("parallax_layer");
      var layer, speed, yPos;
      for (var i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        var xPos = -(top * i*2 / 100);
        var yPos = -(top * speed / 100);
        var zPos = 0;
        layer.setAttribute('style', 'transform: translate3d(' + xPos + 'px, ' + yPos + 'px, ' + zPos + 'px)');
      }
    }
  });
}

function isElementInViewport (el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth));
}

initParallax();
