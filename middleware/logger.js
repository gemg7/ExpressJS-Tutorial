const moment = require('moment');

// Anytime we make a request, this middleware will run
const logger = function(req, res, next) {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

module.exports = logger;