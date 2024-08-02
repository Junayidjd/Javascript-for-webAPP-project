function calculateBill (costs, numberOfpeople) {
    // calculate the total bill by summing up the cost of each dish
    const totalBill = costs.reduce((accumulator, currentCost) => accumulator + currentCost)

    // calculate the amount each person has to pay
    const billperPersom = totalBill / numberOfpeople;

    // return the results as a object

    return {
        totalBill: totalBill.toFixed(2),  // keeping 2 decimal places for current format
        billperPersom: billperPersom.toFixed(2)
    };
}


const dishCosts = [150,200,250,100]
const numberOfPeople = 4

const billDetails = calculateBill(dishCosts,numberOfPeople)
console.log(`total Bill: Rs.${billDetails.totalBill}`)
console.log(`Bill per person: Rs.${billDetails.billperPersom}`)