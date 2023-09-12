config = require('../config.json');

writeDown = require('./writedownonline')

ip = config.ip;
port = config.port;
delay = config.delay;


console.log("Starting writing down online...\n\n")
const d = new Date();
const epoch = d.getTime();

let milisecondsSinceLastTimerTrigger = epoch % delay;
let milisecondsUntilNextTimerTrigger = delay - milisecondsSinceLastTimerTrigger;

writeDown.OnlineCheck(ip, port);
setTimeout(function () {
    setInterval(writeDown.OnlineCheck, delay);
    writeDown.OnlineCheck(ip, port);
}, milisecondsUntilNextTimerTrigger);
