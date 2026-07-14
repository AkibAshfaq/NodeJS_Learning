const fs = require('fs');

function logRequest(filename)
{
    return (req, res, next) => {
        const log = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
        fs.appendFile(filename, log, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
        next();
    };
}

module.exports = { 
    logRequest,
};