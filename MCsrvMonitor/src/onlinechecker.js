const StorePlayerStatistics = require('./playerSystem/playerReportOperator.js');
getData = require('./mcapirequester.js')
writer = require('./writer.js');


let max_online = 0;
let startDate;


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
        console.log(`Getting online for ${ip}`);
        const jsonData = await getData(ip, port);
        online = jsonData.players.now;
 
        writeOnline(online, ip);
        StorePlayerStatistics(jsonData.players.sample, ip);
    }
    catch (err) {
        console.error(err)
    }

    console.log(`${online} players on ${Date()}\n`);
}
}
