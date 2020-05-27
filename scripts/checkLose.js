var losingArea = document.getElementById("playField");
var height = losingArea.offsetHeight;

var intervalCheck = setInterval(function () {
	for (var i = 0; i < enemies.length; i++) {
		currentY = parseInt(getComputedStyle(document.getElementById(enemies[i].id)).top);
		if (height - 100 < currentY) {
			console.log("yeet");
			document.getElementById(enemies[i].id).outerHTML = "";
			removeInPlace(enemies, enemies[i]);
		};
	};
}, 50);