// Different types of promise functions

// Create a list of promise that resolves after 1 second
function createPromise(list: Array<"resolve" | "reject">) {
  return list.map((item) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (item === "resolve") {
          resolve("Success");
        } else {
          reject(new Error("Error"));
        }
      }, 1000);
    });
  });
}

/* 
Promise.all()
Promise.all() taken an array of promises and returns a promise that resolves only when all of the promises in the array have resolved.
*/
console.log("Promise.all()");
// Resolved
const promiseAll = Promise.all(
  createPromise(["resolve", "resolve", "resolve"])
);
promiseAll.then((res) => console.log(res)).catch((err) => console.log(err));
// Rejected if any one of the promise is rejected
const promiseAll2 = Promise.all(
  createPromise(["resolve", "reject", "resolve"])
);
promiseAll2.then((res) => console.log(res)).catch((err) => console.log(err));

/* 
Promise.allSettled()
Promise.allSettled() returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describes the outcome of each promise.
*/
console.log("Promise.allSettled()");
const promiseAllSettled = Promise.allSettled(
  createPromise(["resolve", "reject", "resolve"])
);
/* Returns an array of objects that each describes the outcome of each promise. It does not reject if any one of the promise is rejected */
promiseAllSettled.then((res) => console.log(res));

/* 
Promise.race()
Promise.race() returns a promise that resolves or rejects as soon as one of the promises in an iterable resolves or rejects, with the value or reason from that promise.
*/
console.log("Promise.race()");
const promiseRace = Promise.race(
  createPromise(["resolve", "reject", "resolve"])
);
// Resolved if any one of the promise is resolved or rejected
promiseRace.then((res) => console.log(res)).catch((err) => console.log(err));

/* 
Promise.any()
Promise.any() returns a promise that resolves as soon as one of the promises in an iterable fulfills, with the value from that promise.
If no promises fulfill, it will reject with an AggregateError error.
*/
console.log("Promise.any()");
const promiseAny = Promise.any(createPromise(["resolve", "reject", "resolve"]));
// Resolved if any one of the promise is resolved
promiseAny.then((res) => console.log(res)).catch((err) => console.log(err));

const promiseAny2 = Promise.any(createPromise(["reject", "reject", "reject"]));
// Rejected if all the promises are rejected
promiseAny2.then((res) => console.log(res)).catch((err) => console.log(err));

export {};
