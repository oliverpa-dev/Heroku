const express = require("express");
const app = express();

app.get("/", function(req, res) {
    let time = new Date();
    let time_2 = time.toGMTString();
    res.send(time_2);
})

app.get("/local", function(req, res) {
    let time_3 = Date()
    let time_3GMT = time_3.toGMTString();
    res.send(time_3GMT);
})

// app.get("/local")

app.listen(process.env.PORT || 5000)