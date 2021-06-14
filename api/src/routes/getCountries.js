const { Country } = require('../db');
const { Op } = require('sequelize');
const { loadCountriesToDb } = require('../utils/loadCountriesToDb');
const { dbParser } = require('../utils/dbParser');


module.exports = async(req, res) => {
    await loadCountriesToDb();
    
    let queryParam = req.query.name;

    if(queryParam) {

        if(queryParam === 'all') {
                const match = await Country.findAll();
                return res.json(match);
            }

        const parsedQueryParam = dbParser(queryParam);
        
        let match = await Country.findAll({
            where: {
                name: {
                    [Op.substring]: queryParam
                }
            }
        })
        
        let match2 = await Country.findAll({
                where: {
                    name: {
                        [Op.substring]: parsedQueryParam
                    }
                }
        })

        match = match.concat(match2);

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