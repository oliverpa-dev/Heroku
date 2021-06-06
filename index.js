const express = require("express");
const app = express();

app.get("/", function(req, res) {
    let time = new Date();
    res.send(time);
})

app.listen(process.env.PORT || 5000)