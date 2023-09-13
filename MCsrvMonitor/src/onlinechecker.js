getData = require('./mcapirequester')
writer = require('./writer');


let max_online = 0;
let startDate;


async function getOnline(ip, port=undefined) {
    let jsonData;
    await getData(ip, port).then(data => { jsonData = data });
    const online = jsonData.players.now;

    return online;
}


async function writeOnline(online, ip) {
    if (max_online < online) {
        max_online = online;
        await writer.writeNewReport(online, ip);
    }
}


module.exports = { LogOnline: async function WriteDownOnline(ip, port=undefined) {
    now = new Date()
    if (startDate != now.getDate()) {
        startDate = now.getDate();
        max_online = 0
    }

    let online;
    try {
        await getOnline(ip, port).then(data => { online = data });
        await writeOnline(online, ip);
    }
    catch (err) {
        console.error(err)
    }

    console.log(`${online} players on ${Date()}\n`);
}
}
