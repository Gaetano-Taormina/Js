console.log("Script loaded correctly");

const applyDiscount = prices => prices.map(price => price * 0.8);

const prices = [21, 43, 74];
const discounted = applyDiscount(prices);

console.log(discounted); 
