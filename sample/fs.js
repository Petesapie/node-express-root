const fs = require("fs");

function readFileNow() {
    console.log("Start Reading a File!")
    fs.readFile("./sample.txt", { encoding: "utf8" }, (error, data) => {
        console.log("Data Read: ", data);
    });
    console.log("Done Reading a File!")
}

function createNewFileNow() {
    console.log("Start Writing a File!")
    fs.writeFile("./aNewFiletxt", "Hello Cluster!!!!!!!", (error) => {
        if (error) {
            console.log("ERROR FOUND:", error);
        }
        console.log("Done Creating a File!");
    })
}

readFileNow();
createNewFileNow();