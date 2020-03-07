//Addition
function add(a, b) {
  return a + b;
}

add(1, 80);
//Subtraction
function subtract(a, b) {
  return a - b;
}

subtract(60, 40);
//Multiplication
function multiply(a, b) {
  return a * b;
}

multiply(2, 3.4);
//Division
function divide(a, b) {
  return a / b;
}

divide(5.0, 2.5);

var n = 10;
//Increment
function increment() {
  return n += 2;
}

increment();
//Decrement
function decrement() {
  return n -= 5;
}

decrement();
//

n = 10;
increment();
console.log(n);

decrement();
console.log(n);
