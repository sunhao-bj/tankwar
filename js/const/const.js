"use strict";
/**
 * Created by sunhao on 15-5-22.
 */
var CONST = {};

CONST.ELEMENT_SIZE = 32;
CONST.GAME_WIDTH = 15 * CONST.ELEMENT_SIZE;
CONST.GAME_HEIGHT = 11 * CONST.ELEMENT_SIZE;
CONST.TANK_A = {
    x: 5.5 * CONST.ELEMENT_SIZE,
    y: 9 * CONST.ELEMENT_SIZE
};
CONST.TANK_B = {
    x: 8.5 * CONST.ELEMENT_SIZE,
    y: 9 * CONST.ELEMENT_SIZE
};
CONST.TANK_AI = {
    x: CONST.ELEMENT_SIZE,
    y: CONST.ELEMENT_SIZE
};
CONST.MAP = {
    BRICK: 1,
    WALL: 2,
    BUSH:3,
    RIVER_V: 4,
    RIVER_H: 5,
    CONCRETE: 6,
    HOME: 7,
    RUIN: 8
};
CONST.UP = 1;
CONST.DOWN = 2;
CONST.LEFT = 3;
CONST.RIGHT = 4;