const { Country, Activity } = require('../db');
const { dbParser } = require('../utils/dbParser');
const { loadCountriesToDb } = require('../utils/loadCountriesToDb');

module.exports = async(req, res) => {
    const id = dbParser(req.params.id, true);

    await loadCountriesToDb();

    const dbCountry = await Country.findOne({
        where: {
            id: id
        }
    });

    return res.json(dbCountry);
}