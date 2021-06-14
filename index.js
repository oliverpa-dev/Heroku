const express = require("express");
const app = express();

app.get("/", function(req, res) {
    let time = new Date();
    // let time_2 = time.toGMTString();
    res.send(time);
})

app.get("/local", function(req, res) {
    let time_3 = Date()
    res.send(time_3);
})

// app.get("/local")

app.listen(process.env.PORT || 5000)