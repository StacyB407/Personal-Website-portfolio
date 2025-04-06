const fs = require('fs');
const path = require('path');

// Specify the folder path
const folderPath = "C:/Users/admin/OneDrive/Desktop/Brandon's Personal Website/images/HTML";

// Read the folder and list all files
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error("Error reading the folder:", err);
        return;
    }

    console.log("Files in the folder:");
    files.forEach(file => {
        console.log(file);
    });
});