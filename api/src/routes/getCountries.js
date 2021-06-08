const { Country, Activity } = require('../db');
const { loadCountriesToDb } = require('../utils/loadCountriesToDb');

module.exports = async(req, res) => {
    await loadCountriesToDb();
    
    const queryParam = req.query.name;

    if(queryParam) {
        const match = await Country.findAll({
            where: {
                name: queryParam
            }
        })

        if(!match.length) {
            return res.json({message: 'We could not find any country'})
        } else {
            return res.json(match);
        }
    }

    const match = await Country.findAll();
    let result = [];
    let i = 0;

    while(i < 10) {
        result.push(match[i]);
        i++
    }

    return res.json(result);
}