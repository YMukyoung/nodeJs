const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

//서버 Start
app.get("/", (req, res) => {
    res.render("login", {});
});

app.use("/css", express.static("css"));
app.use("/js", express.static("js"));

var server = app.listen(3000, () => {
    console.log("server start!!");
});