// Main

/* Each HTML Table Element represents an invoice, which is identified by the class attribute named 'invoice' */

const keys = JSON.parse(window.localStorage.getItem('keys'));
console.log(keys)

const invoices = Array.from(document.querySelectorAll('.invoice'));
invoices.forEach(invoice => processInvoice(invoice));

// Business Logic
function processInvoice(invoice) {
  const prices = Array.from(invoice.querySelectorAll(".price"));
  const quantities = Array.from(invoice.querySelectorAll(".qty"));
  const unitPrices = Array.from(invoice.querySelectorAll(".unit-price"));
  const totalElement = invoice.querySelector(".tbl-total");
  
  for (let index = 0; index < quantities.length; index++) {
    prices[index].textContent = caluculateItemPrice(
      quantities[index].textContent,
      unitPrices[index].textContent
    );
  }
  totalElement.textContent = calculateTotal(prices);
}

//Utility Helper Functions
function calculateTotal(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total = total + parseFloat(prices[i].textContent, 10);
  }
  return total.toFixed(2);
}

function caluculateItemPrice(qty, unitPrice) {
  const price = parseFloat(qty) * parseFloat(unitPrice);
  return price.toFixed(2);
}

function displayData(data) {
  const wrapper = document.querySelector('.wrapper');
  wrapper.innerHTML = generateContent(data)
}

function loadOfflineData(arrOfKeys){
  let obj = {}
  const data = arrOfKeys.map(key => {
    obj[key] = JSON.parse(window.localStorage.getItem(key));
  })
  return obj
}

function generateContent(dataObj) {
  let html = '';
  let tblHeader = '';
  let tblContent = '';
  let tblFooter = '';
  let items = [];
  
  for(key in dataObj) {
   tblHeader = `<table class="invoice">
       <caption>
         Invoice id: <span>${key}</span>
       </caption>
         <tr>
           <th>Item</th>
           <th>Description</th>
           <th>QTY</th>
           <th>Unit Price</th>
           <th>Price</th>
         </tr>
              `
  }
  items = dataObj[key];
  for(i=0; i < items.length; i++) {
    item = items[i];
    tableContent += `
       <tr>
         <td>${item.name}</td>
         <td>${item.desc}</td>
         <td class="qty">${item.qty}</td>
         <td class="unit-price">${item.price}
         </td>
         <td class="price"></td>
       </tr>
    `
  }
  tblFooter = `
    <tr>
      <td colspan="4">Total</td>
      <td id="tbl-total"></td>
     </tr> 
   </table>`
   
   return tblHeader + tblContent + tbl
}