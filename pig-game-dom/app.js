$(document).ready(function(){
  diceListener();
})

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

var rollDice = function(){
  dice = Math.floor(Math.random() * 6) + 1;
  return dice;
}

var checkForOne = function(dice){
  if(dice === 1){
    roundScore = 0;
    return true;
  };
};

var imageChanger = function(imageNumber){
  return $('.dice').attr('src', 'images/dice-' + imageNumber + '.png');
}

var diceListener = function(){
  $('.btn-roll').on("click", function(e){
    rollDice();
    imageChanger(dice);
    roundScore += dice ;
    checkForOne(dice);
    $('#current-' + activePlayer).text(roundScore)
  });
};

// var rollDice = function(){
//   var dice = Math.floor(Math.random() * 6) + 1;
//   return dice;
// }

// var checkForOne = function(dice){
//   if(dice === 1){
//     roundScore = 0;
//     return true;
//   };
// };





/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


// document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent;

// document.querySelector('.dice').style.display = 'none';



