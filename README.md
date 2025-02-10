### JavaScript Closures, Factory Functions, and Encapsulation

#### **0:00 - 0:05 | Warm-up: Quick Concept Recall**  
- Pop Quiz:
  - *What is a closure?*  
  - *What does a factory function return?*  
  - *How does JavaScript achieve encapsulation?*  

---

#### **0:05 - 0:15 | Live Demo: Closures in Action**  

  ```js
  const createCounter = () => {
    let count = 0; // Private variable
    
    return {
      increment: () => count++,
      decrement: () => count--,
      getCount: () => count
    };
  };

  const counter = createCounter();
  console.log(counter.getCount()); // 0
  counter.increment();
  console.log(counter.getCount()); // 1
  ```
- **Questions:**  
  1. Why can `count` not be accessed directly?  
  2. What concept allows `increment`, `decrement`, and `getCount` to access `count`?  

This is **closure** + **encapsulation** in a **factory function**.  

---

#### **0:15 - 0:30 | Small Group Activity: Refactoring Code**  
- **Task:** In breakout groups, refactor the following code into a factory function using closure:  
  ```js
  let bankAccount = {
    balance: 100,
    deposit(amount) {
      this.balance += amount;
    },
    withdraw(amount) {
      if (amount <= this.balance) this.balance -= amount;
    }
  };
  ```
- **Goal:** Encapsulate `balance` to make it private.  

<details><summary>Solution</summary>
  
  ```js
  const createBankAccount = (initialBalance) => {
    let balance = initialBalance;
    
    return {
      deposit: (amount) => balance += amount,
      withdraw: (amount) => {
        if (amount <= balance) balance -= amount;
      },
      getBalance: () => balance
    };
  };

  const myAccount = createBankAccount(100);
  console.log(myAccount.getBalance()); // 100
  ```

</details>

---

#### **0:30 - 0:45 | Real-World Scenario: Custom Logger**  

  *Create a logging system where:*  
  - Each logger instance has a prefix (e.g., `[WARNING]` or `[ERROR]`).  
  - The logger should have a `log` method that prints messages with the prefix.  

```js
const createLogger = ???

// Example usage
const errorLogger = createLogger("[ERROR]");
errorLogger.log("Something went wrong!"); // [ERROR] Something went wrong!

const warningLogger = createLogger("[WARNING]");
warningLogger.log("You are almost out of storage."); // [WARNING] You are almost out of storage.

const errorLogger = createLogger("[INFO]");
errorLogger.log("Learn more about closure at MDN."); // [INFO] Learn more about closure at MDN.
```

<details><summary>Solution</summary>

  ```js
  const createLogger = (prefix) => ({
    log: (message) => console.log(`${prefix} ${message}`)
  });

  const errorLogger = createLogger("[ERROR]");
  errorLogger.log("Something went wrong!"); // [ERROR] Something went wrong!
  ```

</details>

---

#### **0:45 - 0:55 | Lightning Quiz & Q&A**  
  - What is the benefit of using a factory function over an object literal?  
  - How do closures help with encapsulation?  

---

#### **0:55 - 1:00 | Wrap-up & Takeaways**  

✅ **Closures** keep variables alive after a function execution.  
✅ **Factory functions** create instances without using `new`.  
✅ **Encapsulation** hides data for controlled access.  
