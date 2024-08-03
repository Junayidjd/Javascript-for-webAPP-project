function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  setTimeout(() => {
    let randomNumber = generateRandomNumber(1, 100);
    console.log("Random Number: ", randomNumber);
  }, 3000);











/* Random Number Generator with Delay and Progress Indication: The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.Random Number Generator with Delay and Progress Indication: The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number. */


  const delay = 3; // delay in seconds

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  function countdown(timeRemaining) {
    console.log(`Generating random number in ${timeRemaining} seconds...`);
    if (timeRemaining > 0) {
      setTimeout(() => countdown(timeRemaining - 1), 1000);
    } else {
      const randomNumber = generateRandomNumber();
      console.log(`Random number generated: ${randomNumber}`);
    }
  }
  
  countdown(delay);






