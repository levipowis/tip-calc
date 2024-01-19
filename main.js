import "./style.css";

const tipCalculatorForm = document.getElementById("tipCalculatorForm");

tipCalculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Input data from billAmount and tipPercentage fields
  let billAmountInput = document.getElementById("billAmountInput").value;
  let tipPercentageInput = document.querySelector("input[type = radio]:checked").value;

  // Convert from strings to floats
  let billAmount = parseFloat(billAmountInput);
  let tipPercentage = parseFloat(tipPercentageInput);

  // tipAmount and totalAmount calculations
  let tipAmount = tipPercentage * billAmount;
  let totalAmount = billAmount + tipAmount;

  // Gets divs to output tipAmount and totalAmount
  let tipAmountOutput = document.getElementById("tipAmountOutput");
  let totalAmountOutput = document.getElementById("totalAmountOutput");

  // Constructor used to format currency
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  if (billAmountInput === "") {
    tipAmountOutput.innerHTML = "Please Enter a Bill Amount";
  } else {
    tipAmountOutput.innerHTML = "Tip Amount: " + USDollar.format(tipAmount);
    totalAmountOutput.innerHTML = "Total Amount: " + USDollar.format(totalAmount);
  }
});
