module.exports = function getData(url, port = 25565) {
    return fetch('https://mcapi.us/server/status?ip=' + url + '&port=' + port)
        .then(response => response.json())
        .then(data => {return data });
}
