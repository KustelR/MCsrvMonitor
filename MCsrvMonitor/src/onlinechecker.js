const { StorePlayerStatistics } = require('./playerSystem/playerReportOperator');

getData = require('./mcapirequester')
writer = require('./writer');


let max_online = 0;
let startDate;


async function getData(ip, port=undefined) {
    let jsonData;
    await getData(ip, port).then(data => { jsonData = data });

    return jsonData;
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

    let jsonData;
    let online;
    try {
        console.log(`Getting online for ${ip}`);
        await getData(ip, port).then(data => { jsonData = data});
        online = jsonData.players.now;
 
        await writeOnline(online, ip);
        await StorePlayerStatistics(jsonData.players.sample, ip);
    }
    catch (err) {
        console.error(err)
    }

    console.log(`${online} players on ${Date()}\n`);
}
}
