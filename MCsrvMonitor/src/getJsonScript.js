getData = require('./mcapirequester');
config = require('../config.json');


async function test(ip) {
    await getData(ip).then(data => { console.log(data.players) });
}


for (let i = 0; i < config.servers.length; i++) {
    test(config.servers[i].ip);
}

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function () {
        process.exit();
    });
