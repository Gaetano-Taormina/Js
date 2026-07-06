console.log("Script loaded correctly");

const products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Desk"];
const quantities = [0, 5, 20, 2, 0];
const lowStockThreshold = 10;

for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const quantity = quantities[i];

    if (quantity === 0) {
        console.log(product + " is out of stock.");
    } else if (quantity < lowStockThreshold) {
        console.log(product + " has low stock.");
    } else {
        console.log(product + " is in stock.");
    }
}
