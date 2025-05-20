
function sum(a, b, c) {
    return a + b + c;
}
console.log("Sum:", sum(10, 20, 30));


function trig(deg) {
    let rad = deg * (Math.PI / 180);
    console.log(`For ${deg}° -> Sin: ${Math.sin(rad).toFixed(2)}, Cos: ${Math.cos(rad).toFixed(2)}, Tan: ${Math.tan(rad).toFixed(2)}`);
}

trig(30);
trig(45);
trig(60);