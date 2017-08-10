$(document).ready(function(){
  newGameListener();
  diceListener();
  holdListener();
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

var newGameListener = function(){
  $('.btn-new').on("click", beginGame)
}

var beginGame = function(){
  $('.begin').text(0);
}

var holdListener = function(){
  $('.btn-hold').on("click", addAndChangePlayer)
}

var addAndChangePlayer = function(){
  alert("adding points and switching players...")
  var currentScore = parseInt($('#score-' + activePlayer).text());
  currentScore += roundScore;
  scores[activePlayer] = currentScore;
  $('#score-' + activePlayer).text(currentScore);
  roundScore = 0;
  checkForWinner();
  switchActive();
}

var switchActive = function(){
  if(activePlayer === 1){
    activePlayer = 0;
  } else{
    activePlayer = 1;
  }
}

var checkForWinner = function(){
  if(scores[activePlayer] >= 100){
    alert("That's 100! Player " + (activePlayer + 1) + " has won the game!")
    beginGame();
  }
}



/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



