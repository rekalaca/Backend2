const connection = require('../services/connection');

module.exports.termekList = function (callback) {
    myQuery = `SELECT termekek.megnevezes, termekek.ar FROM termekek`;
    connection.query(myQuery, (err, result, fields) => {
        if (err) callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    });
};

module.exports.addTermek = function (data, callback) {
    myQuery = `INSERT INTO termekek (megnevezes, ar) VALUES ('${data.megnevezes}','${data.ar}')`;
    connection.query(myQuery, (err, result, fields) => {
        if (err) callback(err.sqlMessage, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    });
};

module.exports.deleteTermek = function (id, callback) {
    myQuery = `DELETE FROM termekek WHERE termekek.id = '${id}'`;
    connection.query(myQuery, (err, result, fields) => {
        if (err) callback(err, null);
        else {
            callback(null, JSON.parse(JSON.stringify(result)));
        }
    });
};

