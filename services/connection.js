const mysql = require('mysql');
const config = require('./config/config.json');

module.exports = mysql.createConnection({
    host: config.host,
    database: config.database,
    port: config.port,
    user: config.user,
    password: config.password
});

module.exports.connect(function (err) {
    if (err) throw err;
    console.log('Az adatbázis kapcsolat létrejött!');
});