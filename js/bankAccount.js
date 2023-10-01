// Define the BankAccount class
function BankAccount(ownerName, initialBalance) {
  this.ownerName = ownerName;
  this.balance = initialBalance;
}

// Define the deposit method
BankAccount.prototype.deposit = function (amount) {
  // Check if the input is a number
  if (typeof amount !== "number")
    throw new Error("Please enter the amount as a number!");

  // Check if the amount is greater than zero
  if (amount <= 0) throw new Error("Please enter a valid amount!");

  // Add the amount to the balance
  this.balance += amount;
};

// Define the withdraw method
BankAccount.prototype.withdraw = function (amount) {
  // Check if the input is a number
  if (typeof amount !== "number")
    throw new Error("Please enter the amount as a number!");

  // Check if the amount is greater than zero
  if (amount <= 0) throw new Error("Please enter a valid amount!");

  // Check if there is enough balance to withdraw
  if (this.balance <= 0 || this.balance < amount)
    throw new Error("Insufficient funds in the account!");

  // Subtract the amount from the balance
  this.balance -= amount;
};

// Define the getBalance method
BankAccount.prototype.getBalance = function () {
  // Return the balance
  return this.balance;
};

// Export the BankAccount class
module.exports = { BankAccount };
