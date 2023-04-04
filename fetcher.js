const request = require('request');
const fs = require('fs');


const url = process.argv[2]; // takes in the url
const fileDirectoryPath = process.argv[3]; // takes in the file path

// `request` function makes the HTTP request to the URL 
request(url, (error, response, body) => { // function takes in three arugments as callback.

  if(error) {
    console.log(`Error: ${error}`)
  }

  // use fs.writeFile function to write the body to the specific file directory path
  fs.writeFile(fileDirectoryPath, body, (error) => { // cb fn to be executed once file is written.

    if (error) {
      console.log(`Error:  ${error}`);
      return;
    }

  // success msg once done downloading.
    console.log(`Downloaded and saved ${body.length} bytes to ${fileDirectoryPath}`);
  });
});

