function correctCartQuantities(cart) {
    for (let i = 0; i < cart.length; i++) {
      cart[i] *= 2;
    }
    return cart;
  }
  
  // Example usage:
  let cart = [1, 2, 3, 4]; // Quantities of items in the cart
  let correctedCart = correctCartQuantities(cart);
  console.log(correctedCart); // Output: [2, 4, 6, 8]
  