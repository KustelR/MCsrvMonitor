const fs = require('fs');

STANDARD_PATH = './reports/';


async function writeSmth(path, text) {
    fs.writeFile(path, text, (err) => {
        if (err) throw err;
    })
}
function createDirectory(path) {
    fs.mkdirSync(path, (err) => {
        if (err) throw err;
    })
}
function isDirExists(path) {
    return fs.existsSync(path, (err) => {
        if (err) throw err;
    })
}


module.exports = {
    async writeNewReport(online, ip = undefined, path = undefined) {
        const now = new Date();
        const text = `${online} players\n${now}`;
        const dateName = `${now.getFullYear()}y${now.getMonth() + 1}m${now.getDate()}d`

        let report_path;
        let server_folder_path;

        if (!path) {
            path = STANDARD_PATH;
        }
        if (!ip) {
            report_path = `${path}/${dateName}.txt`
        }
        else {
            report_path = `${path}/${ip.replaceAll('.', '')}/${dateName}.txt`
            server_folder_path = `${path}/${ip.replaceAll('.', '')}`;
        }
        
        if (!isDirExists(path)) {
            createDirectory(path);
        }
        if (!isDirExists(server_folder_path) && ip != undefined) {
            createDirectory(server_folder_path);
        }
        await writeSmth(report_path, text);
    }
}
