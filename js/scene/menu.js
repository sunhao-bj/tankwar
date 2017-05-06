/**
 * Created by Administrator on 15-5-28.
 */
var playerCount = 1;
var SceneMenu = function () {
    var self = this;
    Crafty.init(CONST.GAME_WIDTH, CONST.GAME_HEIGHT, document.getElementById('game'));
    Crafty.background('#000000');
    self.menu = Crafty.e("Menu, 2D, Canvas, Tween, cMenu").attr({
        x: -376,
        y: CONST.GAME_HEIGHT * 0.5 - 222 * 0.5
    }).setName("Menu");
    self.menu.tween({
        x: CONST.GAME_WIDTH * 0.5 - 376 * 0.5
    }, 2000);
    self.menu.bind("TweenEnd", function () {
        self.select = Crafty.e("Select, 2D, Canvas, Color").attr({
            x: self.menu.x + 100,
            y: self.menu.y + 182,
            w: 8,
            h: 6
        }).color('rgb(255,255,255)');
    });

    self.playerCount = 1;
    self.menu.bind("KeyDown", function (e) {
        switch (e.key) {
            case Crafty.keys.UP_ARROW:
                self.select.attr({
                    y: self.menu.y + 182
                });
                playerCount = 1;
                break;
            case Crafty.keys.DOWN_ARROW :
                self.select.attr({
                    y: self.menu.y + 213
                });
                playerCount = 2;
                break;
            case Crafty.keys.ENTER:
                Crafty.defineScene("game", SceneGame);
                Crafty.enterScene("game");
                break;
        }
    });

};
