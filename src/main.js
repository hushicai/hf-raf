/**
 * @file requestAnimationFrame
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var raf = window.requestAnimationFrame
            || window.webkitRequestAnimationFrame
            || window.mozRequestAnimationFrame
            || window.msRequestAnimationFrame;

        if (!raf) {
            var lastTime = 0;
            raf = function (fn) {
                var currentTime = +new Date();
                var timeToCall = Math.max(0, 1000 / 60 - (currentTime - lastTime));
                var id = setTimeout(function () {
                    fn(currentTime + timeToCall);
                }, timeToCall);
                lastTime = currentTime + timeToCall;
                return id;
            };
        }

        return raf;
    }
);
