const { Activity, Country } = require('../db');
const { activityExistanceCheck } = require('../utils/activityExistanceCheck');
const { countryExistanceCheck } = require('../utils/countryExistanceCheck');
const { dbParser } = require('../utils/dbParser');
const { loadCountriesToDb } = require('../utils/loadCountriesToDb');

module.exports = async(req, res) => {
    const name = dbParser(req.body.name);
    const level = dbParser(req.body.level);
    const length = req.body.length;
    const season = dbParser(req.body.season);
    let countries = dbParser(req.body.countries);
    
    await loadCountriesToDb();

    if(!await countryExistanceCheck(countries)) {
        return res.json({message: 'Please enter a valid country name'});
    };

    if(await activityExistanceCheck(name, level, length, season)) {
        return res.json({message: 'The activity already exists'});
    }

    const newActivity = await Activity.findOrCreate({
        where: {
            name: name,
            level: level,
            length: length,
            season: season
        }
    });

    for(let i = 0; i < countries.length; i++) {
        const match = await Country.findOne({
            where: {
                name: countries[i]
            }
        })
        await newActivity[0].addCountry(match);
    }

    return res.json('Activity created')
}