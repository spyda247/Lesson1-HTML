/* Get the collection of elements with the class of price */
const prices = document.querySelectorAll(".price");

/* Calculate the sum of all the item prices in the collection*/
const getTotalPrice = (prices) => {
	let sum = 0;

	prices.forEach((price) => (sum += parseFloat(price.textContent)));

	return sum;
};

/* Get the total Price of items */
const totalPrice = getTotalPrice(prices);

/* Get DOM Element */
const grandTotal = document.querySelector(".grand-total");

/* Insert total price into DOM element*/
grandTotal.textContent = String(totalPrice);
