Player = require('./player.js')

function Build(nickname) {
    return new Player(nickname, null, [])
}

function BuildFromJson(json) {
    const activity_time = json.activity_time;
    if (activity_time == null) filtered_activity_time = [];
    else filtered_activity_time = activity_time.filter((time) => time != null);

    return new Player(json.nickname, json.faction, filtered_activity_time);
}


module.exports = { 
    "Build": Build,
    "BuildFromJson": BuildFromJson
}