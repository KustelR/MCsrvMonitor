Player = require('./player')

function Build(nickname) {
    return new Player(nickname)
}


module.exports = { 
    "Build": Build
}