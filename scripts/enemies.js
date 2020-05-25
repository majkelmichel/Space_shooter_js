var leftOffset = document.getElementById('healthBar').offsetWidth;

var ufo = function (x) {
    this.x = x;
    this.y = 10;
    this.height = 100;
    this.width = 100;
    
    this.x = Math.min(this.x, document.getElementById('playField').offsetWidth - this.width);
}
var x = Math.floor(Math.random() * document.getElementById('playField').offsetWidth);

ufo.prototype.drawImg = function () {
    var imgHtml = '<img src="img/ufo.png">';
    this.imgElement = $(imgHtml);
    
    this.imgElement.css({
        position: "absolute",
        left: this.x + leftOffset,
        top: this.y
    });
    $("body").append(this.imgElement);
};

ufo.prototype.updateCSS = function (y) {
    this.imgElement.css({
        position: "absolute",
        left: this.x + leftOffset,
        top: y
    });
}

ufo.prototype.moveDown = function () {
    var y = this.y - 10;
    return y;
}
//
//ufo.prototype.randomMove = function () {
//    var randX = Math.floor(Math.random() * document.getElementById('playField').offsetWidth);
//    var distance = this.x - randX;
//    return distance;
//};


var ufo1 = new ufo(x);
ufo1.drawImg();
int1 = setInterval(ufo1.updateCSS(ufo1.moveDown), 100);