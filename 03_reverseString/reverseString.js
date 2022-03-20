const reverseString = function(word) {
    let reverseWord = '';
    let letters = word.split('');
    for (let i = 1; i <= word.length; i++) {
        reverseWord += letters[letters.length - i]
    }
    return reverseWord;
};

// Do not edit below this line
module.exports = reverseString;
