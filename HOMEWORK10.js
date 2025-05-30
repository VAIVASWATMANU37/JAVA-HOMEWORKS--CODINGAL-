function DISPLAYER (value) {
console.log(value);
}
function myCalculator(STARC,LEE, myCallback) {
let sum = STARC - LEE;
myCallback(sum);
}
myCalculator(56,58, DISPLAYER);