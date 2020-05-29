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
	
    this.drawImg = function () {
        imgElement.css({
            position: "absolute",
            left: this.x + leftOffset,
            top: this.y
        });
        $("body").append(imgElement);
		imgElement.attr("id", id);
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
//var x = Math.floor(Math.random() * document.getElementById('playField').offsetWidth);

var id = 1;
var enemiesLenght = 0;

var enemies = new Array();
var intEnemies = new Array();

function spawnEnemies(speed) {
	var x = Math.floor(Math.random() * document.getElementById('playField').offsetWidth);
	enemies.unshift(new ufo(x, id++));
	enemies[0].drawImg();
	intEnemies[enemiesLenght++] = (setInterval(enemies[0].updateCSS, speed));
};