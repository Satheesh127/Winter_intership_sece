const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
const {engine} = require("express-handlebars");

app.engine("hbs", engine({extname: ".hbs", defaultLayout: false}));

app.set("view engine", "hbs");

app.get("/home", (req, res) => {
    const datachunk = "Happy Birthday Padma Prasath";
    const array = [27, 1, 2025]
    res.render("index", {datachunk, array});
});

app.get("/about", (req, res)=>{
    const array = [27, 1, 2025]
    res.render("about", {array});
})

app.get("/contact", (req, res)=>{
    res.render("contact");
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
