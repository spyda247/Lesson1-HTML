// Main

/* Each HTML Table Element represents an invoice, which is identified by the class attribute named 'invoice' */


//Generate HTML from Local Storage
const keys = JSON.parse(window.localStorage.getItem('keys'));
const htmlContent = generateHTMLContent(keys);
console.log(htmlContent)

//Append HTML content to DOM Wrapper Element
const wrapper = document.querySelector('.wrapper');
appendHTML(htmlContent, wrapper);

//Process HTML Invoice
const invoices = Array.from(document.querySelectorAll('.invoice'));
invoices.forEach(invoice => processInvoice(invoice));


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

function generateHTMLContent(arrOfKeys){
  if(arrOfKeys === null) return '';
  let htmlContent = ''
  let obj = {}
  arrOfKeys.forEach(key => {
    obj[key] = JSON.parse(window.localStorage.getItem(key));
    htmlContent += generateHTML(obj);
  })
  return htmlContent
}

function generateHTML(dataObj) {
  //console.log(dataObj)
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
        tblContent += `<tr>
            <td>${item.name}</td>
            <td>${item.desc}</td>
            <td class="qty">${item.qty}</td>
            <td class="unit-price">${item.price}
            </td>
            <td class="price"></td>
          </tr>`
      }
  tblFooter = `
    <tr>
      <td colspan="4">Total</td>
      <td class="tbl-total"></td>
     </tr> 
   </table>`
   
   html = tblHeader + tblContent + tblFooter;
   return html;
}

function appendHTML(htmlContent, element) {
  //console.log(htmlContent)
  element.innerHTML += htmlContent;
}