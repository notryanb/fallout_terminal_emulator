"use strict";


var wordBank = {
    words: [
      'CAREERS', 'WEDDING',
      'WORDING', 'CASUALS',
      'MAGGIES', 'CATMANS',
      'COMPUTE', 'VNEOQKD',
      'IEKFHDP', 'FSOIBEF',
      'FBSIWKF', 'LDKSMEK',
      'LDMSKRI', 'QWERTYU'
      ],
  filler: "!@#$%^&*_+-=;/.:?,\|".split(''),
  brackets: [ "[]", "{}", "<>", "()" ],

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

function GameBoard() {
  this.board = [];
}

GameBoard.prototype.generateBoard = function(){

  var boardLength = 12 * 17 * 2; // 12 chars, 17 rows, 2 columns
  var wordCount = 10;

  // Put 10 words in an array
  for (var idx = 0; idx < wordCount; idx++){
    var word = wordBank.words.pop();
    var formattedWord = this.htmlFormatWords(word);
    this.board.push(formattedWord); 
  }
  
  console.log(this.board);

  // var onlyWord = this.board.join('').split('');
  // var leftoverSpaces = boardLength - onlyWord.length;

  // for (var i = 0; i < leftoverSpaces; i++) {
  //   var randomIdx = Math.floor(Math.random() * wordBank.filler.length);
  //   this.board.push(wordBank.filler[randomIdx]);
  // }

  // wordBank.shuffleArray(this.board);
  // return this.displayBoard(this.board);
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

GameBoard.prototype.insertLineBreaks = function(board) {
  var boardChars = this.board.join('').split('');

  for (var i = 0; i < boardChars.length; i += 12){
    boardChars.push('<br />');
  }

  return boardChars;
}

// GameBoard.prototype.displayBoard = function(board) {
//   var boardStr = "";
//   for (var i = 0; i < board.length; i++){
//     var word = board[i];
//     if (word.length > 1) {
//       var letters = word.split('');
//       for (var letter = 0; letter < letters.length; letter++){
//         boardStr += '<span data-word='+word+'>'+word[letter]+'</span>'
//       }
//     } else {
//       boardStr += "<span data-word='"+word+"'>"+word+"</span>"
//     }
//   }
//   return boardStr;
// }

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
