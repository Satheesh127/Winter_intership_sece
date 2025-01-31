const http = require("http");
const fs = require("fs");
const url = require("url");
server = http.createServer((req, res) => {
  let { Query } = url.parse(req.url, true).query;
  console.log(Query);
  let {id, name} = Query;
  console.log(id);
  console.log(name);
  let index = fs.readFileSync("index.html", "utf-8");
  res.end(index);
  res.writeHead(200, { "Content-Type": "text/html" });
});
fs.appendFile(fileName, `Server accessed on: ${dateTime}\n`, (err) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }

      console.log(`Logged to file: ${dateTime}`);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Date and time logged successfully!');
    });
server.listen(3000, () => console.log("Server is running"));
