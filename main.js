import "./style.css";

const tipCalculatorForm = document.getElementById("tipCalculatorForm");

tipCalculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let billAmount = parseFloat(document.getElementById("billAmountInput").value);
  let tipPercentage = parseFloat(document.querySelector("input[type = radio]:checked").value);
  let tipAmount = tipPercentage * billAmount;
  let totalAmount = billAmount + tipAmount;
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  document.getElementById("tipAmountOutput").innerHTML = "Tip Amount: " + USDollar.format(tipAmount);
  document.getElementById("totalAmountOutput").innerHTML = "Total Amount: " + USDollar.format(totalAmount);
});
