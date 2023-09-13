const onlinechecker = require('./onlinechecker');
const config = require('../config.json');

server_data = config.servers;
delay = config.delay;


const d = new Date();
const epoch = d.getTime();

let milisecondsSinceLastTimerTrigger = epoch % delay;
let milisecondsUntilNextTimerTrigger = delay - milisecondsSinceLastTimerTrigger;

async function DoCheck(ip, port) {
    onlinechecker.LogOnline(ip, port);
    setTimeout(async function () {
        setInterval(onlinechecker.LogOnline, delay);
        onlinechecker.LogOnline(ip, port);
    }, milisecondsUntilNextTimerTrigger);
}


for (let i = 0; i < server_data.length; i++) {
    srvData = server_data[i];
    DoCheck(srvData.ip, srvData.port);
}
