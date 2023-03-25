let displayNum = document.getElementById("num-el");
let count = 0;
displayNum.textContent = count;
function inc() {
  count = count + 1;
  displayNum.textContent = count;
}
function dec() {
  count = count - 1;
  displayNum.textContent = count;
}
function reset() {
  displayNum.textContent = 0;
  count = 0;
}
