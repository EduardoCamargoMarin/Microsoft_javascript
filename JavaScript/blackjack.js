//mão de primeiro player
let cardOne = 10;
let cardTwo = 20;


let sum = cardOne + cardTwo; // apresenta o total de cartas disponiveis

//mão do segundo player
let cardOneBank = 4;
let cardTwoBank = 8;
let cardThreeBank = 6;
let cardFourBank = 1;

//condição de vitória do jogo


if (sum > 21) {
    console.log('You lost');
    
    
}

console.log(`You have ${sum} point!`);

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;
if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
 console.log('You win');
} else {
  console.log('Bank wins');
}




