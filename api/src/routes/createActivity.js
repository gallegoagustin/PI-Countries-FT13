const { Activity, Country } = require('../db');
const { Sequelize, Op } = require('sequelize');
const { activityExistanceCheck } = require('../utils/activityExistanceCheck');
const { loadCountriesToDb } = require('../utils/loadCountriesToDb');

module.exports = async(req, res) => {
    const name = req.body.name;
    const level = req.body.level.toString();
    const length = req.body.length;
    const season = req.body.season;
    const parsedSeason = season.charAt(0).toUpperCase() + season.slice(1).toLowerCase();
    const countries = req.body.countries;

    await loadCountriesToDb();

    if(await activityExistanceCheck(name, level, length, parsedSeason)) {
        return res.json({message: 'The activity already exists'});
    }

    const newActivity =
        await Activity.findOrCreate({
            where: {
                name: name,
                level: level,
                length: length,
                season: parsedSeason
            }
        });

    let aux = [];
    
    for(let i = 0; i < countries.length; i++) {
        const abc = await Country.findOne({
            where: {
                name: countries[i]
            }
        })
        await newActivity.addCountry(abc)
    }
    console.log(aux);

    
    return res.json('Activity created')
}