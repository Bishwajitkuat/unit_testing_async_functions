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
        const found = [];
        if (key && value) {
          for (let car of cars) {
            if (car[key] === value) {
              found.push(car);
            }
          }
          resolve(found);
        } else {
          // resolve(cars);
          reject("parameter missing");
        }
      }
    });
  });
}
module.exports = { search };
