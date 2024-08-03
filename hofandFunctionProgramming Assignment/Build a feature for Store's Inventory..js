/* Build a feature for Store's Inventory.
Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
use the map higher-order function to create a new object with the converted prices in Rupees. */






// Store's inventory with prices in USD
const inventory = {
    "Apple": 1,
    "Banana": 0.5,
    "Orange": 0.75,
    "Mango": 1.5,
    "Grapes": 2
  };
  
  // Exchange rate from USD to INR
  const exchangeRate = 80;
  
  // Convert prices to INR
  const convertedInventory = Object.fromEntries(
    Object.entries(inventory).map(([item, priceInUSD]) => [item, priceInUSD * exchangeRate])
  );
  
  // Display the converted inventory
  console.log(convertedInventory);
  