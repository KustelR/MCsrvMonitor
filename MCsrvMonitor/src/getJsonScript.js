getData = require('./mcapirequester');
config = require('./config.json');

async function test(ip) {
    await getData(ip).then(data => { console.log(data) });
}

test(config.ip);

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function () {
        process.exit();
    });
