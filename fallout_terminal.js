"use strict";

function GameBoard() {
  this.board = [];
}

GameBoard.prototype.echoBack = function() {
  return console.log('GameBoard prototype');
};

var wordBank = {
    words: [
      'CAREERS', 'WEDDING',
      'WORDING', 'CASUALS',
      'MAGGIES', 'CATMANS',
      'ASDJEKD', 'VNEOQKD',
      'IEKFHDP', 'FSOIBEF',
      'FBSIWKF', 'LDKSMEK',
      'LDMSKRI', 'QWERTYU'
      ],
  filler: "!@#$%^&*()_+-=}{[]';/.:?>,<\|".split(''),

  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  shuffleArray: function(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
  }
}

GameBoard.prototype.generateBoard = function(){

  for (var idx = 0; idx < 12; idx++){
    this.board.push(wordBank.words.pop()); 
  }

  this.displayBoard(this.board);

  // var onlyWord = board.join('').split('');
  // console.log('Only Word: ' + onlyWord + onlyWord.length);

  // var leftoverSpaces = (wordCount * rows) - onlyWord.length;
  // console.log('leftoverSpaces:' + leftoverSpaces);

  // for (var i = 0; i < leftoverSpaces; i++) {
  //   var randomIdx = Math.floor(Math.random() * filler.length);
  //   board.push(filler[randomIdx]);
  // }

  wordBank.shuffleArray(this.board);
  this.displayBoard(this.board);
  // return this.board;
}

  GameBoard.prototype.displayBoard = function(board) {
    console.log(board);
  }

function flattenArray(arr){
  // Flatten the array 
  var flattened = arr.reduce(function(a, b) {
    return a.concat(b);
  }, []);
}


// var randomWord = Math.floor(Math.random() * wordBank.length);
// var password = wordBank[randomWord];

// var compareWords = function(choice){
//   var commonChars = 0;

//   for (var i = 0; i < password.length; i++){
//     if (choice[i] == password[i]){
//       commonChars++;
//     }
//   }
//   return commonChars;
// }

// function appendWordsToHTML(arr) {
//   var screen = document.getElementById('left-terminal');
//   for (var idx = 0; idx < arr.length; idx++){
//     console.log(idx);
//     screen.innerHTML +='<span>' + arr[idx] + '</span>';
//   }
// }

document.addEventListener("DOMContentLoaded", function(event) { 
  // appendWordsToHTML(generateBoard());
  //do work
  var newGame = new GameBoard();
  newGame.generateBoard();
});



/*
      ===================================
          FALLOUT TERMINAL EMULATOR
      ===================================

  Logic && Functions needed for gameplay

  - Load content and start game (document.addEventListener)
    => Menu choice for 1337 mode and stock terminal
    => Difficulty Select {
        easy: 8 Words, 5 Characters,
        medium: 12 Words, 7 Characters,
        hard: 18 Words, 11 Characters
      }

  - Word Bank
    => JSON with arrays of diff word length
    => ASCII bank for dummy chars

  - Generate 'Board' array(wordBank)
    => Dummy Filler
      function(wordSize) {
        takes word size and figures out how much filler needs to be generated
      }
    => Randomizer
      function(gameBoard?) {
        takes board and filler, then randomizes placement
        look into keeping passwords evenly spaced with extra method
      }
    => Left & Right Boards, splitBoard {
          takes board and divides into array with 2 halfs.
        }
    => 2x17x12 = 408 chars for total board length flattened
    => Each 'row' is a 2D array that flattens to 12 characters long. 
    => word wrap for when p/w goes over
    => dummy spaces filled in with random ascii chars

  - formatHTML(gameBoard)
   => takes board array and turns into 12 character long rows
   => each real word should be wrapped in a span with a data-attribute equal to the word
   => each word or filler will have a class to allow for hover effects and clicking

  - onClick Event Listener
    => Finds DOM elem data value
    => Calls word comparator
    => Updates turn tracker

  - Word Comparator(choice)
    => checks if choice == password
    => displays number of matched charcter indexes

  - Turn tracker (Game controller?)
    => 4 Tries
    => Win state
    => Loose state
    => Playing state
  
  - Audio
    => Keyboard clicking
    => 56k Noise upon win
    => Clicking or relay shutting noise for loss
*/
