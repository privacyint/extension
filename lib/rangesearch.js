var bigInt = require('./BigInteger.min.js');

function binaryRangeIndexOf(search, range) {

    var minIndex = 0;
    var maxIndex = range.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {

        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = range[currentIndex];

        if (currentElement[1] < search) {
            minIndex = currentIndex + 1;
        } else if (currentElement[0] > search) {
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }

    }

    return -1;

}

exports.binaryRangeIndexOf = binaryRangeIndexOf;
