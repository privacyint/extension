var bigInt = require('./ext/BigInteger.min.js');

function binaryRangeIndexOf(search, range, useBigInt=false) {
    var minIndex = 0;
    var maxIndex = range.length - 1;
    var currentIndex;
    var currentElement;

    if (useBigInt) {
        var search = bigInt(search);
    }

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;

        if (!useBigInt) {
            currentElement = range[currentIndex];

            if (currentElement[1] < search) {
                minIndex = currentIndex + 1;
            } else if (currentElement[0] > search) {
                maxIndex = currentIndex - 1;
            } else {
                return currentIndex;
            }
        } else {
            currentElement = [
                bigInt(range[currentIndex][0]),
                bigInt(range[currentIndex][1])
            ];

            if (currentElement[1].compare(search) == -1) {
                minIndex = currentIndex + 1;
            } else if (currentElement[0].compare(search) == 1) {
                maxIndex = currentIndex - 1;
            } else {
                return currentIndex;
            }
        }
    }

    return -1;
}

exports.binaryRangeIndexOf = binaryRangeIndexOf;
