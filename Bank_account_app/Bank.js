class BankAccount {
    displayAccountInfo(){
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}
const account1= new BankAccount(1001, "Jone Doe", 1000);
const account2= new BankAccount(1002, "Jane Smith", 500);
console.log("Initial Account Information:");
account1.displayAccountInfo();
account2.displayAccountInfo();
