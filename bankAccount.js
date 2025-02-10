const bankAccount = {
  balance: 100,
  deposit(amount) {
    this.balance += amount;
  },
  withdraw(amount) {
    if (amount <= this.balance) this.balance -= amount;
  }
};

console.log(bankAccount.balance); // this should be undefined!
