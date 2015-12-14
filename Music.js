function guaranteedPlay(argument) {
    var music = new Audio("./hoge.mp3");
    music.canplay = function () {
        music.play();
    };
}
