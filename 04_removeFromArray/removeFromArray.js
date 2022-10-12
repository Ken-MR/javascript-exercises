const removeFromArray = function(text) {
    for (let i = 1; i < arguments.length; i++) {
        for (let j = text.length - 1; j >= 0; j--) {
            if((arguments[i] === text[j])){
                text.splice(j, 1);
            }
        }
    }
    return text;
};

// Do not edit below this line
module.exports = removeFromArray;
