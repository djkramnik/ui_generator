const fs = require('fs')
const targetDir = process.argv[2]


const files = fs.readdirSync(targetDir)
console.log('files?', typeof files[0], files.length)

pbcopy(JSON.stringify(files))
// https://stackoverflow.com/questions/7778539/copy-to-clipboard-in-node-js
function pbcopy(data) {
  var proc = require('child_process').spawn('pbcopy'); 
  proc.stdin.write(data); proc.stdin.end();
}