/**
 * -GET / termekek - az összes termék lekérdezése
 * -POST / termekek - egy új termék hozzáadása
 * -DELETE / termékek/id - egy adott termék törlése
 */

function addRoutes(app) {

    app.get('/termekek', termekList());
    app.post('/termekek', addTermek());
    app.delete('/termekek/:id', deleteTermek());


}

const { termekList, addTermek, deleteTermek } = require('../middlewares/termekekMW/products');


module.exports = addRoutes;