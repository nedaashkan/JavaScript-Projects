let celsiusEl = document.getElementById("celsius-el");
let fahrenheitEl = document.getElementById("fahrenheit-el");

function celToFar() {
  let celsius = parseFloat(celsiusEl.value);
  let celsiusToFahrenheitFormula = (celsius * 9) / 5 + 32;
  fahrenheitEl.value = parseFloat(celsiusToFahrenheitFormula.toFixed(2));
}

function farToCel() {
  let fahrenheit = parseFloat(fahrenheitEl.value);
  let fahrenheitToCelsiusFormula = ((fahrenheit - 32) * 5) / 9;
  celsiusEl.value = parseFloat(fahrenheitToCelsiusFormula.toFixed(2));
}
