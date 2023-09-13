getData = require('./src/mcapirequester')


getData('mc.hypixel.net').then(data => {console.log(data) })