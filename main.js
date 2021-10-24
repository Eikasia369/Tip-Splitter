let fivePercent = document.getElementById("5-perc");
let tenPercent = document.getElementById("10-perc");
let fifteenPercent = document.getElementById("15-perc");
let twentyfivePercent = document.getElementById("25-perc");
let fiftyPercent = document.getElementById("50-perc");


/* Calcula el 5% y devuelve resultados */

function calcFivePercent() {
  let bill = document.getElementById("bill-amount");
  bill = parseFloat(bill.value);
  let people = document.getElementById("number-of-people");
  let totalPerPerson = document.getElementById("total-per-person");
  let tipTotalPerPerson = document.getElementById("tip-total");
  people = parseFloat(people.value);

  var a = ((bill * 5) / 100) / people;
  var b = (bill + a ) / people;

  tipTotalPerPerson.innerText = "$ " + a.toFixed(2);
  totalPerPerson.innerText = "$ " + b.toFixed(2);
}

/* Calcula el 10% y devuelve resultados */

function calcTenPercent() {
  let bill = document.getElementById("bill-amount");
  bill = parseFloat(bill.value);
  let people = document.getElementById("number-of-people");
  let totalPerPerson = document.getElementById("total-per-person");
  let tipTotalPerPerson = document.getElementById("tip-total");
  people = parseFloat(people.value);

  var a = ((bill * 10) / 100) / people;
  var b = (bill + a ) / people;

  tipTotalPerPerson.innerText = "$ " + a.toFixed(2);
  totalPerPerson.innerText = "$ " + b.toFixed(2);
}


/* Calcula el 15% y devuelve resultados */

function calcfifteenPercent() {
  let bill = document.getElementById("bill-amount");
  bill = parseFloat(bill.value);
  let people = document.getElementById("number-of-people");
  let totalPerPerson = document.getElementById("total-per-person");
  let tipTotalPerPerson = document.getElementById("tip-total");
  people = parseFloat(people.value);

  var a = ((bill * 15) / 100) / people;
  var b = (bill + a ) / people;

  tipTotalPerPerson.innerText = "$ " + a.toFixed(2);
  totalPerPerson.innerText = "$ " + b.toFixed(2);
}

/* Calcula el 25% y devuelve resultados */

function calcTwentyFivePercent() {
  let bill = document.getElementById("bill-amount");
  bill = parseFloat(bill.value);
  let people = document.getElementById("number-of-people");
  let totalPerPerson = document.getElementById("total-per-person");
  let tipTotalPerPerson = document.getElementById("tip-total");
  people = parseFloat(people.value);

  var a = ((bill * 25) / 100) / people;
  var b = (bill + a ) / people;

  tipTotalPerPerson.innerText = "$ " + a.toFixed(2);
  totalPerPerson.innerText = "$ " + b.toFixed(2);
}

/* Calcula el 50% y devuelve resultados */

function calcfiftyPercent() {
  let bill = document.getElementById("bill-amount");
  bill = parseFloat(bill.value);
  let people = document.getElementById("number-of-people");
  let totalPerPerson = document.getElementById("total-per-person");
  let tipTotalPerPerson = document.getElementById("tip-total");
  people = parseFloat(people.value);

  var a = ((bill * 50) / 100) / people;
  var b = (bill + a ) / people;

  tipTotalPerPerson.innerText = "$ " + a.toFixed(2);
  totalPerPerson.innerText = "$ " + b.toFixed(2);
}

/* Calcula el % Custom y devuelve resultados */

function calcCustomPercent() {
  let bill = document.getElementById("bill-amount");
  bill = parseFloat(bill.value);
  let people = document.getElementById("number-of-people");
  let totalPerPerson = document.getElementById("total-per-person");
  let tipTotalPerPerson = document.getElementById("tip-total");
  people = parseFloat(people.value);
  let custPerc = document.getElementById("custom-perc");
  custPerc = parseFloat(custPerc.value);

  var a = ((bill * custPerc) / 100) / people;
  var b = (bill + a ) / people;

  tipTotalPerPerson.innerText = "$ " + a.toFixed(2);
  totalPerPerson.innerText = "$ " + b.toFixed(2);
}

function resetAll() {
  let bill = document.getElementById("bill-amount");
  let people = document.getElementById("number-of-people");
  let totalPerPerson = document.getElementById("total-per-person");
  let tipTotalPerPerson = document.getElementById("tip-total");
  tipTotalPerPerson.innerText = "$ " + 0;
  totalPerPerson.innerText = "$ " + 0;
  bill.value = 0; 
  people.value = 0;
}