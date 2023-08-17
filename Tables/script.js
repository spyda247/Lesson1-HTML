// Main
<<<<<<< HEAD
const totalElement = document.querySelector('#tbl-total');
const prices = Array.from(document.querySelectorAll('.price'));

totalElement.textContent = calculateTotal(prices);

// Utitlity
function calculateTotal(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total = total + parseFloat((list[i].textContent), 10);
    }
    return total;
}
    
=======
processInvoice();

// Business Logic
function processInvoice() {
  const totalElement = document.querySelector("#tbl-total");
  const prices = Array.from(document.querySelectorAll(".price"));
  const quantities = Array.from(document.querySelectorAll(".qty"));
  const unitPrices = Array.from(document.querySelectorAll(".unit-price"));
  
  for (
    let qty = 0, unitPrice = 0, price = 0;
    qty < quantities.length;
    qty++, unitPrice++, price++
  ) {
    prices[price].textContent = caluculateItemPrice(
      quantities[qty].textContent,
      unitPrices[unitPrice].textContent
    );
  }

  totalElement.textContent = calculateTotal(prices);
}


//Utility Helper Functions
function calculateTotal(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    total = total + parseFloat(list[i].textContent, 10);
  }
  return total;
}

function caluculateItemPrice(qty, unitPrice) {
  const price = parseFloat(qty) * parseFloat(unitPrice);
  return price.toFixed(2);
}
>>>>>>> a80777675e788b710c95c25e7efbbb5fb58d740f
