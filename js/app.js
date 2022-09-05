
/* PARALLAX */
function init_parallax() {

  var s;

  // Find all the scenes and all the layers that belong to the scene
  //
  var scenes = document.getElementsByClassName("parallax_outer");
  for(s=0;s<scenes.length;s++){

    scenes[s].my_layers = scenes[s].getElementsByClassName('parallax_layer');
    scenes[s].my_init_rect = scenes[s].getBoundingClientRect();
    scenes[s].initPageYOffet = window.pageYOffset;
  }


  window.addEventListener('scroll', function(event){

    var scene, i, layer, speed, x_pos, y_pos, z_pos;

    var top = this.pageYOffset;

    for(s=0; s< scenes.length; s++){

      scene = scenes[s];

      var rect = scene.getBoundingClientRect();



      if( scene_is_in_viewport( scene ) ){

        var view_portal_height = window.innerHeight;
        var scene_height = rect.height;
        var max_offset = scene_height * 100 / 100;

        var start_y = scene.my_init_rect.y + scene.initPageYOffet > view_portal_height ? view_portal_height : scene.my_init_rect.y + scene.initPageYOffet;

        var top = max_offset*(start_y - rect.y) / (start_y + scene_height);

        for (i = 0; i < scene.my_layers.length; i++) {

          layer = scene.my_layers[i];
          
          speed = layer.getAttribute('data-speed');
          
          x_pos = -(top * i*2 / 100);
          y_pos = -(top * speed / 100);
          z_pos = 0;
          
          layer.setAttribute('style', 'transform: translate3d(' + x_pos + 'px, ' + y_pos + 'px, ' + z_pos + 'px)');
        }
      }
    }
  });
}

function scene_is_in_viewport (scene) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && scene instanceof jQuery) {
        scene = scene[0];
    }

    var rect = scene.getBoundingClientRect();

    return (rect.bottom >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth));
}

init_parallax();
