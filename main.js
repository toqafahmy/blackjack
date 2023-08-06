var player = {
    name: "Ahmed",
    chips: 145
}
var cards = [];
var hasBlackjack = false;
var isAlive = false;
var message = "";
var messageEl = document.getElementById("message-el");
// var sumEl = document.getElementById("sum-el");
var sumEl = document.querySelector("#sum-el");
var cardsEl = document.querySelector("#cards-el");
var players = document.getElementById("player-el");
players.textContent = player.name + " $" + player.chips;

function getRandomCard() {
    var randomCard =   Math.floor( ((Math.random() *13)+1));
    if (randomCard === 1){
        return 11;
    }
    else if( randomCard === 11){
        return 10;
    }
    else if( randomCard === 12){
        return 10;
    }
    else if( randomCard === 13){
        return 10;
    }
    else{
        return randomCard;
    }
}


function startGame(){
    var num1 = getRandomCard();
    var num2 = getRandomCard();
    var cards = [
        num1,
        num2
    ];
    var sum = num1 + num2;
    hasBlackjack = false;
    isAlive = true;
    renderGame();
};

function renderGame(){
    sumEl.textContent = `Sum: ${sum}`;
    cardsEl.textContent = "Cards: ";
    for (var i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    };
    if(sum <= 20){
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21){
        message = "You've got Blackjack!";
        hasBlackjack = true;
    }
    else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
};



function newCard(){
    if (isAlive === true && hasBlackjack === false){
        var card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}