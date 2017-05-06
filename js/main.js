/**
 * Created by sunhao on 15-5-21.
 */
var onLoad = function () {
    Crafty.defineScene("menu",SceneMenu);
    Crafty.enterScene("menu");
};
window.addEventListener("load", onLoad, false);