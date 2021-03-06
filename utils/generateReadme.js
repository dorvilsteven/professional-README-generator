// TODO: Create a function to write README file
const fs = require('fs');
const { resolve } = require('path');

module.exports = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};