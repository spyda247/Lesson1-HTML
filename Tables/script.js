// Main
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
    
