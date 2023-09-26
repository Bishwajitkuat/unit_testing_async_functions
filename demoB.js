"use strict";
// we creating an object
const randomPromiseObject = new Promise((resoleve, reject) => {
  setTimeout(() => resoleve("resolves with delary"), Math.random() * 2000);

  setTimeout(() => reject("rejects with random"), Math.random() * 2000);
});
// we create only one object. So when the state is reached it can't change after that. All calls result the same.
randomPromiseObject
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
randomPromiseObject
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
randomPromiseObject
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
