function cel() {
  let inputNumber = document.getElementById("num-el");
  let inputValue = parseFloat(inputNumber.value);
  let meterNum = document.getElementById("meter-num");
  let feetNum = document.getElementById("feet-num");
  meterNum.textContent = inputValue;
  feetNum.textContent = inputValue;

  let literNum = document.getElementById("liter-num");
  let gallonNum = document.getElementById("gallon-num");
  literNum.textContent = inputValue;
  gallonNum.textContent = inputValue;

  let poundNum = document.getElementById("pound-num");
  let kilogramNum = document.getElementById("kilogram-num");

  poundNum.textContent = inputValue;
  kilogramNum.textContent = inputValue;

  let meterToFeet = (inputValue * 3.28084).toFixed(2);
  let feetToMeter = (inputValue / 3.28084).toFixed(2);
  let literToGallon = (inputValue * 0.264172).toFixed(2);
  let gallonToLiter = (inputValue / 0.264172).toFixed(2);
  let kilogramTOPounds = (inputValue * 2.205).toFixed(2);
  let poundsTOKilogram = (inputValue / 2.205).toFixed(2);

  let poundResult = document.getElementById("pound-result");
  let kilogramResult = document.getElementById("kilogram-result");
  poundResult.textContent = kilogramTOPounds;
  kilogramResult.textContent = poundsTOKilogram;
  let gallonResult = document.getElementById("gallon-result");
  let literResult = document.getElementById("liter-result");
  gallonResult.textContent = literToGallon;
  literResult.textContent = gallonToLiter;
  let feetResult = document.getElementById("feet-result");
  let meterResult = document.getElementById("meter-result");
  feetResult.textContent = meterToFeet;
  meterResult.textContent = feetToMeter;
  if (isNaN(inputValue)) {
    meterNum.textContent = "";
    feetNum.textContent = "";
    literNum.textContent = "";
    gallonNum.textContent = "";
    poundNum.textContent = "";
    kilogramNum.textContent = "";
    poundResult.textContent = "";
    kilogramResult.textContent = "";
    gallonResult.textContent = "";
    literResult.textContent = "";
    feetResult.textContent = "";
    meterResult.textContent = "";
  }
  console.log(inputValue + " meter = " + meterToFeet + "feet");
  console.log(inputValue + " feet = " + feetToMeter + "meter");
  console.log(inputValue + " liter = " + literToGallon + "gallon");
  console.log(inputValue + " gallon = " + gallonToLiter + "liter");
  console.log(inputValue + " kilogram = " + kilogramTOPounds + "pounds");
  console.log(inputValue + " pounds = " + poundsTOKilogram + "kilogram");
}
