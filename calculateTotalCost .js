// const calculateTotalCost = (cart) => {
//     return cart.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
//   };
  
//   const cart = [
//     { unitPrice: 20, quantity: 2 },
//     { unitPrice: 15, quantity: 5 },
//     { unitPrice: 30, quantity: 1 },
//   ];
  
//   const totalCost = calculateTotalCost(cart);
//   console.log(`Total Cost: $${totalCost}`); // Output: Total Cost: $125
  


// fruits = ["apple","banana", "orange", "graps"]

// const myForEach = fruits.forEach((curElem,index,arr) => {
//    return curElem,index
// })

// console.log(myForEach)

// const myMappArr = fruits.map((curElem,index,arr) => {
//     return `${curElem}${index}`
// })

// console.log(myMappArr)







// examaple 2: filtering products by pricing

// filter products with a price less than or equal to 500


// const products = [
//     {
//         name:"latop", price: 1200
//     },
//     {name:"phone",price:800},
//     {name:"mouse",price:300},
//     {name:"keyboard",price:150},
// ]

// const filterproduct = products.filter((curElem) => {
//     return curElem.price <= 500;
// })

// console.log(filterproduct)







// filter unique valuse

const number = [1,2,3,4,5,6,6,7,8,9];
let uniqueValue = number.filter((curElem,index,arr) =>{

    console.log(arr[index]);
});




const sortedNumber = number.sort((a,b) => {
    if (a>b) {
        return 1;
    } else {
        return -1;
    }
});
