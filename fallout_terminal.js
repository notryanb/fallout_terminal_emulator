"use strict";

var wordBank = [
  'CAREERS', 'WEDDINGS',
  'WORDING', 'CASUALS',
  'MAGGIES', 'CATMANS'
  ]

var randomWord = Math.floor(Math.random() * wordBank.length);
var password = wordBank[randomWord];


var compareWords = function(choice){
  var commonChars = 0;

  for (var i = 0; i < password.length; i++){
    if (choice[i] == password[i]){
      commonChars++;
    }
  }
  return commonChars;
}

function appendWordsToHTML(arr) {
  var screen = document.getElementById('container');
  for (var idx = 0; idx < arr.length; idx++){
    console.log(idx);
    screen.innerHTML +='<div>' + arr[idx] + '</div';
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  appendWordsToHTML(wordBank);
  //do work
});


console.log(randomWord);
console.log(password);
console.log(compareWords('MAGGIES') + '/' + password.length);

/*
      ===================================
          FALLOUT TERMINAL EMULATOR
      ===================================

  Logic && Functions needed for gameplay

  - Load content and start game (document.addEventListener)
    => Menu choice for 1337 mode and stock terminal
    => Difficulty Select {
        easy: 9 Words, 5 Characters,
        medium: 12 Words, 7 Characters,
        hard: 15 Words, 11 Characters
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
