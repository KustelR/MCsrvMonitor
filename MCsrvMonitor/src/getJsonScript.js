getData = require('./mcapirequester');

async function test(ip) {
    await getData(ip).then(data => { console.log(data) });
}

test('mc.factionscraft.ru');

require('readline')
    .createInterface(process.stdin, process.stdout)
    .question("Press [Enter] to exit...", function () {
        process.exit();
    });
