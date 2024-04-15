// Define the BankAccount class
class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`$${amount} deposited successfully.`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`$${amount} withdrawn successfully.`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log("Account Number:", this.accountNumber);
        console.log("Owner Name:", this.ownerName);
        console.log("Balance: $" + this.balance);
    }
}
const account1 = new BankAccount(1001, "John Doe", 1000);
const account2 = new BankAccount(1002, "Jane Smith", 2000);
account1.deposit(500);
account2.withdraw(1000);
console.log("Deposit and Withdrawal :")
console.log("Initial Account Information :");
account1.displayAccountInfo();
console.log("Updated Account Information:");
account2.displayAccountInfo();
