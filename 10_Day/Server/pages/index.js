const http = require("http");
const path = require("path");
const url = require("url");
const fs = require("fs");
const data = fs.readFileSync(path.join(__dirname, "/template.html"), "utf8");
const data1 = fs.readFileSync(
  path.join(__dirname, "/template/product.html"),
  "utf8"
);
const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname,"/data/product.json")), "utf-8")
let productHtmlArray = jsonData.map((prod) => {
  let output = data1.replace("{{%IMAGELINK%}}", prod.productImage);
  output = output.replace("{{%MODNAME%}}", prod.modeName);
  output = output.replace("{{%NAME%}}", prod.name);
  output = output.replace("{{%%MODNUMBER%%}}", prod.modelNumber);
  output = output.replace("{{%SIZE%}}", prod.size);
  output = output.replace("{{%CAMERA%}}", prod.camera);
  output = output.replace("{{%PRICE%}}", prod.price);
  output = output.replace("{{%COLOR%}}", prod.color);
  output = output.replace("{{%ID%}}", prod.id);

  return output;
});
function renderProduct() {
    let productHtmlArray = jsonData.map((prod) => {
        let output = data1.replace("{{%IMAGELINK%}}", prod.productImage);
        output = output.replace("{{%MODNAME%}}", prod.modeName);
        output = output.replace("{{%NAME%}}", prod.name);
        output = output.replace("{{%%MODNUMBER%%}}", prod.modelNumber);
        output = output.replace("{{%SIZE%}}", prod.size);
        output = output.replace("{{%CAMERA%}}", prod.camera);
        output = output.replace("{{%PRICE%}}", prod.price);
        output = output.replace("{{%COLOR%}}", prod.color);
        output = output.replace("{{%ID%}}", prod.id);
      
        return output;
      });
}
productHtmlArray = productHtmlArry.join(",");

const server = http.createServer((req, res) => {
  let path = req.url;

  path = path.toLowerCase();
  let { query, pathname } = url.parse(req.url, true);
  pathname = pathname.toLowerCase();
  console.log(pathname);

  if (path === "/home") {
    res.end(data.replace("{{%CONTENT%}}", "You are at home "));
  } else if (path === "/about") {
    res.end(data.replace("{{%CONTENT%}}", "You are at about "));
  } else if (path === "/contact") {
    res.end(data.replace("{{%CONTENT%}}", "You are at contact "));
  } else if (pathname === "/products") {
    console.log(path.indexOf("/products"));

    if (query.id) {
      let id = query.id * 1;

      let findOne = jsonData.find((item) => item.id === id);
      console.log(findOne);
    } else {
      res.end(data.replace("{{%CONTENT%}}", productHtmlArray));
    }
  } else res.end("404");
});

server.listen(1000, () => console.log("server"));
