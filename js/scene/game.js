/**
 * Created by sunhao on 15-5-22.
 */
var group1 = 0;
var group2 = 0;
var mapNo = 1;
var SceneGame = function () {
    var self = this;

    Crafty.init(CONST.GAME_WIDTH, CONST.GAME_HEIGHT, document.getElementById('game'));
    Crafty.background('#000000');

    var map = new Map(mapNo);
    var tankA = new Tank('A', CONST.TANK_A.x, CONST.TANK_A.y);
    group1++;
    if (playerCount == 2) {
        var tankB = new Tank('B', CONST.TANK_B.x, CONST.TANK_B.y);
        group1++;
    }

    for (var i = 0; i < 5; i++) {
        var rand = Crafty.math.randomInt(CONST.ELEMENT_SIZE, 13 * CONST.ELEMENT_SIZE);
        new Tank('AI', rand, CONST.ELEMENT_SIZE);
        group2++;
    }
};