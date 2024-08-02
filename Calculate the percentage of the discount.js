// Calculate the percentage of the discount
// A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
// show customers how much they can save. Given the original price and the discounted price of a product,
// implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
// This function could be useful for the store's marketing team to create promotions and offers that attract
// customers.


const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    console.log(`Discount Amount: ${discountAmount}, Discount Percentage: ${discountPercentage}%`);
    return discountPercentage.toFixed(2);
  };
  
  console.log(`Discount Percentage: ${calculateDiscountPercentage(9238, 834)}%`); // Output: 9.05
  console.log(calculateDiscountPercentage(500, 400)); // Output: 20.00
  console.log(calculateDiscountPercentage(200, 150)); // Output: 25.00