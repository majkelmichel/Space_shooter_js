function levelOne() {
	var enemyCount = 0;
	var intervalOne = setInterval(function () {
		spawnEnemies(80);
		enemyCount++;
	}, 1000);
	if (enemyCount >= 15) {
		clearInterval(intervalOne);
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
		health = 100;
	};
};

function levelSix() {
	var enemyCount = 0;
	var intervalOne = setInterval(function () {
		spawnEnemies(30);
		enemyCount++;
	}, 800);
	if (enemyCount >= 150) {
		clearInterval(intervalSix);
		health = 100;
	};
};