var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);

	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
		console.log("Executed checkForMatch.");
		console.log(cardsInPlay.length);
	} else {
		console.log("Skipped checkForMatch.");
		console.log(cardsInPlay.length);
	}
}

flipCard(0);
flipCard(2);