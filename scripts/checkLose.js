var losingArea = document.getElementById("playField");
var height = losingArea.offsetHeight;

var currentY = parseInt(getComputedStyle(document.getElementById("1")).top); // Aktualna pozycja ufo

var intervalY = setInterval(function () {
	currentY = parseInt(getComputedStyle(document.getElementById("1")).top);
}, 50); // Stałe zmniana wartości currentY

while (height - 100 < currentY) {
	console.log("yeeeeeet");
};