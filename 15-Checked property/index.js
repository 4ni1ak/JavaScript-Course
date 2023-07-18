document.getElementById("myButton").onclick = function() {
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  if (visaBtn.checked) {
    console.log("You are paying with a Visa!");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with a Mastercard!");
  } else if (paypalBtn.checked) {
    console.log("You are paying with PayPal!");
  } else {
    console.log("You must select a payment type!");
  }
};
