"use strict";

const fs = require("fs");
const storageFile = "./cars.json";

function search(key, value) {
  return new Promise((resolve, reject) => {
    fs.readFile(storageFile, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const cars = JSON.parse(data);
        if (key && value) {
          let found = [];
          for (let car of cars) {
            if (car[key] === value) {
              found.push(car);
            }
          }
          resolve(found);
        } else {
          resolve(cars);
        }
      }
    });
  });
}
module.exports = { search };
