var playerSpeed = 2000;
var NPCSpeed = 2000;
var playerTime = 0;
var NPCTime = 0;

var playerMaxHealth = 10;
var playerCurrentHealth = playerMaxHealth;
var playerAttack = 1;

var NPCMaxHealth = 10;
var NPCCurrentHealth = NPCMaxHealth;
var NPCAttack = 1;

setInterval (function() {

	playerTime += 50;
	NPCTime += 50;
	updateProgress();
	attack();

}, 50);

function updateProgress() {

	var playerProgressPercent = playerTime / playerSpeed * 100;
	var NPCProgressPercent = NPCTime / NPCSpeed * 100;
	document.getElementById("progressBarPlayer").style.width = playerProgressPercent + "%";
	document.getElementById("progressBarNPC").style.width = NPCProgressPercent + "%";

};

function attack() {

	if (playerTime >= playerSpeed) {

		playerTime -= playerSpeed;
		NPCCurrentHealth -= playerAttack;
		document.getElementById("NPCCurrentHealth").innerHTML = NPCCurrentHealth;

	}

	if (NPCTime >= NPCSpeed && NPCCurrentHealth > 0) {

		NPCTime -= NPCSpeed;
		playerCurrentHealth -= NPCAttack
		document.getElementById("playerCurrentHealth").innerHTML = playerCurrentHealth;

	}

}