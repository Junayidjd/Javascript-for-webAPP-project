// function capitalizeName(name) {
//     // Check if the first character is lowercase
//     const firstChar = name.charAt(0);
//     const isLowerCase = firstChar >= 'a' && firstChar <= 'z';
    
//     // Use the ternary operator to capitalize the first character if it's lowercase
//     const capitalizedFirstChar = isLowerCase ? firstChar.toUpperCase() : firstChar;

//     // Return the modified name
//     return capitalizedFirstChar + name.slice(1);
// }

// // Example usage:
// const userName = "john";
// const capitalizedUserName = capitalizeName(userName);
// console.log(capitalizedUserName); // Outputs: "John"




const curry = (fn) => {
    const arity = fn.length;
    return function curried(...args) {
      if (args.length >= arity) {
        return fn.apply(this, args);
      } else {
        return function (...moreArgs) {
          return curried.apply(this, args.concat(moreArgs));
        };
      }
    };
  };
  const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
 const curriedJoin = curry(join)
 curriedJoin(1, 2, 3) // '1_2_3'
 curriedJoin(1)(2, 3) // '1_2_3'
 curriedJoin(1, 2)(3) // '1_2_3'
 