// // const isReverse = (str) => {
// //     return str === str.split('').reverse().join('');
// // }

// //  isReverse("junaid")


//  const isReverse = (str) => {
//     for(let char = str.length -1; char >= 0; char--)
//         console.log(str[char]);     
//  }

// console.log( isReverse("juanid"))


// // let input = "junaid"
// // console.log(input.length-1 )


// setTimeout(function() {
//     console.log('Hello, world!');
//   }, 2000);



//   function  isReverse = (message) => {
//     for(let char = message.length -1; char >= 0; char--)
//         console.log(message[char]);     
//  }

  
//   const message = "Welcome to JavaScript!";
//   setTimeout(showMessage, 3000, message);














function isReverse(message) {
    let reversedMessage = '';
    for (let char = message.length - 1; char >= 0; char--) {
      reversedMessage += message[char];
    }
    return reversedMessage;
  }
  
  function showMessage(message) {
    console.log(message);
  }
  
  const message = "Welcome to JavaScript!";
  setTimeout(() => {
    const reversedMessage = isReverse(message);
    showMessage(reversedMessage);
  }, 2000);