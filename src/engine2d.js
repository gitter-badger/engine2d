/**
 * Engine2D game engine.
 */

/**
 * Engine2D namespace
 */
var Engine2D = {
    TYPE: {
        RECT: 1,
        CIRCLE: 2
    },
    /**
     * Engine2D game scene constructor.
     */
    GameScene: function() {
        var self = this;
        self.objects = {};
        self.addObject = function(gameObject) {
            var pass;
            for (var i in Engine2D.TYPE) {
                if (gameObject.type == Engine2D.TYPE[i]) pass = true;
            }
            if (!!pass)
                self.objects[gameObject.id] = gameObject;
            else
                throw new TypeError("\"" + gameObject.type + "\" is not a valid Engine2D game object type.");
        };
    },
    /**
     * Engine2D rectangle constructor.
     */
    Rect: function(options) {
        var self = this;
        self.id = options.id || Engine2D.randomID();
        self.type = Engine2D.TYPE.RECT;
        self.size = {}, self.position = {};
        self.size.width = options.width || 0;
        self.size.height = options.height || 0;
        self.position.x = options.x || 0;
        self.position.y = options.y || 0;
    },
    /**
     * Engine2D circle constructor.
     */
    Circle: function(options) {
        var self = this;
        self.id = options.id || Engine2D.randomID();
        self.type = Engine2D.TYPE.CIRCLE;
        self.size = {}, self.position = {};
        self.size.radius = options.radius || 0;
        self.position.x = options.x || 0;
        self.position.y = options.y || 0;
    },
    /**
     * Used to generate random object IDs for Engine2D game objects.
     */
    randomID: function() {
        var opts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", out = "";
        var i = 0;
        while (i < 5) {
            i++;
            out += opts[Math.floor(Math.random() * opts.length)];
        }
        return out;
    }
};