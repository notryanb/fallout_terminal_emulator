"use strict";

var columnWidth = 12;
var columnHeight = 17;
var wordColumns = 2;
var maxDudLength = 6;

var wordBank =  [
      'CAREERS', 'WEDDING',
      'WORDING', 'CASUALS',
      'MAGGIES', 'CATMANS',
      'COMPUTE', 'VNEOQKD',
      'IEKFHDP', 'FSOIBEF',
      'FBSIWKF', 'LDKSMEK',
      'LDMSKRI', 'QWERTYU'
      ];

var filler = "!@#$%^&*_+-=;/.:?,\|".split('');
var brackets =  [ "[]", "{}", "<>", "()" ];

  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
var shuffleArray = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function GameBoard() {
  this.board = [];
}

GameBoard.prototype.generateBoard = function(){

  var boardLength = columnWidth * columnHeight * wordColumns;
  var wordCount = 10;

  for (var idx = 0; idx < wordCount; idx++){
    var word = wordBank.pop();
    var formattedWord = this.htmlFormatWords(word);
    this.board.push(formattedWord); 
  }
  
  var flatArr = flattenArray(this.board);
  // console.log(flatArr);
  console.log(this.GenerateDudList());
}

// Takes in a word and outputs an array with each index formatted
GameBoard.prototype.htmlFormatWords = function(word) {
    var chars = word.split('');
    var wordArr = [];
    for (var i = 0; i < chars.length; i++) {
      var formatted = '<span class="character word" data-word='+word+'>'+chars[i]+'</span>'
      wordArr.push(formatted);
    }
    return wordArr;
}

GameBoard.prototype.GenerateDudList = function() {
  // Generates 10 duds of varying lengths and returns them in an array
  var dudCount = 10;
  var dudArr = [];

  for (var i = 0; i < dudCount; i++) {
    var dudLength = Math.floor(Math.random() * maxDudLength) + 2;
    if (dudLength > 2) {
      var freshDud = [];
      var rndBrackets = brackets[Math.floor(Math.random() * brackets.length)].split('');
      var start = 1;

      while (start < dudLength) {
        freshDud.push(filler[Math.floor(Math.random() * filler.length)]);
        start++;
      }
      freshDud.unshift(rndBrackets[0]);
      freshDud.push(rndBrackets[1]);
      dudArr.push(freshDud);
    } else {
      var rndBrackets = brackets[Math.floor(Math.random() * brackets.length)].split('');
      dudArr.push(rndBrackets);
    }
  }
  return dudArr;
}

GameBoard.prototype.insertLineBreaks = function(board) {
  var boardChars = this.board.join('').split('');

  for (var i = 0; i < boardChars.length; i += 12){
    boardChars.push('<br />');
  }

  return boardChars;
}


function flattenArray(arr){
  // Flatten the array 
  // var flattened = arr.reduce(function(a, b) {
  //   return a.concat(b);
  // }, []);
  return [].concat.apply([], arr);
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

function appendWordsToHTML(boardCols) {
  // var boardCols[2] = document.getElementById('code-column-one');
  // var boardCols[1] = document.getElementById('code-column-one');
  // codeOne.innerHTML += leftArr;
  // codeTwo.innerHTML += rightArr
}

document.addEventListener("DOMContentLoaded", function(event) { 
  // appendWordsToHTML(generateBoard());
  //do work
  var newGame = new GameBoard();
  var board = newGame.generateBoard();
  // appendWordsToHTML(board);
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
