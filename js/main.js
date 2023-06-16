alert('Welkom bij Hoger of Lager');

const Name1 = prompt('Wat is je naam', '');
alert(`Welkom ${Name1} bij het Hoger Lager spel`);
const Name2 = prompt('Wat is je naam', '');
alert(`Welkom ${Name2} bij het Hoger Lager spel`);

const Age = prompt('Zijn jullie 18+',);
if (Age >= 18) {
	alert('ga verder.');
} else {
	alert('Deze site sluit nu je bent onder de 18!!!')
	window.close();
}


const dice = document.getElementById('dice-btn');

function diceGame() {
	//DICE 1
	let randomDice = Math.floor((Math.random() * 6) + 1);
	let diceLocation = "img/" + "Dice-" + randomDice + ".png";
	let img1 = document.querySelectorAll("img")[0];
	img1.setAttribute("src", diceLocation);

	//DICE 2
	let randomDice2 = Math.floor((Math.random() * 6) + 1);
	let diceLocation2 = "img/" + "Dice-" + randomDice2 + ".png";
	let img2 = document.querySelectorAll("img")[1];
	img2.setAttribute("src", diceLocation2);

	if (randomDice > randomDice2) {
		document.querySelector("h1").innerHTML = (`${Name1} heeft gewonnen `);
	}
	else if (randomDice < randomDice2) {
		document.querySelector("h1").innerHTML = (`${Name2} heeft gewonnen `);
	}
	else if (randomDice = randomDice2) {
		document.querySelector("h1").innerHTML = "Draw!";
	}
}