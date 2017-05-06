/**
 * Created by sunhao on 15-5-22.
 */
var Tank = function (no, x, y) {
    var self = this;

    self.no = no;
    var group;
    if (no != 'AI') {
        group = 'Group1';
    } else {
        group = 'Group2';
    }
    self.tank = Crafty.e("Tank, 2D, Canvas, Tween, SpriteAnimation, Multiway, Collision, cTank" + self.no + 1).attr({
        x: x,
        y: y,
        w: CONST.ELEMENT_SIZE,
        h: CONST.ELEMENT_SIZE,
        group: group
    }).setName("Tank");
    self.tank.collision([2, 1], [2, 31], [30, 31], [30, 1]);
    self.direction = CONST.UP;
    //Animation
    self.initAnimation();
    //Keyboard
    if (no != 'AI') {
        self.registerKeyboard();
    } else {
        self.autoAction();
    }

    //Collision
    self.registerCollision();
};

Tank.prototype.initAnimation = function () {
    var self = this;

    self.tank.origin("middle");
    if ('A' == self.no) {
        self.tank.reel('TankRunning', 1000, [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 0],
            [6, 0],
            [7, 0],
            [0, 1],
            [1, 0]
        ]);
    } else if ('B' == self.no) {
        self.tank.reel('TankRunning', 1000, [
            [1, 1],
            [2, 1],
            [3, 1],
            [4, 1],
            [5, 1],
            [6, 1],
            [7, 1],
            [0, 2],
            [1, 1]
        ]);
    } else if ('AI' == self.no) {
        self.tank.reel('TankRunning', 1000, [
            [1, 1],
            [2, 1],
            [3, 1],
            [4, 1],
            [5, 1],
            [6, 1],
            [7, 1],
            [0, 2],
            [1, 1]
        ]);
    }
    self.tank.reel('TankDestroy', 250, [
        [1, 2],
        [2, 2],
        [3, 2]
    ]);
    self.tank.uniqueBind('AnimationEnd', function (reel) {
        if (reel.id == 'TankDestroy') {
            self.tank.destroy();
            if (self.tank.attr("group") == 'Group1') {
                group1--;
            }
            if (self.tank.attr("group") == 'Group2') {
                group2--;
            }
            if (group1 <= 0) {
                var gameOver = Crafty.e("GameOver, 2D, Canvas, Tween, cGameOver").attr({
                    x: CONST.GAME_WIDTH * 0.5 - 124,
                    y: CONST.GAME_HEIGHT + 20,
                    z: 20
                }).setName("GameOver");
                gameOver.tween({y: CONST.GAME_HEIGHT * 0.5 - 80}, 2000);

                Crafty.e("Delay").delay(function () {
                    Crafty.enterScene("menu");
                }, 5000, 0);
            }
            if (group2 <= 0) {
                mapNo++;
                if (!dMap[mapNo]) {
                    playerCount = 1;

                    Crafty.e("Delay").delay(function () {
                        Crafty.enterScene("menu");
                    }, 5000, 0);
                } else {
                    group1 = 0;
                    group2 = 0;
                    Crafty.e("Delay").delay(function () {
                        Crafty.enterScene("game");
                    }, 1000, 0);
                }
            }
        }
    });
};
Tank.prototype.changeDirection = function (direction) {
    var self = this;

    switch (direction) {
        case CONST.UP:
            self.tank.attr({rotation: 0});
            break;
        case CONST.DOWN:
            self.tank.attr({rotation: 180});
            break;
        case CONST.LEFT:
            self.tank.attr({rotation: -90});
            break;
        case CONST.RIGHT:
            self.tank.attr({rotation: 90});
            break;
    }
    self.tank.enableControl();
    self.direction = direction;

    if (!self.tank.isPlaying('TankRunning')) {
        self.tank.animate('TankRunning', -1);
    }
    self.tank.resumeAnimation();
};
Tank.prototype.registerKeyboard = function () {
    var self = this;

    if ('A' == self.no) {
        self.tank.multiway(1, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180});
    } else if ('B' == self.no) {
        self.tank.multiway(1, {W: -90, S: 90, D: 0, A: 180});
    }


    self.tank.bind('KeyDown', function (e) {
        if ('A' == self.no) {
            if (e.key != Crafty.keys.LEFT_ARROW && e.key != Crafty.keys.RIGHT_ARROW &&
                e.key != Crafty.keys.UP_ARROW && e.key != Crafty.keys.DOWN_ARROW &&
                e.key != Crafty.keys.SPACE) {
                return;
            }
        }
        if ('B' == self.no) {
            if (e.key != Crafty.keys.A && e.key != Crafty.keys.D &&
                e.key != Crafty.keys.W && e.key != Crafty.keys.S &&
                e.key != Crafty.keys.ENTER) {
                return;
            }
        }
        switch (e.key) {
            case Crafty.keys.UP_ARROW:
                self.changeDirection(CONST.UP);
                break;
            case Crafty.keys.W:
                self.changeDirection(CONST.UP);
                break;
            case Crafty.keys.DOWN_ARROW:
                self.changeDirection(CONST.DOWN);
                break;
            case Crafty.keys.S:
                self.changeDirection(CONST.DOWN);
                break;
            case Crafty.keys.LEFT_ARROW:
                self.changeDirection(CONST.LEFT);
                break;
            case Crafty.keys.A:
                self.changeDirection(CONST.LEFT);
                break;
            case Crafty.keys.RIGHT_ARROW:
                self.changeDirection(CONST.RIGHT);
                break;
            case Crafty.keys.D:
                self.changeDirection(CONST.RIGHT);
                break;
            case Crafty.keys.SPACE:
            case Crafty.keys.ENTER:
                self.fire();
                break;
        }
    });
    self.tank.bind('KeyUp', function (e) {
        if ('A' == self.no) {
            if (e.key != Crafty.keys.LEFT_ARROW && e.key != Crafty.keys.RIGHT_ARROW &&
                e.key != Crafty.keys.UP_ARROW && e.key != Crafty.keys.DOWN_ARROW) {
                return;
            }
        }
        if ('B' == self.no) {
            if (e.key != Crafty.keys.A && e.key != Crafty.keys.D &&
                e.key != Crafty.keys.W && e.key != Crafty.keys.S) {
                return;
            }
        }

        self.tank.pauseAnimation();
    });
};
Tank.prototype.registerCollision = function () {
    var self = this;

    var onHit = function (hitData) {
        self.tank.disableControl();
        var dx = 0;
        var dy = 0;
        var hasTank = false;
        for (var i in hitData) {
            var normal = hitData[i].normal;
            if (dx == 0) {
                dx = normal.x;
            }
            if (dy == 0) {
                dy = normal.y;
            }
            if (hitData[i].obj.has('Tank')) {
                hasTank = true;
            }

        }
        self.tank.x += dx;
        self.tank.y += dy;
        if (self.no == 'AI' && !hasTank) {
            var directions = [CONST.UP, CONST.DOWN, CONST.LEFT, CONST.RIGHT];
            var randDirection = Crafty.math.randomElementOfArray(directions);
            self.changeDirection(randDirection);
        }
        self.tank.resetHitChecks('Brick, Wall, Tank, Home, Concrete, River').ignoreHits('Bush');
    };

    self.tank.uniqueBind('HitOn', onHit);
    self.tank.checkHits('Brick, Wall, Tank, Home, Concrete, River').ignoreHits('Bush');
};
Tank.prototype.fire = function () {
    var self = this;
    var bulletName = "cBullet2";
    var x = self.tank.x;
    var y = self.tank.y;
    var targetX = self.tank.x;
    var targetY = self.tank.y;
    var rotation;
    if (self.direction == CONST.UP) {
        y = y - CONST.ELEMENT_SIZE * 0.6;
        targetY = -1000;
        rotation = 0;
    } else if (self.direction == CONST.DOWN) {
        y = y + CONST.ELEMENT_SIZE * 0.6;
        targetY = 1000;
        rotation = 180;
    } else if (self.direction == CONST.LEFT) {
        x = x - CONST.ELEMENT_SIZE * 0.6;
        targetX = -1000;
        rotation = -90;
    } else if (self.direction == CONST.RIGHT) {
        x = x + CONST.ELEMENT_SIZE * 0.6;
        targetX = 1000;
        rotation = 90;
    }

    var bullet = Crafty.e("Bullet, 2D, Canvas, Tween, Collision, " + bulletName).attr({
        x: x,
        y: y,
        w: CONST.ELEMENT_SIZE,
        h: CONST.ELEMENT_SIZE
    }).setName("Bullet");
    bullet.collision([12, 12], [12, 20], [20, 20], [20, 12]);

    bullet.origin("middle");
    bullet.tween({
        x: targetX,
        y: targetY
    }, 4000);
    bullet.tween({
        rotation: rotation
    }, 0);

    var onHit = function (hitData) {
        if (!hitData) {
            return;
        }
        for (var i in hitData) {
            var obj = hitData[i].obj;
            if (!!obj.has("Tank") && obj != self.tank) {
                if (obj.attr('group') != self.tank.attr('group')) {
                    obj.removeComponent("Tank");
                    obj.attr({'die': true});
                    obj.multiway(1,{});
                    obj.disableControl();
                    obj.animate('TankDestroy', 1);
                    self.tank.enableControl();
                }
                bullet.destroy();
            } else if (!!obj.has("Home")) {
                obj.animate('HomeDestroy', 1);
                self.tank.enableControl();
                bullet.destroy();
            } else if (!!obj.has("Brick") || !!obj.has('Bullet')) {
                obj.destroy();
                bullet.destroy();
                self.tank.enableControl();
            } else {
                bullet.destroy();
            }
        }

    };
    bullet.uniqueBind('HitOn', onHit);
    bullet.checkHits('Brick, Tank, Wall, Home, Concrete').ignoreHits('Bush, River');
};
Tank.prototype.autoAction = function () {
    var self = this;

    self.tank.bind('EnterFrame', function () {
        if (!!self.tank.attr('die')) {
            return;
        }
        var randChangeDirection = Crafty.math.randomInt(1, 1000);
        if (randChangeDirection < 10) {
            var directions = [CONST.UP, CONST.DOWN, CONST.LEFT, CONST.RIGHT];
            var randDirection = Crafty.math.randomElementOfArray(directions);
            self.changeDirection(randDirection);
        }
        switch (self.direction) {
            case CONST.UP:
                self.tank.attr({y: this.y - 1});
                break;
            case CONST.DOWN:
                self.tank.attr({y: this.y + 1});
                break;
            case CONST.LEFT:
                self.tank.attr({x: this.x - 1});
                break;
            case CONST.RIGHT:
                self.tank.attr({x: this.x + 1});
                break;
        }
        var randFire = Crafty.math.randomInt(1, 500);
        if (randFire < 5) {
            self.fire();
        }
    });
};