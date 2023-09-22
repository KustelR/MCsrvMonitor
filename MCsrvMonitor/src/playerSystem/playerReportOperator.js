const writer = require('../writer.js');
const fs = require('fs');
const PlayerBuilder = require('./playerBuilder.js');
config = require('../../config.json');

let app_folder_path = config.path;
if (!app_folder_path) {
    app_folder_path = './reports/'
}

function generatePath(server_ip, path = app_folder_path) {
    server_ip = server_ip.replaceAll('.', '');
    const server_folder_path = `${path}${server_ip}`
    const player_report_folder_path = `${server_folder_path}/playerReports/`

    writer.createDirIfNotExists(server_folder_path);
    writer.createDirIfNotExists(player_report_folder_path);
    
    return player_report_folder_path
}

async function writePlayerReport(player, report_file_path) {
    fs.writeFile(report_file_path + '.json', JSON.stringify(player), (err) => {
    if (err) throw err;
    })
}

function readPlayerDataJson(player_file_path) {
    const player_source = fs.readFileSync(player_file_path, 'utf8');
    if (player_source == "") return null;
    playerDataJson = JSON.parse(player_source);
    
    return PlayerBuilder.BuildFromJson(playerDataJson);
}


function loadPlayerData(server_ip, player_name) {
    report_folder_path = generatePath(server_ip);

    const player_file_path = `${report_folder_path}${player_name}.json`;
    if (fs.existsSync(player_file_path)) {
        return readPlayerDataJson(player_file_path);
    }
    else return null;
}

function updatePlayerData(server_ip, player_name) {
    const name = player_name;

    let player_data = loadPlayerData(server_ip, name);
    if (player_data === null) {
        player_data = PlayerBuilder.Build(name);

        console.log(`Unique player detected, id ${player_name}`)
        
    }
    player_data.updateActivityData();

    writePlayerReport(player_data, `${server_folder_path}${name}`)
}


async function StorePlayerStatistics(raw_players, server_ip) {
        actual_players = []
        players = [];

        server_folder_path = generatePath(server_ip);

        current_players_names = raw_players.map((x) => x.name);
    for (let i = 0; i < current_players_names.length; i++) {
        updatePlayerData(server_ip, current_players_names[i])
    }
        
    }


module.exports = StorePlayerStatistics;
