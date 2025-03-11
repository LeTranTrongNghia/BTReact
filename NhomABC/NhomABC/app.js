var express = require("express");
var app = express();
var controller = require(__dirname + "/app/controllers");
app.use(controller);

var bodyParser = require('body-parser')
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.set("views", __dirname + "/app/views");
app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/public"));
app.use("particals", express.static(__dirname + "/views/particals"));

var server = app.listen(3000, function () {
    console.log("server is running");
});