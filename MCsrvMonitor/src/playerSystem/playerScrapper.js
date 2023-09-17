PlayerBuilder = require('./playerBuilder');
player = require('./player');


function scrapPlayerData(jsonServerData, server_ip)
{
    players = jsonServerData.players;
    for (let i = 0; i < players.length; i++) {

    }
)
    
}


async function writePlayerData(players) {
    for (let i = 0; i < players.length; i++) {
        await player.writePlayerData(players[i]);
    }
}

module.exports = {
    writePlayerData: writePlayerData
}