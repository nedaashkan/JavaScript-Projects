let numEl = document.getElementById("num-el");
let resultEl = document.getElementById("result-el");
let percentEl = document.getElementById("percent-el");
let errorMassage = "value not valid ! ";
function calculate() {
  let percentage = parseInt(percentEl.value);
  let number = parseInt(numEl.value);
  let result = (number * percentage) / 100;
  console.log(result);
  if (isNaN(result)) {
    resultEl.textContent = errorMassage;
    resultEl.classList.add("red-massage");
  } else {
    resultEl.classList.remove("red-massage");
    resultEl.textContent = result;
  }
}
