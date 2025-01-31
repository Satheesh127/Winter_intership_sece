const os = require("os")
console.log("Home Directory             : ", os.homedir());
console.log("Temporary Directory        : ", os.tmpdir());
console.log("CPU                        : ", os.cpus());
console.log("Architecture               : ", os.arch());
console.log("Platform                   :", os.platform());
console.log("HostName                   :", os.hostname());
console.log("Freely memory              : ", os.freemem()/1024);
console.log("TOtal Memory               : ", os.totalmem()/1024);

const path = require("path")
console.log("Current working Directory  : ", __dirname)
console.log("File name                  : ", __filename);
console.log("Base Name                  : ", path.basename("C:\Users\moham\OneDrive\Desktop\MERN Intern\Server\index.js"));
console.log("Ext name                   : ", path.extname("index.js"));
console.log("Join method                : ", path.join("folder", "index.js"));
console.log("Parse Method               : ", path.parse("C:\Users\moham\OneDrive\Desktop\MERN Intern\Server\index.js"));



