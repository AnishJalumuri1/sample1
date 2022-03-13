const express = require("express");
const app = express();
const PORT = 5000;
const bp = require("body-parser");
const qr = require("qrcode");

app.set("view engine", "ejs")

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())














app.get("/", (req, res) => {
  res.render("index")
})


app.post("/scan", (req, res) => {
  const url = req.body.url;
  if (url.length === 0) res.send("empty data")
  qr.toDataURL(url, (err, src) => {
    if (err) res.send("error ocured");
    res.render("scan", { src })
  })
})

app.listen(PORT, () => {
  console.log("server is running")
})