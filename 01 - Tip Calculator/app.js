let displayPeopleNumMassageEl = document.getElementById(
  "people-num-massage-el"
);

let displayTipMassage = document.getElementById("tip-massage-el");

let displayBillMassage = document.getElementById("bill-massage-el");

let errorMassage = "value not valid !";

let billEl = document.getElementById("bill-el");
let tipEl = document.getElementById("tip-el");
let peopleNumEl = document.getElementById("people-num-el");
let displayTipAmount = document.getElementById("tip-amount-el");
let displayTotal = document.getElementById("total-el");
let displayTipBtnNumberEl = document.getElementById("tip-btn-number-el");
let tipAmount = 0;
let total = 0;
displayTipAmount.textContent = `$${tipAmount}`;
displayTotal.textContent = `$${total}`;

let tipButtonNumber = NaN;
function tipBtnNum(tipNum) {
  tipButtonNumber = tipNum;
  tipEl.value = tipNum;
}

function calculate() {
  tipButtonNumber = NaN;
  let bill = parseInt(billEl.value);
  let tipPeasant = parseInt(tipEl.value);
  let peopleNumber = parseInt(peopleNumEl.value);
  if (tipButtonNumber > 0) {
    tipPeasant = tipButtonNumber;
  }
  if (isNaN(bill) && isNaN(tipPeasant) && isNaN(peopleNumber)) {
    displayBillMassage.textContent = errorMassage;
    displayTipMassage.textContent = errorMassage;
    displayPeopleNumMassageEl.textContent = errorMassage;
    peopleNumEl.classList.remove("green-border");
    tipEl.classList.remove("green-border");
    billEl.classList.remove("green-border");
    peopleNumEl.classList.add("red-border");
    tipEl.classList.add("red-border");
    billEl.classList.add("red-border");
  } else if (isNaN(bill) && isNaN(tipPeasant)) {
    displayBillMassage.textContent = errorMassage;
    displayTipMassage.textContent = errorMassage;
    tipEl.classList.add("red-border");
    billEl.classList.add("red-border");
    tipEl.classList.remove("green-border");
    billEl.classList.remove("green-border");
    peopleNumEl.classList.remove("green-border");
  } else if (isNaN(bill) && isNaN(peopleNumber)) {
    displayBillMassage.textContent = errorMassage;
    displayPeopleNumMassageEl.textContent = errorMassage;
    peopleNumEl.classList.add("red-border");
    billEl.classList.add("red-border");
    peopleNumEl.classList.remove("green-border");
    billEl.classList.remove("green-border");
  } else if (isNaN(tipPeasant) && isNaN(peopleNumber)) {
    displayTipMassage.textContent = errorMassage;
    displayPeopleNumMassageEl.textContent = errorMassage;
    peopleNumEl.classList.add("red-border");
    tipEl.classList.add("red-border");
    peopleNumEl.classList.remove("green-border");
    tipEl.classList.remove("green-border");
  } else if (isNaN(bill) || bill < 0) {
    displayBillMassage.textContent = errorMassage;
    billEl.classList.add("red-border");
    billEl.classList.add("red-border");
  } else if (isNaN(tipPeasant) || tipPeasant < 0 || tipPeasant > 100) {
    displayTipMassage.textContent = errorMassage;
    tipEl.classList.add("red-border");
    tipEl.classList.remove("green-border");
  } else if (isNaN(peopleNumber) || peopleNumber < 0) {
    displayPeopleNumMassageEl.textContent = errorMassage;
    peopleNumEl.classList.add("red-border");
    peopleNumEl.classList.remove("green-border");
  } else if (peopleNumber === 0) {
    displayPeopleNumMassageEl.textContent = errorMassage;
    peopleNumEl.classList.add("red-border");
    peopleNumEl.classList.remove("green-border");
  } else {
    peopleNumEl.classList.remove("red-border");
    tipEl.classList.remove("red-border");
    billEl.classList.remove("red-border");
    displayBillMassage.textContent = "";
    displayTipMassage.textContent = "";
    displayPeopleNumMassageEl.textContent = "";
    peopleNumEl.classList.add("green-border");
    tipEl.classList.add("green-border");
    billEl.classList.add("green-border");
  }
  tipAmount = (bill * tipPeasant) / 100 / peopleNumber;
  total = bill / peopleNumber + tipAmount;
  if (
    isNaN(tipAmount) ||
    isNaN(total) ||
    total === Infinity ||
    tipAmount === Infinity
  ) {
    peopleNumEl.classList.add("red-border");
    displayPeopleNumMassageEl.textContent = errorMassage;
    displayTipAmount.textContent = `$0`;
    displayTotal.textContent = `$0`;
  } else {
    displayTipAmount.textContent = `$${tipAmount.toFixed(2)}`;
    displayTotal.textContent = `$${total.toFixed(2)}`;
  }
  console.log(total);
  console.log(tipAmount);
}
function reset() {
  billEl.value = "";
  peopleNumEl.value = "";
  tipEl.value = "";
  tipAmount = 0;
  total = 0;
  displayTipAmount.textContent = `$0`;
  displayTotal.textContent = `$0`;
  displayBillMassage.textContent = "";
  displayTipMassage.textContent = "";
  displayPeopleNumMassageEl.textContent = "";
  peopleNumEl.classList.remove("red-border");
  tipEl.classList.remove("red-border");
  billEl.classList.remove("red-border");
  peopleNumEl.classList.remove("green-border");
  tipEl.classList.remove("green-border");
  billEl.classList.remove("green-border");
}
