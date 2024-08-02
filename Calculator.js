function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log("Result:", result);
}

// Example usage:
const num1 = 10;
const num2 = 5;
const operator = '-';

calculator(num1, num2, operator);
