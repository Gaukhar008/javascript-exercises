const palindromes = function (string) {
    const replaced = string.replace(/[^a-z0-9]/gi, '').toLowerCase();
    for (let i = 0; i < replaced.length / 2; i++) {
        if(replaced[i] !== replaced[replaced.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
