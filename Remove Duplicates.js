function removeDuplicates(cart) {
    // Initialize an empty set to track seen items
    let seenItem = new Set();
    // Initialize an empty array to store unique items
    let uniqueItems = [];

    // Iterate through each item in the cart 
    cart.forEach(item => {
        // check it the item is not in the cart
        if (!seenItem.has(item)) {
            // add the item to the unique cart 
            uniqueItems.push(item);
            // mark the item as seen by adding it to the set
            seenItem.add(item);
            }
    });

    return uniqueItems;
}

// Example usage 
let cart = ["apple", "banana", "apple", "orange", "banana"];
let uniqueCart = removeDuplicates(cart);
console.log(uniqueCart);










