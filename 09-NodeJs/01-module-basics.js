
// 1. creating and manipulating text using fs
// import and use the "fs" module, which stands for "file system."
// provides functionalities for interacting with the file system on your computer or server.
const fs = require("fs");

// create or overwrite a file named "message.txt" using fs.writeFile method from the "fs"
// handles potential errors, and logs a success message once the operation is completed.
fs.writeFile("message.txt", "Hello from NodeJs!", (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});


/* ********************* */


// 2. Reading text file using nodejs
// Reading text file using nodeJs
const fs = require("fs");

// reads the contents of the "message.txt" file in UTF-8 encoding, handles potential errors,
// and logs either the error message or the file contents based on the outcome of the operation.
fs.readFile("message.txt", 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


/* ********************* */
