"use strict";

function start() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("Task started!   "), 2000)
  );
}

function middle(data) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(`${data}, we are in middle!   `), 3000)
  );
}

function end(data) {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve(`${data}, end of task!   `), 1000)
  );
}

// with then catch
start()
  .then((data) => middle(data))
  .then((result) => end(result))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// with async function call
async function doTasks() {
  const data = await start();
  console.log(data + " moving to next phase....");
  const result = await middle(data);
  console.log(result + " moving to next phase....");
  const message = await end(result);
  console.log(message + ". We are done! from async func");
}
doTasks();
// self invoking functions
(async () => {
  console.log("hello from self invoking functions");
  const data = await start();
  console.log("self invoking func : " + data + " moving to next phase....");
  const result = await middle(data);
  console.log("self invoking func : " + result + " moving to next phase....");
  const message = await end(result);
  console.log(
    "self invoking func : " + message + ". We are done! from async func"
  );
})();
