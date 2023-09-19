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
    
    return player_report_folder_path
}

async function getLastId(server_folder_path) {
    lastIdPath = `${server_folder_path}lastId.txt`;
    await writer.createDirIfNotExists(server_folder_path);
    if (!fs.existsSync(lastIdPath)) fs.writeFileSync(lastIdPath, '0');
    data = fs.readFileSync(lastIdPath, 'utf8');
    return data;
}

async function writePlayerReport(player, report_file_path) {
    fs.writeFile(report_file_path + '.json', JSON.stringify(player), (err) => {
    if (err) throw err;
    })
}

function loadPlayerData(server_ip, player_name) {
    report_folder_path = generatePath(server_ip);

    const player_file_path = `${report_folder_path}${player_name}.json`;
    if (fs.existsSync(player_file_path)) {
        playerDataJson = JSON.parse(fs.readFileSync(player_file_path, 'utf8'));
        return PlayerBuilder.BuildFromJson(playerDataJson);
    }
    else return null;

}

function updatePlayerData(server_ip, player_name, last_id) {
    const name = player_name;
    let isUniquePlayer = false;

    let player_data = loadPlayerData(server_ip, name);
    if (player_data === null) {
        player_data = PlayerBuilder.Build(last_id, name);
        isUniquePlayer = true;

        console.log(`Unique player detected, id ${last_id}`)
        if (isUniquePlayer) {
            last_id++;
            fs.writeFileSync(lastIdPath, last_id.toString());
        }
        
    }
    player_data.updateActivityData();

    writePlayerReport(player_data, `${server_folder_path}${name}`)

    return isUniquePlayer;
}


async function StorePlayerStatistics(raw_players, server_ip) {
        actual_players = []
        players = [];

        server_folder_path = generatePath(server_ip);

        let last_id = await getLastId(server_folder_path);

        current_players_names = raw_players.map((x) => x.name);
    for (let i = 0; i < current_players_names.length; i++) {
        updatePlayerData(server_ip, current_players_names[i], last_id)
    }
        
    }


module.exports = StorePlayerStatistics;
