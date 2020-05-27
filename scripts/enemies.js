var leftOffset = document.getElementById('healthBar').offsetWidth;

var ufo = function (x, id) {
    this.x = x;
    this.y = 10;
    this.height = 100;
    this.width = 100;
	this.id = id;
    this.x = Math.min(this.x, document.getElementById('playField').offsetWidth - this.width);
    
    this.imgHtml = '<img src="img/ufo.png">';
    var imgElement = $(this.imgHtml);
	
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
        prevY += 1;
        var nextY = prevY + "px";
        imgElement[0].style.top = nextY;
		this.y = prevY;
    };
}
var x = Math.floor(Math.random() * document.getElementById('playField').offsetWidth);

var id = 1;


var ufo1 = new ufo(x, id++);
var ufo2 = new ufo(x + 200, id++);
ufo1.drawImg();
ufo2.drawImg();
int1 = setInterval(ufo1.updateCSS, 1005);
int2 = setInterval(ufo2.updateCSS, 1000);

var enemies = new Array();
var intEnemies = new Array();

for (var i = 0; i < 6; i++) {
	x = Math.floor(Math.random() * document.getElementById('playField').offsetWidth);
	enemies.unshift(new ufo(x, id++));
}
for (var i = 0; i < 6; i++) {
	enemies[i].drawImg();
	intEnemies[i] = setInterval(enemies[i].updateCSS, 10);
}