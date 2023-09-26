"use strict";
// we are creating a function, when it is called new instance of object will be created.
function randomPromiseObject() {
  return new Promise((resoleve, reject) => {
    setTimeout(() => resoleve("resolves with delary"), Math.random() * 2000);

    setTimeout(() => reject("rejects with random"), Math.random() * 2000);
  });
}
// every function call creates a new object, so all call results will be idependent of each other

randomPromiseObject()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
randomPromiseObject()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
randomPromiseObject()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
