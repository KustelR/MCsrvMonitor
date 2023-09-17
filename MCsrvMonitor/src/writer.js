const fs = require('fs');
const config = require('../config.json');

if (config.path) app_folder_path = config.path;
else app_folder_path = './reports/';



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


function createDirIfNotExists(path) {
    if (!isDirExists(path)) {
        createDirectory(path);
    }
}


function generateReportPath(path, ip) {
    const now = new Date();
    const dateName = `${now.getFullYear()}y${now.getMonth() + 1}m${now.getDate()}d`

    let report_path;
    let server_folder_path;

    if (!ip) {
        report_path = `${path}/${dateName}.txt`
    }
    else {
        report_path = `${path}${ip.replaceAll('.', '')}/${dateName}.txt`
        server_folder_path = `${path}/${ip.replaceAll('.', '')}`;
    }
    return { report_path, server_folder_path }
}


module.exports = {
    async writeNewReport(online, ip = undefined, path = app_folder_path) {
        const text = `${online} players\n${now}`;

        paths = generateReportPath(path, ip);
        
        createDirIfNotExists(path)
        createDirIfNotExists(paths.server_folder_path)

        console.log(`Writing new report on ${ip} to ${paths.report_path}`)
        await writeSmth(paths.report_path, text);
    },
    "pathGen": function (ip) {
        return generateReportPath(app_folder_path, ip)
    },
    "createDirIfNotExists": createDirIfNotExists
}
