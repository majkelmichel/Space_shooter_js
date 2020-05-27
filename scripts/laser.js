var laser = document.getElementById('laser');
var laserPosLeft = getComputedStyle(laser).left;
var laserWidth = parseInt(getComputedStyle(laser).width);
var laserPosLeftValue = parseFloat(laserPosLeft);

var punkty = 0;

var laserMoveLeft = function () {
	laserPosLeftValue -= 5;
	laserPosLeftValue = Math.max(laserPosLeftValue, leftOffset + 54);
	var laserPx = laserPosLeftValue + 'px';
	laser.style.left = laserPx;
};

var laserMoveRight = function () {
	laserPosLeftValue += 5;
	laserPosLeftValue = Math.min(laserPosLeftValue, playFieldWidth - laserWidth - 54);
	var laserPx = laserPosLeftValue + 'px';
	laser.style.left = laserPx;
};


function removeInPlace(array, item) { // Funkcja do usuwania elementy z tablicy
    var foundIndex, fromIndex;

    // Look for the item (the item can have multiple indices)
    fromIndex = array.length - 1;
    foundIndex = array.lastIndexOf(item, fromIndex);

    while (foundIndex !== -1) {
        // Remove the item (in place)
        array.splice(foundIndex, 1);

        // Bookkeeping
        fromIndex = foundIndex - 1;
        foundIndex = array.lastIndexOf(item, fromIndex);
    }

    // Return the modified array
    return array;
};

var laserAnimation = function () {
	laser.style.opacity = "0";
	laser.style.webkitAnimationPlayState = "running";
	for (var i = 0; i < enemies.length; i++) {
		if (enemies[i].x + leftOffset < (laserPosLeftValue + laserWidth) && (enemies[i].x + enemies[i].width + leftOffset) > laserPosLeftValue) {
			var zm = enemies[i];
			console.log("check");
			document.getElementById(zm.id).outerHTML = "";
			punkty += 100;
			document.getElementById('text').innerHTML = punkty;
			removeInPlace(enemies, enemies[i]);
		}
	}
	setTimeout(function () {
		laser.style.webkitAnimationPlayState = "paused";
	}, 199);
};