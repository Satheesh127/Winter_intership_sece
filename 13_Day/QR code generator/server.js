const express = require("express");
const app = express();
const path = require("path");
const qrcode = require("qrcode");

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/qr", async (req, res) => {
  console.log(req.body);
  let link = req.body.data;
  let genqr = await qrcode.toDataURL(link);
  res.json(genqr);
});

app.get("/qr", async (req, res) => {
  let link = req.query.link;
  let genqr = await qrcode.toDataURL(link);
  res.json(genqr);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
