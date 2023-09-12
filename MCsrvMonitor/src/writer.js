const fs = require('fs');

STANDARD_PATH = './reports/';


async function writeSmth(path, text) {
    fs.writeFile(path, text, (err, data) => {
        if (err) throw err;
    })
}


async function createDirectory(path) {
    await fs.mkdir(path, (err) => {
        if (err) throw err;
    })
}


function isDirExists(path) {
    return fs.existsSync(path, (err) => {
        if (err) throw err;
    })
}


module.exports = {
    async writeNewReport(online, path = undefined) {
        const now = new Date();
        const text = `${online} players\n${now}`;
        const dateName = `${now.getFullYear()}y${now.getMonth() + 1}m${now.getDate()}d`

        if (!path) {
            path = STANDARD_PATH;
        }
        const report_path = `${path}/${dateName}.txt`

        if (!isDirExists(path)) {
            await createDirectory(path);
        }
        await writeSmth(report_path, text);
    }
}
