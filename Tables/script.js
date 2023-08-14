console.log('Script initialised....');

const totalElement = document.querySelector('#tbl-total');

const prices = document.querySelectorAll('.price');

function calculateTotal(list) {
    let total = 0;
    for(let i = 0; i < list.length; i++) {
        total = total + parseFloat((list[i].textContent), 10);
    }
    return total;
}

const result = calculateTotal(Array.from(prices));

totalElement.textContent = result;


//console.log(Array.from(prices));