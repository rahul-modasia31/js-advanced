/*
Generator functions are functions that can be paused and resumed on demand.
They are created by adding an asterisk (*) to the function keyword.
The yield keyword is used to pause and resume a generator function.
*/

// Generator function

function* generatorFunction() {
  console.log("I will be executed after the first next() is called");
  yield "Hello, ";

  console.log("I will be printed after the second next() is called");
  yield "World!";
}

const generatorObject = generatorFunction();
// When we call next(), the generator function is executed until the first yield keyword
console.log(generatorObject.next()); // { value: 'Hello, ', done: false }
console.log(generatorObject.next()); // { value: 'World!', done: false }

// Fibonacci sequence generator function

function* fibonacci() {
  let current = 0;
  let next = 1;

  // Infinite yield -> this generator function will never return done: true
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const sequence = fibonacci();

for (let i = 0; i < 10; i++) {
  console.log(sequence.next().value);
}

export {};
