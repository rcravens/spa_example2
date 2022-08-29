$(document).ready(function () {
  $('[data-paroller-factor]').paroller();
});

/* WAVES */

var App;

function initPixi() {
  var image = new PIXI.Sprite.from("img/waves.jpg");
  displacementSprite = new PIXI.Sprite.from("img/cloud.jpg");
  var canvas = document.getElementById("waves");

  width = window.innerWidth;
  height = width * .6333;
  app = new PIXI.Application({ width: width, height: height, autoPreventDefault: false });

  canvas.height = height;
  canvas.appendChild(app.view);

  image.width = width;
  image.height = height;
  app.stage.addChild(image);

  displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  app.stage.addChild(displacementSprite);
  app.stage.filters = [displacementFilter];

  app.renderer.view.style.transform = 'scale(1)';
  app.renderer.view.style.touchAction = 'auto';
  app.renderer.plugins.interaction.autoPreventDefault = false
  displacementSprite.scale.x = 4;
  displacementSprite.scale.y = 3;
  animate();
}
function animate() {
  displacementSprite.x += 4;
  displacementSprite.y += 6;
  requestAnimationFrame(animate);
}
initPixi();
