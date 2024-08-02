// function validatePassword(password, confirmPassword) {
//     if (password === confirmPassword) {
//         console.log("Password Matched. Password validation Successful.");
//     } else {
//         console.log("Password didn't match. Password validation unsuccessful.");
//     }
// }

// Example usage:
const password = "examplePassword";
const confirmPassword = "examplePassword";

validatePassword(password, confirmPassword);







function validatePassword(password, confirmPassword) {
    const  validatePassword = {
        success: "Password Matched. Password validation Successfull",
        failure: "Password didn't match. Password validation unsuccessful",
    };

    const isvalid = password === confirmPassword;
    console.log(validatePassword[isvalid ? 'success' : 'failure']);
}
// validatePassword()