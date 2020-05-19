const pageWidth = $(window).width();

var ship = function () {
    this.height = 179;
    this.width = 144;
    this.healthPoints = 100;
    this.htmlObj = document.getElementById("player");
    const element = document.querySelector('#player');
    const style = getComputedStyle(element);
    this.left = parseInt(style.left);
    this.moveLeft = function () {
        this.left -= 5;
        this.left = Math.max(this.left, 0);
        var l = this.left.toString();
        l += "px";
        this.htmlObj.style.left = l;
    }
    this.moveRight = function () {
        this.left += 5;
        this.left = Math.min(this.left, pageWidth - this.width);
        var r = this.left.toString();
        r += "px";
        this.htmlObj.style.left = r;
    }
}



var player = new ship();

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    
    if (e.keyCode == '37') {
        player.moveLeft();
    }
    else if (e.keyCode == '39') {
        player.moveRight();
    }
}