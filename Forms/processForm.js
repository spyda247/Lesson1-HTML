generateKey();

const submitAddBtn = document.querySelector("#add");
const submitSaveBtn = document.querySelector("#save");
const item = Array.from(
  document.querySelectorAll("input:not(input[type=submit])")
);
const invoiceItemCounter = document.querySelector("form h3 > span");
const message = document.querySelector(".message");
const invoiceItems = [];
let counter = 0;

// Add Event Listeners
submitAddBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (item.every((prop) => prop.value)) {
    //Check if user has filled all inputs
    counter++;
    addInvoiceItem(item);
    invoiceItemCounter.textContent = counter;
  } else {
    displayMessage("Error: Empty inputs.<br>Fill all inputs to continue");
    invoiceItemCounter.textContent = "0";
  }
});
submitSaveBtn.addEventListener("click", (event) => {
  event.preventDefault();
  saveInvoice(invoiceItems);
  console.log(invoiceItems);
});

/* Utitlity Helper Functions */

// Adds an Invoice Item
function addInvoiceItem(invoiceItem) {
  const item = {};
  invoiceItem.forEach((prop) => {
    item[prop.name] = prop.value;
    prop.value = "";
  });
  invoiceItems.push(item);
  let displayText = `
    name: ${item.name}<br>
    desc: ${item.desc}<br> 
    qty: ${item.qty}
    price: ${item.price}<br>`;
  displayMessage(displayText);
}

// Displays Messages
function displayMessage(text) {
  message.innerHTML = text;
}

// Saves an Invoice
function saveInvoice(invoiceItems) {
  if (invoiceItems.length !== 0) {
    localStorage.setItem("inv_1", JSON.stringify(invoiceItems));
    message.textContent = "Invoice saved successfuly";
    setTimeout(() => {
      invoiceItemCounter.textContent = "0";
      message.textContent = "No items yet.";
    }, 3000);
  } else {
    displayMessage("Error: Empty inputs.<br>Fill all inputs to continue");
    invoiceItemCounter.textContent = "0";
  }
}

function generateKey() {
  const today = new Date();
  const date = `${today.getFullYear()} ${today.getMonth()} ${today.getDate()}`;
  const time = `${today.getHours()}${today.getMinutes()}${today.getSeconds()}}`;
  const dateTime = `${date}` + `${time}`
  console.log(dateTime);


  
}
