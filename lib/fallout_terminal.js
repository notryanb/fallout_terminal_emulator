'use strict';

var wordBank = ['CAREERS', 'WEDDING', 'WORDING', 'CASUALS', 'MAGGIES', 'CATMANS', 'COMPUTE', 'INSTALL', 'KITTENS', 'DRIVERS', 'CIRCUIT', 'FUGAZIS', 'CONSOLE', 'DINGGUS'];

var fillerChars = "!@#$%^&*_+-=;/.:?,\|".split('');
var bracketChars = ["[]", "{}", "<>", "()"];

document.addEventListener("DOMContentLoaded", function (event) {
    var newArr = shuffleArray(wordBank);
    console.log(newArr);
});

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
var shuffleArray = function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};