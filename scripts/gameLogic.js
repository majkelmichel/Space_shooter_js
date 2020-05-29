function levelOne() {
	var enemyCount = 0;
	var intervalOne = setInterval(function () {
		spawnEnemies(80);
		enemyCount++;
	}, 1000);
	if (enemyCount >= 15) {
		clearInterval(intervalOne);
		alert("Level Complete!");
		health = 100;
	};
};

function levelTwo() {
	var enemyCount = 0;
	var intervalOne = setInterval(function () {
		spawnEnemies(70);
		enemyCount++;
	}, 800);
	if (enemyCount >= 30) {
		clearInterval(intervalTwo);
		alert("Level Complete!");
		health = 100;
	};
};

function levelThree() {
	var enemyCount = 0;
	var intervalThree = setInterval(function () {
		spawnEnemies(60);
		enemyCount++;
	}, 800);
	if (enemyCount >= 30) {
		clearInterval(intervalThree);
		alert("Level Complete!");
		health = 100;
	};
};

function levelFour() {
	var enemyCount = 0;
	var intervalFour = setInterval(function () {
		spawnEnemies(70);
		enemyCount++;
	}, 800);
	if (enemyCount >= 50) {
		clearInterval(intervalFour);
		alert("Level Complete!");
		health = 100;
	};
};

function levelFive() {
	var enemyCount = 0;
	var intervalFive = setInterval(function () {
		spawnEnemies(60);
		enemyCount++;
	}, 800);
	if (enemyCount >= 100) {
		clearInterval(intervalFive);
		alert("Level Complete!");
		health = 100;
	};
};

function levelSix() {
	var enemyCount = 0;
	var intervalSix = setInterval(function () {
		spawnEnemies(30);
		enemyCount++;
	}, 800);
	if (enemyCount >= 150) {
		clearInterval(intervalSix);
		alert("Level Complete!");
		health = 100;
	};
};