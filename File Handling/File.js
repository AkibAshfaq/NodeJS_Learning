const fs = require('fs');

//sync
fs.writeFileSync('SyncExample.txt', 'Hello, World! from writeFileSync method.');

// async (has call back function for error handling)
fs.writeFile('AsyncExample.txt', 'Hello, World! from writeFile method.', (err) => {
    if (err) throw err;
    console.log('File has been created and data has been written.');
});

var syncData = fs.readFileSync('SyncExample.txt', 'utf8');
console.log(syncData);

fs.readFile('AsyncExample.txt', 'utf8', (err, data) => {
    if (err) throw err;
    else console.log(data);
});

fs.appendFileSync('SyncExample.txt', '\nThis is an appended text using appendFileSync method.');

fs.appendFile('AsyncExample.txt', '\nThis is an appended text using appendFile method.', (err) => {
    if (err) throw err;
    console.log('Data has been appended to the file.');
});

syncData = fs.readFileSync('SyncExample.txt', 'utf8');
console.log(syncData);

fs.readFile('AsyncExample.txt', 'utf8', (err, data) => {
    if (err) throw err;
    else console.log(data);
});

fs.cpSync('SyncExample.txt', 'SyncExampleCopy.txt');
fs.unlinkSync('SyncExample.txt');

// Async non-blocking

const os = require('os');

console.log(os.cpus().length);