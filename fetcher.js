const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const URL = args[0];
const path = args[1];

request(URL, (error, response, body) => {
  if (error) {
    console.log(error);
  }

  if (!error) {
    if (response.statusCode === 200) {
      fs.writeFile(path, body, (err) => {
        if (err) throw err;
        console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
      });
    } else {
      console.log(`Error: ${response.statusCode}`);
    }
  }
});