const express = require("express");
const app = express();

app.get("/", function(req, res) {
    let time = new Date();
    let time_2 = time.toGMTString();
    res.send(time_2);
})

app.get("/local", function(req, res) {
    res.send(exports.myDateTime() = function() {
        return Date();
    });
})

// app.get("/local")

app.listen(process.env.PORT || 5000)