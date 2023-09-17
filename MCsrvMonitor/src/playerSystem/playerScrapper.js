PlayerBuilder = require('./playerBuilder');
player = require('./player');


module.exports = function scrapPlayerData(jsonServerData)
{
    players = [];
    for (let i = 0; i < jsonServerData.players; i++) {
        players.push(PlayerBuilder.Build())
    }

    return players;
}