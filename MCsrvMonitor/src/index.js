const onlinechecker = require('./onlinechecker');
const config = require('../config.json');

ip = config.ip;
port = config.port;
delay = config.delay;


const d = new Date();
const epoch = d.getTime();

let milisecondsSinceLastTimerTrigger = epoch % delay;
let milisecondsUntilNextTimerTrigger = delay - milisecondsSinceLastTimerTrigger;

onlinechecker.LogOnline(ip, port);
setTimeout(function () {
    setInterval(onlinechecker.LogOnline, delay);
    onlinechecker.LogOnline(ip, port);
}, milisecondsUntilNextTimerTrigger);
