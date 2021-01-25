"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var data = axios_1["default"].get("https://jsonplaceholder.typicode.com/todos/1").then(function (data) { return console.log(data.data); });
