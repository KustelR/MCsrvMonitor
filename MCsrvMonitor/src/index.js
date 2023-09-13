const onlinechecker = require('./onlinechecker');
const config = require('../config.json');

server_data = config.servers;
delay = config.delay;


async function DoCheck(ip, port) {
    onlinechecker.LogOnline(ip, port);
    setInterval(async function () { onlinechecker.LogOnline(ip, port); }, delay);
}


for (let i = 0; i < server_data.length; i++) {
    srvData = server_data[i];
    const ip = srvData.ip;
    const port = srvData.port;
    DoCheck(ip, port);
}
