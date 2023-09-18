const fetch = require('node-fetch');


module.exports = async function getData(url, port = 25565) {
    return fetch('https://mcapi.us/server/status?ip=' + url + '&port=' + port)
        .then(response => response.json())
        .then(data => {
            if (data.error) throw new Error(data.error);
            return data;
        });
}
