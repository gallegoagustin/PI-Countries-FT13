const { Country } = require('../db');
const { Op, Sequelize } = require('sequelize');
const { loadCountriesToDb } = require('../utils/loadCountriesToDb');

module.exports = async(req, res) => {
    await loadCountriesToDb();
    
    const queryParam = req.query.name;

    if(queryParam) {
        const parsedQueryParam = queryParam[0].toUpperCase() + queryParam.slice(1).toLowerCase();
        const match = await Country.findAll({
            where: {
                name: {
                    [Op.substring]: Sequelize.literal(parsedQueryParam)
                }
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