const removeFromArray = function(text, item, item2 = undefined) {
    let index = text.indexOf(item);
    if (index > -1) {
        text.splice(index, 1);
    }
    let index2 = -1;
    if (!(item2 === undefined)) {
        index2 = text.indexOf(item2);
    }
    if ((index2 > -1)) {
        text.splice(index2, 1);
    }
    return text;
};

// Do not edit below this line
module.exports = removeFromArray;
