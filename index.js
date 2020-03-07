function add(a, b) {
  return a + b;
}

add(1, 80);

function subtract() {
  return 60 - 40;
}

function multiply() {
  return 2 * 3.4;
}

function divide() {
  return 5.0 / 2.5;
}
//////////////////////////
var number = 10

function add5() {
  return number += 5
}

function divideBy3() {
  return number /= 3
}

divideBy3()

console.log(number) // 3.333333333335

add5()

console.log(number) // 8.333333333335

// reset number
number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5
