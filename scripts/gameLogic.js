function levelOne() {
	var enemyCount = 0;
	var intervalOne = setInterval(function () {
		spawnEnemies(50);
		enemyCount++;
	}, 1000);
	if (enemyCount >= 50) {
		clearInterval(intervalOne);
	};
}