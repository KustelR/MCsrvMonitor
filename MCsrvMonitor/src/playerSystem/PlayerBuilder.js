Player = require('./player.js')

function Build(id, nickname) {
    return new Player(id, nickname)
}


module.exports = { 
    "Build": Build
}