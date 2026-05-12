const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "logs", "app.log");

function log(message) {
    const time = new Date().toISOString();

    const fullMessage = `[${time}] ${message}\n`;

    console.log(fullMessage);

    fs.appendFileSync(logFile, fullMessage);
}

module.exports = log;