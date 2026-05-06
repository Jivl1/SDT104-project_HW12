function createCounter(start) {
  let count = start;

  return function () {
    console.log("Regular counter:", count);
    return count++;
  };
}

function createCounterArrow(start) {
  let count = start;

  return () => {
    console.log("Arrow counter:", count);
    return count++;
  };
}

console.log("--- Regular counter ---");
const counter1 = createCounter(0);
counter1();
counter1();
counter1();

console.log("\n--- Arrow counter ---");
const counter2 = createCounterArrow(5);
counter2();
counter2();
counter2();

console.log("\n--- Independent counters ---");
const counterA = createCounter(10);
const counterB = createCounter(100);
counterA();
counterB();
counterA();
counterB();

window._task2 = { createCounter, createCounterArrow };
