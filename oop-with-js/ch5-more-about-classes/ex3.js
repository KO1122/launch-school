class BankAccount {
  #balance = 0;

  #checkBalance() {
    console.log(`Current balance: $${this.#balance}`);
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new RangeError("Insufficient funds");
    this.#balance -= amount;
  }
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
account.withdraw(100);
