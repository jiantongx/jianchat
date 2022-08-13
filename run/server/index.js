var path = require("path");
var value = require("./value");
var express = require("express");
var app = express();
app.use(express.static(path.join(__dirname, "../html")));
app.listen(value.port);
