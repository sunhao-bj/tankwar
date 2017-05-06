/**
 * Created by sunhao on 15-5-22.
 */
Crafty.sprite(CONST.ELEMENT_SIZE, "./image/tanks_sheet.png", {
    cLand: [0, 0, 1, 1],
    cTankA1: [1, 0, 1, 1],
    cTankA2: [2, 0, 1, 1],
    cTankA3: [3, 0, 1, 1],
    cTankA4: [4, 0, 1, 1],
    cTankA5: [5, 0, 1, 1],
    cTankA6: [6, 0, 1, 1],
    cTankA7: [7, 0, 1, 1],
    cTankA8: [0, 1, 1, 1],
    cTankB1: [1, 1, 1, 1],
    cTankB2: [2, 1, 1, 1],
    cTankB3: [3, 1, 1, 1],
    cTankB4: [4, 1, 1, 1],
    cTankB5: [5, 1, 1, 1],
    cTankB6: [6, 1, 1, 1],
    cTankB7: [7, 1, 1, 1],
    cTankB8: [0, 2, 1, 1],
    cTankAI1: [1, 1, 1, 1],
    cFire1: [1, 2, 1, 1],
    cFire2: [2, 2, 1, 1],
    cFire3: [3, 2, 1, 1],
    cBullet1: [4, 2, 1, 1],
    cBullet2: [5, 2, 1, 1],
    cHome: [7, 2, 1, 1],
    cWallV: [6, 3, 1, 1],
    cWallH: [7, 3, 1, 1],
    cBrickV: [3, 3, 1, 1],
    cBrickH: [4, 3, 1, 1]
});
Crafty.sprite(CONST.ELEMENT_SIZE * 0.5, "./image/tile.bmp", {
    cBrick: [0, 0, 2, 2],
    cBrickHalfV: [0, 0, 1, 2],
    cBrickHalfH: [0, 0, 2, 1],
    cConcrete: [2, 0, 2, 2],
    cConcreteHalfV: [2, 0, 1, 2],
    cConcreteHalfH: [2, 0, 2, 1],
    cBush: [4, 0, 2, 2],
    cRiverV: [6, 0, 2, 2],
    cRiverH: [8, 0, 2, 2],
    cHome: [10, 0, 2, 2],
    cRuin: [12, 0, 2, 2]
});
Crafty.sprite(8, "./image/gameover.bmp", {
    cGameOver: [0, 0, 31, 20]
});
Crafty.sprite(1, "./image/splash.bmp", {
    cMenu: [0, 0, 376, 222]
});
