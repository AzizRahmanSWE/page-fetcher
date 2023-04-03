const request = require('request');
const fs = require('fs');


const url = process.argv[2]; // takes in the url
const fileDirectoryPath = process.arg[3]; // takes in the file path

request(url, (error, response, body) => {
  if(error) {
    console.log(`Error: ${error}`)
  }

  fs.writeFile(fileDirectoryPath, body, (error) => {
    if (error) {
      console.log(`Error:  ${error}`);
      return;
    }

    console.log(`The File ${body.length} bytes has been downloaded and saved to ${fileDirectoryPath}`);
  });
});
