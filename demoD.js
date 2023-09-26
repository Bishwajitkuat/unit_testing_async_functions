"use strict";
//chaining function calls
function start() {
  return Promise.resolve("Task started!  ");
}

function middle(data) {
  return Promise.resolve(data + " we are in the middle!  ");
}

function end(data) {
  return Promise.resolve(data + " end of the task!  ");
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
  const result = await middle(data);
  const message = await end(result);
  console.log(message + ". We are done!");
}

doTasks();

// if do something inside of then block we can do that but we need to return something which will be use as parameter for next then block
console.log(
  "if do something inside of then block we can do that but we need to return something which will be use as parameter for next then block"
);
start()
  .then((data) => {
    console.log(data);
    return middle(data);
  })
  .then((result) => {
    console.log(result);
    return end(result);
  })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
