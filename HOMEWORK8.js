var POINTS = [1, 32, 8, 4 ,16];
console.log(POINTS);

function ascending(){
    return POINTS.slice().sort((a, b) => a - b);
}

function descending(){
    return POINTS.slice().sort((a, b) => b - a);
}

var NEWARRAY = POINTS.map(() => ascending());
console.log(NEWARRAY);

var NEWARRAY2 = POINTS.map(() => descending());
console.log(NEWARRAY2);