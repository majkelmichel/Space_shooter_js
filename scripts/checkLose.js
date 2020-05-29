var losingArea = document.getElementById("playField");
var height = losingArea.offsetHeight;

var health = 100;
var healthHtml = document.getElementById('healthBar');


var intervalCheck = setInterval(function () {
	for (var i = 0; i < enemies.length; i++) {
		var currentY = parseInt(getComputedStyle(document.getElementById(enemies[i].id)).top);
		if (height - 100 < currentY) {
//			console.log("yeet");
			document.getElementById(enemies[i].id).outerHTML = "";
			removeInPlace(enemies, enemies[i]);
			health -= 10;
			healthHtml.innerHTML = health;
		};
	};
}, 50);

var checkHealth = setInterval(function () {
	if (health <= 0) {
		alert("Game Over!");
		location.reload();
	}
}, 50);