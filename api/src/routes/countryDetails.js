const { Country, Activity } = require('../db');
const { loadCountriesToDb } = require('../utils/loadCountriesToDb');

module.exports = async(req, res) => {
    const id = req.params.id;
    const parsedId = id.toUpperCase();

    await loadCountriesToDb();

    const dbCountry = await Country.findOne({
        where: {
            id: parsedId
        }
    });

    return res.json(dbCountry);
}