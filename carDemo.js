"use strict";

const { search } = require("./carStorageFilePromises");
search().then(console.log).catch(console.log);
search("model", "Nova").then(console.log).catch(console.log);
search("licence", "ABC-1").then(console.log).catch(console.log);
