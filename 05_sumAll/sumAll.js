const sumAll = function(num1, num2) {
    let high, low;
    if ((num1 < 0) || (num2 < 0) || (typeof num1 == 'string') || (typeof num2 == 'string')) {
        return 'ERROR';
    }
    if (!(typeof num1 == 'number') || !(typeof num2 == 'number')) {
        return 'ERROR';
    }
    if (num1 <= num2) {
        low = num1;
        high = num2;
    }
    else {
        low = num2;
        high = num1;
    }
    let sum = 0;
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
