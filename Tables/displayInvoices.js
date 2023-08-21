// Main

/* Each HTML Table Element represents an invoice, which is identified by the class attribute named 'invoice' */

const invoices = Array.from(document.querySelectorAll('.invoice'));
invoices.forEach(invoice => processInvoice(invoice));

// Business Logic
function processInvoice(invoice) {
    const prices = Array.from(invoice.querySelectorAll(".price"));
    const quantities = Array.from(invoice.querySelectorAll(".qty"));
    const unitPrices = Array.from(invoice.querySelectorAll(".unit-price"));
    const totalElement = invoice.querySelector(".tbl-total");

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
