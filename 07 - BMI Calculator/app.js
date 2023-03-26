// BMI
let data = [
  {
    name: "under weight body shape",
    img: "images/underweight.png",
  },
  {
    name: "normal body shape",
    img: "images/normal.png",
  },
  {
    name: "overweight body shape",
    img: "images/overweight.png",
  },
  {
    name: "obese body shape",
    img: "images/obese.png",
  },
];

let heightEl = document.getElementById("height-el");
let weightEl = document.getElementById("weight-el");
let resultEl = document.getElementById("result-el");
let imgEl = document.getElementById("img-el");
let bmiNumEl = document.getElementById("bmi-num-el");
let colorEl = document.getElementById("color-el");
let BMI;
function calculateBMI() {
  let height = parseFloat(heightEl.value);
  let weight = parseFloat(weightEl.value);
  if ((isNaN(height) && isNaN(weight)) || (height <= 0 && weight <= 0)) {
    resultEl.textContent = "not valid ! ";
    resultEl.classList.add("red-massage");
  } else if (height <= 0 || isNaN(height)) {
    resultEl.textContent = "not valid ! ";
    resultEl.classList.add("red-massage");
  } else if (weight <= 0 || isNaN(weight)) {
    resultEl.textContent = "not valid ! ";
    resultEl.classList.add("red-massage");
  } else {
    resultEl.classList.remove("red-massage");
    BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
    bmiNumEl.textContent = BMI;
    if (BMI < 18.5) {
      resultEl.textContent = "Your BMI underweight ";
      imgEl.src = data[0].img;
      imgEl.setAttribute("alt", data[0].name);
      colorEl.classList.add("underweight-bg");
      colorEl.classList.remove("normal-bg");
      colorEl.classList.remove("overweight-bg");
      colorEl.classList.remove("obese-bg");
    } else if (BMI > 18.5 && BMI <= 24.9) {
      resultEl.textContent = "Your BMI normal ";
      imgEl.src = data[1].img;
      imgEl.setAttribute("alt", data[1].name);
      colorEl.classList.add("normal-bg");
      colorEl.classList.remove("underweight-bg");
      colorEl.classList.remove("overweight-bg");
      colorEl.classList.remove("obese-bg");
    } else if (BMI >= 25 && BMI <= 29.9) {
      resultEl.textContent = "Your BMI overweight ";
      imgEl.src = data[2].img;
      imgEl.setAttribute("alt", data[2].name);
      colorEl.classList.add("overweight-bg");
      colorEl.classList.remove("underweight-bg");
      colorEl.classList.remove("normal-bg");
      colorEl.classList.remove("obese-bg");
    } else {
      resultEl.textContent = "Your BMI obese ";
      imgEl.src = data[3].img;
      imgEl.setAttribute("alt", data[3].name);
      colorEl.classList.add("obese-bg");
      colorEl.classList.remove("underweight-bg");
      colorEl.classList.remove("normal-bg");
      colorEl.classList.remove("overweight-bg");
    }
  }
}
function rest() {
  colorEl.classList.remove("underweight-bg");
  colorEl.classList.remove("normal-bg");
  colorEl.classList.remove("overweight-bg");
  colorEl.classList.remove("obese-bg");
  imgEl.src = data[1].img;
  imgEl.setAttribute("alt", data[1].name);
  resultEl.classList.remove("red-massage");
  resultEl.textContent = "BMI Calculator";
  bmiNumEl.textContent = 0;
  heightEl.value = "";
  weightEl.value = "";
  BMI = 0;
}
