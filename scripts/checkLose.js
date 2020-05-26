var losingArea = document.getElementById("playField");
var height = losingArea.offsetHeight;

var currentY = parseInt(getComputedStyle(document.getElementById("1")).top); // Aktualna pozycja ufo

var intervalY = setInterval(function () {
	currentY = parseInt(getComputedStyle(document.getElementById("1")).top);
}, 50); // Stale zmniana wartości currentY

var intervalCheck = setInterval(function () {
	if (height - 100 < currentY) {
		console.log("yeet");
		document.getElementById(ufo1.id).outerHTML = "";
		clearInterval(intervalY);
		clearInterval(intervalCheck);
	}
}, 50);