const fs = require('fs');
const http = require('http');

function getCurrentDateTime() {
  const now = new Date();
  const date = now.toDateString();
  const time = now.toTimeString();
  return `${date} - ${time}`;
}

const fileName = 'log.txt';

const server = http.createServer((req, res) => {
    const dateTime = getCurrentDateTime();
    fs.appendFile(fileName, `Server accessed on: ${dateTime}\n`, (err) => {
})

server.listen(3000, () => {console.log("Server is running");
})})