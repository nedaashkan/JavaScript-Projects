let headingEl = document.getElementById("heading-el");
let yourNameEl = document.getElementById("first-name-el");
let yourPartnerNameEl = document.getElementById("your-partner-name-el");
let massageEl = document.getElementById("massage-el");
let timeId;
let startNumber;
let lastNumber;
function calculateLove() {
  let yourName = yourNameEl.value;
  let yourPartnerName = yourPartnerNameEl.value;
  if (yourName === "" && yourPartnerName === "") {
    massageEl.textContent = "not valid ! ";
    massageEl.classList.add("massage-color");
  } else if (yourName === "" || yourPartnerName === "") {
    massageEl.textContent = "not valid ! ";
    massageEl.classList.add("massage-color");
  } else {
    massageEl.textContent=""
    massageEl.classList.remove("massage-color");

    timeId = setInterval(countUp, 125);
    startNumber = 0;
    headingEl.textContent = startNumber;
    let randomNumber = Math.floor(Math.random() * 101);
    lastNumber = randomNumber;
  }
}
function countUp() {
  startNumber += 1;
  headingEl.textContent = startNumber + "%";
  if (startNumber === lastNumber) {
    clearTimeout(timeId);
  }
}
function rest() {
  massageEl.textContent = "";
  massageEl.classList.remove("massage-color");
  headingEl.textContent = "";
  startNumber = 0;
  yourNameEl.value = "";
  yourPartnerNameEl.value = "";
}
