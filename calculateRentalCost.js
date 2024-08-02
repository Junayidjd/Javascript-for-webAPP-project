function calculateRentalCost(daysRented, carType) {
    let costPerDay;
  
    switch (carType.toLowerCase()) {
      case 'economy':
        costPerDay = 4000;
        break;
      case 'midsize':
        costPerDay = 10000;
        break;
      case 'luxury':
        costPerDay = 20000;
        break;
      default:
        throw new Error('Invalid car type');
    }
  
    return daysRented * costPerDay;
  }
  
  // Example usage:
  let daysRented = 3;
  let carType = 'midsize';
  let totalCost = calculateRentalCost(daysRented, carType);
  console.log(`The total rental cost is Rs. ${totalCost}`); // Output: The total rental cost is Rs. 30000
  