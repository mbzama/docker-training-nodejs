var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 8500;
const developer = '{EMP_ID}_NAME';

var server = app.listen(port, function () {
    console.log(developer+" - app running on port.", server.address().port);
});


app.get("/", function(req, res) {
    let response = developer+" - Welcome to Docker Training";
    console.log("/ --> "+response);
    res.status(200).send(response);
});

app.get("/greet", function(req, res) {
    let response = developer+"- Message from user: "+req.query.message;
    console.log("/greet --> "+response);
    res.status(200).send(response);
});
