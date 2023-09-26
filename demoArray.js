"use strict";

const promises = [
  Promise.resolve("first ok"),
  Promise.reject("second rejected"),
];
// testing promiss.all(), if one of the promises is rejected all will be rejected
Promise.all(promises)
  .then((result) => console.log(result))
  .catch((err) => console.log("All rejected. " + err));

function randomPromiseObject() {
  return new Promise((resoleve, reject) => {
    setTimeout(() => resoleve("resolves with delary"), Math.random() * 2000);

    setTimeout(() => reject("rejects with random"), Math.random() * 2000);
  });
}

const promises_1 = [
  randomPromiseObject(),
  randomPromiseObject(),
  randomPromiseObject(),
];

Promise.all(promises_1)
  .then((result) => console.log(result))
  .catch((err) => console.log("All rejected. " + err));

async function runAll(promiseArray) {
  try {
    const result = await Promise.all(promiseArray);
    for (const item of result) {
      console.log("from async: " + item);
    }
  } catch (err) {
    console.log("from async: " + err);
  }
}

runAll(promises_1);
