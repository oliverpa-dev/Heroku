const express = require("express");
const app = express();
const https = require("http");

// const options = {
//     hostname: 'https://date-time-server.herokuapp.com/',
//     port: 443,
//     path: '/local',
//     method: 'GET'
// }

app.get("/home1", function(req, res) {
    let time = new Date();
    let time_2 = time.toGMTString();
    res.send(time_2);
})

// app.get("/local")

app.listen(process.env.PORT || 5000)