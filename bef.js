const Befunge = require('befunge93');
const fs = require('fs');

if (process.argv.length < 3)
    process.exit(1);

const filePath = process.argv[2];
fs.readFile(filePath, 'utf8', (err, befungeProgram) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    let befunge = new Befunge();
    befunge.run(befungeProgram)
        .then(output => {
            console.log("Output:", output);
        })
        .catch(err => {
            console.error("Error:", err);
        });
});