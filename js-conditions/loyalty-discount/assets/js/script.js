console.log("Script loaded correctly");

let loyaltyCard = prompt("Do you have the loyalty card? (yes/no)");
let price = prompt("Enter the product price: ");

price = Number(price);

if (loyaltyCard === "yes" || loyaltyCard === "Yes" || loyaltyCard === "y" || loyaltyCard === "Y") {
    price = price * 0.9;
}

console.log("The price to pay is: ", price);