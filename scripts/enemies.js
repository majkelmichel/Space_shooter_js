var leftOffset = document.getElementById('healthBar').offsetWidth;

var ufo = function (x, id) {
    this.x = x;
    this.y = 10;
    this.height = 100;
    this.width = 100;
    this.x = Math.min(this.x, document.getElementById('playField').offsetWidth - this.width);
    
    var imgHtml = '<img src="img/ufo.png">';
    var imgElement = $(imgHtml);
	
	imgElement.attr("id", id);
	
    this.drawImg = function () {
        imgElement.css({
            position: "absolute",
            left: this.x + leftOffset,
            top: this.y
        });
        $("body").append(imgElement);
    };
    
    this.updateCSS = function () {
        var prevY = imgElement[0].style.top;
        prevY = parseInt(prevY);
        prevY += 3;
        var nextY = prevY + "px";
        imgElement[0].style.top = nextY;
    };
}
var x = Math.floor(Math.random() * document.getElementById('playField').offsetWidth);

var id = 1;

//ufo.prototype.randomMove = function () {
//    var randX = Math.floor(Math.random() * document.getElementById('playField').offsetWidth);
//    var distance = this.x - randX;
//    return distance;
//};


var ufo1 = new ufo(x, id++);
var ufo2 = new ufo(x + 200, id++);
ufo1.drawImg();
ufo2.drawImg();
int1 = setInterval(ufo1.updateCSS, 100);
int2 = setInterval(ufo2.updateCSS, 100);