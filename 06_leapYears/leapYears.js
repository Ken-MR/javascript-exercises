const leapYears = function(year) {
    let centuryYear;
    let century_400 = 0;
    if (year % 100 === 0) {
        centuryYear = year / 100;
        century_400 = centuryYear % 4;
    }
    if ((year % 4 === 0) && !century_400) {
        return true
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
