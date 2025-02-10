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
