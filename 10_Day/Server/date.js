const fs = require("fs")
const http = require("http")
fs.appendFileSync('timeLogFile.txt', Date().toLocaleString()+'\n')

http.createServer((req, res)=>{
    let file = fs.readFileSync("timelogFile.txt", "utf-8");
    res.end(file);
}).listen(3000, ()=> {
    console.log("Server is running under port 3000");
})

