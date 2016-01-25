let wordBank =  [
    'CAREERS', 'WEDDING',
    'WORDING', 'CASUALS',
    'MAGGIES', 'CATMANS',
    'COMPUTE', 'INSTALL',
    'KITTENS', 'DRIVERS',
    'CIRCUIT', 'FUGAZIS',
    'CONSOLE', 'DINGGUS'
    ];

let fillerChars = "!@#$%^&*_+-=;/.:?,\|".split('');
let bracketChars =  [ "[]", "{}", "<>", "()" ];

document.addEventListener("DOMContentLoaded", event => { 
  let newArr = shuffleArray(wordBank);
  console.log(newArr);
});

  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
let shuffleArray = arr => {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
