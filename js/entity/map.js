/**
 * Created by sunhao on 2015/5/23.
 */
var Map = function (no) {
    var self = this;

    self.drawMap(no);
};
Map.prototype.drawMap = function (no) {
    var self = this;

    var data = dMap[no];

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            switch (data[i][j]) {
                case CONST.MAP.BRICK :
                    Crafty.e("Brick, 2D, Canvas, Collision, cBrick").attr({
                        x: j * CONST.ELEMENT_SIZE,
                        y: i * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE,
                        h: CONST.ELEMENT_SIZE
                    }).setName("Brick");
                    break;
                case CONST.MAP.WALL :
                    Crafty.e("Wall, 2D, Canvas, Collision, cBrick").attr({
                        x: j * CONST.ELEMENT_SIZE,
                        y: i * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE,
                        h: CONST.ELEMENT_SIZE
                    }).setName("Wall");
                    break;
                case CONST.MAP.RIVER_V :
                    Crafty.e("River, 2D, Canvas, Collision, cRiverV").attr({
                        x: j * CONST.ELEMENT_SIZE,
                        y: i * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE,
                        h: CONST.ELEMENT_SIZE
                    }).setName("River");
                    break;
                case CONST.MAP.RIVER_H :
                    Crafty.e("River, 2D, Canvas, Collision, cRiverH").attr({
                        x: j * CONST.ELEMENT_SIZE,
                        y: i * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE,
                        h: CONST.ELEMENT_SIZE
                    }).setName("River");
                    break;
                case CONST.MAP.HOME :
                    var home = Crafty.e("Home, 2D, Canvas, SpriteAnimation, Collision, cHome").attr({
                        x: j * CONST.ELEMENT_SIZE,
                        y: i * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE,
                        h: CONST.ELEMENT_SIZE
                    }).setName("Home")
                        .reel('HomeDestroy', 250, [
                            [12, 0]
                        ]);
                    home.one('AnimationEnd', function (reel) {
                        if (reel.id == 'HomeDestroy') {
                            var gameOver = Crafty.e("GameOver, 2D, Canvas, Tween, cGameOver").attr({
                                x: CONST.GAME_WIDTH * 0.5 - 124,
                                y: CONST.GAME_HEIGHT +20,
                                z: 20
                            }).setName("GameOver");
                            gameOver.tween({y:CONST.GAME_HEIGHT * 0.5 - 80}, 2000);

                            Crafty.e("Delay").delay(function() {
                                Crafty.enterScene("menu");
                            }, 5000, 0);
                        }
                    });
                    Crafty.e("Brick, 2D, Canvas, Collision, cBrickHalfV").attr({
                        x: (j - 0.5) * CONST.ELEMENT_SIZE,
                        y: i * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE * 0.5,
                        h: CONST.ELEMENT_SIZE
                    }).setName("Brick");
                    Crafty.e("Brick, 2D, Canvas, Collision, cBrickHalfV").attr({
                        x: (j + 1) * CONST.ELEMENT_SIZE,
                        y: i * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE * 0.5,
                        h: CONST.ELEMENT_SIZE
                    }).setName("Brick");
                    Crafty.e("Brick, 2D, Canvas, Collision, cBrickHalfH").attr({
                        x: (j - 0.5) * CONST.ELEMENT_SIZE,
                        y: (i - 0.5) * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE,
                        h: CONST.ELEMENT_SIZE * 0.5
                    }).setName("Brick");
                    Crafty.e("Brick, 2D, Canvas, Collision, cBrickHalfH").attr({
                        x: (j + 0.5) * CONST.ELEMENT_SIZE,
                        y: (i - 0.5) * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE,
                        h: CONST.ELEMENT_SIZE * 0.5
                    }).setName("Brick");
                    break;
                case CONST.MAP.BUSH :
                    Crafty.e("Bush, 2D, Canvas, cBush").attr({
                        x: j * CONST.ELEMENT_SIZE,
                        y: i * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE,
                        h: CONST.ELEMENT_SIZE,
                        z: 10
                    }).setName("Bush");
                    break;
                case CONST.MAP.CONCRETE :
                    Crafty.e("Concrete, 2D, Canvas, Collision, cConcrete").attr({
                        x: j * CONST.ELEMENT_SIZE,
                        y: i * CONST.ELEMENT_SIZE,
                        w: CONST.ELEMENT_SIZE,
                        h: CONST.ELEMENT_SIZE
                    }).setName("Concrete");
                    break;
            }
        }
    }

};