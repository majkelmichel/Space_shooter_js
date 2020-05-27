var laser = document.getElementById('laser');
var laserPosLeft = getComputedStyle(laser).left;
var laserWidth = parseInt(getComputedStyle(laser).width);
var laserPosLeftValue = parseFloat(laserPosLeft);

var laserActive = false;

var laserAnimation = function () {
	laser.style.opacity = "0";
	laser.style.webkitAnimationPlayState = "running";
	laserActive = true;
	checkAccuracy();
	if (checkAccuracy()) {
		console.log("check");
		setTimeout(function () {
			document.getElementById(ufo2.id).outerHTML = "";
		}, 200);
	}
	setTimeout(function () {
		laser.style.webkitAnimationPlayState = "paused";
		laserActive = false;
	}, 400);
};

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

var checkAccuracy = function () {
	if (ufo2.x + leftOffset < (laserPosLeftValue + laserWidth) && (ufo2.x + ufo2.width + leftOffset) > laserPosLeftValue) {
		console.log("hit");
	}
	return (ufo2.x + leftOffset < (laserPosLeftValue + laserWidth) && (ufo2.x + ufo2.width + leftOffset) > laserPosLeftValue);
};