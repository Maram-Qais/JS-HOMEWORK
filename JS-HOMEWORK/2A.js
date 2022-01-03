const max = [-1, 0, 3, 100, 99, 2, 99];

function biggestNumberInArray(larg) {
    return Math.max.apply(Math, larg);
}

console.log(biggestNumberInArray(max));