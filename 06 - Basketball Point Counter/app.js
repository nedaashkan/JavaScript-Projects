let num1El = document.getElementById("num-1-el");
let num2El = document.getElementById("num-2-el");
let count1 = 0;
let count2 = 0;
num1El.textContent = count1;
num2El.textContent = count2;
function plusOne1() {
  count1 += 1;
  num1El.textContent = count1;
}
function plusTwo1() {
  count1 += 2;
  num1El.textContent = count1;
}
function plusThree1() {
  count1 += 3;
  num1El.textContent = count1;
}
function plusOne2() {
  count2 += 1;
  num2El.textContent = count2;
}
function plusTwo2() {
  count2 += 2;
  num2El.textContent = count2;
}
function plusThree2() {
  count2 += 3;
  num2El.textContent = count2;
}
function reset() {
  count1 = 0;
  count2 = 0;
  num1El.textContent = 0;
  num2El.textContent = 0;
}
