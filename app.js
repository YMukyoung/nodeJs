const express = require("express");
const url = require("url");

const app = express();

let param = [
    {
        "name" : "윤무경" ,
        "HP"   : "010-9501-9306"
    }
];

//서버 Start
app.get("/", (req, res) => {
    console.log(url.URL);
});

app.post("/post/test", (req, res) => {
    let ex = {
            "name" : "push" ,
            "HP"   : "010-1234-5678"
    };
    param.push(ex);
    console.log(param);
    res.send(param);
});

var server = app.listen(3000, () => {
    console.log("server start!!");
});