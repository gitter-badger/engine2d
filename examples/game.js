// uses engine2d.ctx.js extension

(function() {
    var scene = new Engine2D.GameScene();
    var ctx = document.getElementById("cnv").getContext("2d");
    var renderer = new scene.Renderer(ctx);
    var keysDown = {};
    var player = new Engine2D.Circle({
        radius: 15,
        id: "player",
        x: 250,
        y: 250
    });
    scene.addObject(player);
    var then = Date.now();
    updateLoop();
    function updateLoop() {
        var now = Date.now();
        var delta = now - then;
        then = now;
        (function(d) {
            if (37 in keysDown) {
                // left
                scene.objects.player.position.x -= 180 * d;
            }
            if (38 in keysDown) {
                // up
                scene.objects.player.position.y -= 180 * d;
            }
            if (39 in keysDown) {
                // right
                scene.objects.player.position.x += 180 * d;
            }
            if (40 in keysDown) {
                // down
                scene.objects.player.position.y += 180 * d;
            }
        })(delta / 1000);
        renderer.clear();
        renderer.renderObject(scene.objects.player);
        window.requestAnimationFrame(updateLoop);
    }
    addEventListener("keydown", function(ev) {
        keysDown[ev.keyCode] = true;
    }, false);
    addEventListener("keyup", function(ev) {
        delete keysDown[ev.keyCode];
    }, false);
})();