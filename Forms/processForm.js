const submitAddBtn = document.querySelector('#add');
const submitSaveBtn = document.querySelector('#save');
const item = Array.from(
  document.querySelectorAll("input:not(input[type=submit])"));
const invoiceItems = [];

submitAddBtn.addEventListener('click', () => addInvoiceItem(item))

submitSaveBtn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(invoiceItems);
})

function addInvoiceItem(invoiceItem) {
  const item = {}
  invoiceItem.forEach((prop) => {
    item[prop.name] = prop.value;
    prop.value ='';
  });
  invoiceItems.push(item);
}
