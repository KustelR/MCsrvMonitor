writer = require('./writer');
getData = require('./mcapirequester')
config = require('../config.json');

ip = config.ip;
port = config.port;
delay = config.delay;
let max_online = 0;
let startDate;


async function getOnline() {
    let jsonData;
    await getData(ip).then(data => { jsonData = data });
    const online = jsonData.players.now;

    return online;
}


async function writeOnline(online, ip) {
    if (max_online < online) {
        max_online = online;
        await writer.writeNewReport(online, ip);
    }
}


async function WriteDownOnline() {
    now = new Date()
    if (startDate != now.getDate()) {
        startDate = now.getDate();
        max_online = 0
    }

    let online;
    try {
        await getOnline().then(data => { online = data });
        await writeOnline(online, ip);
    }
    catch (err) {
        console.error(err)
    }

    console.log(`${online} players on ${Date()}\n`);
}


console.log("Starting writing down online...\n\n")
const d = new Date();
const epoch = d.getTime();

let milisecondsSinceLastTimerTrigger = epoch % delay;
let milisecondsUntilNextTimerTrigger = delay - milisecondsSinceLastTimerTrigger;

WriteDownOnline();
setTimeout(function () {
    setInterval(WriteDownOnline, delay);
    WriteDownOnline();
}, milisecondsUntilNextTimerTrigger);
