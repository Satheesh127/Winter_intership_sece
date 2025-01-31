const fs = require("fs")

/* 
    // Creating file
fs.writeFile("sample.txt", "created a file using fs.", (err) => {
    if(err){
        console.log(err);
    }
}); */

// appending words
// fs.appendFile("sample.txt", "\nappended data", () => {})

// readfile
// fs.readFile("sample.txt", "utf8", (err, data) => {console.log(data);})

// delete file
// fs.unlink("sample.txt", (err)=> {});

// exception handling
/*
try {
    fs.readFile("sample.tt", "utf8", (err, data) => {console.log(data);})
    if(err) throw err  
} catch (error) {
    console.log(error.message);
    
}

process.on("uncaughtException", (err) => {
    console.log(err.message);
    
})
*/

// Make a New Directory
// fs.mkdir("Folder", (err)=>{})

// Remove a Directory
// fs.rmdir("folder", (err)=>{})

    /*
fs.readFile("sample.txt", "utf-8", (err, data) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})
console.log("Outside");
*/

// const fileData = fs.readFileSync("sample.txt", "utf-8")
// console.log(fileData);
// console.log("outside");

/*
fs.writeFile("example.txt", "Example File Created", (err) => {

    fs.appendFile("example.txt", "\nAppending da dei", () => {
        
        fs.readFile("example.txt", "utf-8", (err, data) => {console.log(data);

        });
    });

}) */

// fs.unlink("sample.txt", (err) => {})

// fs.writeFileSync("example.txt", "Hello world")
// fs.appendFileSync("example.txt", "Appending new World")
// const h = fs.readFileSync("example.txt", "utf-8")

// console.log(h)
