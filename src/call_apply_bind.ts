const obj = {
  name: "obj",
};

function sum(a: number, b: number) {
  console.log(this.name);
  return a + b;
}

// bind() returns a new function with the same body and scope as the original function,
const sum1 = sum.bind(obj, 1, 2);
console.log(sum1());

// call() calls a function with a given this value and arguments provided individually.
console.log(sum.call(obj, 1, 2));

// apply() calls a function with a given this value, and arguments provided as an array
console.log(sum.apply(obj, [1, 2]));

export {};
