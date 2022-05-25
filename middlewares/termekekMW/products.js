const dbData = require("../../middlewares/queries");

//termékek lekérdezése
module.exports.termekList = () => {
    return (req, res, next) => {
        dbData.termekList((err, data) => {
            if (err) throw err;
            console.log(`Új ${req.method} kérés a /termekek felé`);
            res.json(data);
        });
    };
};

//új termék hozzáadása
module.exports.addTermek = () => {
    return (req, res, next) => {
        if (req.method === "POST") {
            dbData.addTermek(req.body, (err, data) => {

                if (err) {
                    res.status(400),
                        res.json({
                            status: "Hiányos adatok!",
                        });
                } else
                    console.log(`Új ${req.method} kérés a /termekek felé`);
                res.status(201),
                    res.json({
                        "megnevezes": req.body.megnevezes,
                    });
            });
        }
    };
};

//termék törlése

module.exports.deleteTermek = () => {

    return (req, res, next) => {

        // console.log(req.params.id);       

        if (req.method === "DELETE") {
            dbData.deleteTermek(req.params.id, (err, data) => {
                if (err) {
                    res.status(404),
                        res.json({
                            status: "Az termék nem létezik",
                        });
                } else
                    console.log(`Új ${req.method} kérés a /termekek felé`);
                res.status(204),
                    res.json({
                        status: "Az termék törölve!",
                    });
            });
        };

    }

}