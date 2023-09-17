Player = require('./player.js')

function Build(id, nickname) {
    return new Player(id, nickname)
}

function BuildFromJson(json) {
    const activity_time = json.activity_time;
    if (activity_time == null) filtered_activity_time = [];
    else filtered_activity_time = activity_time.filter((time) => time != null);

    return new Player(json.id, json.nickname, json.faction, filtered_activity_time, json.last_login, json.last_activity_check_date, json.login_count);
}


module.exports = { 
    "Build": Build,
    "BuildFromJson": BuildFromJson
}