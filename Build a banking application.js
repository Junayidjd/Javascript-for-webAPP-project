// Build a banking application
// A banking application needs to manage customer accounts and transactions. The user detail is stored in an
// object with a keys name and balance. Write functions using object methods to update a customer's account
// balance based on a deposit or withdrawal.




class CustomerAccount {
    /**
     * Initialize a new customer account
     * @param {string} name - Customer name
     * @param {number} balance - Initial account balance
     */
    constructor(name, balance) {
      this.name = name;
      this.balance = balance;
    }
  
    /**
     * Deposit money into the account
     * @param {number} amount - Amount to deposit
     */
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount} into ${this.name}'s account. New balance: $${this.balance}`);
      } else {
        console.log("Invalid deposit amount. Please enter a positive value.");
      }
    }
  
    /**
     * Withdraw money from the account
     * @param {number} amount - Amount to withdraw
     */
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount} from ${this.name}'s account. New balance: $${this.balance}`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds. Withdrawal cancelled.");
      } else {
        console.log("Invalid withdrawal amount. Please enter a positive value.");
      }
    }
  
    /**
     * Get the current account balance
     * @returns {number} Current account balance
     */
    getBalance() {
      return this.balance;
    }
  }


// Create a new customer account
const account = new CustomerAccount("John Doe", 1000);

// Deposit money into the account
account.deposit(500);
// Output: Deposited $500 into John Doe's account. New balance: $1500

// Withdraw money from the account
account.withdraw(200);
// Output: Withdrew $200 from John Doe's account. New balance: $1300

// Get the current account balance
console.log(account.getBalance());
// Output: 1300