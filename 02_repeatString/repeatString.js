const repeatString = function(text, num) {
    let stringOutput = '';
    if (num < 0) {
        return 'ERROR'
    }
    for (i = 0; i < num; i++) {
        stringOutput += text;
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = repeatString;
