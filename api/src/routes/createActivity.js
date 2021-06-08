const { Activity } = require('../db');

module.exports = async(req, res) => {
    const name = req.body.name;
    const level = req.body.level.toString();
    const length = req.body.length;
    const season = req.body.season;
    const parsedSeason = season.charAt(0).toUpperCase() + season.slice(1).toLowerCase(); 

/*     const check = await Activity.findAll({
        where: {
            name: name,
            level: level,
            length: length,
            season: season
        }
    })

    if(check) {
        return res.json({message: 'The activity already exists'});
    } */

    await Activity.findOrCreate({
        where: {
            name: name,
            level: level,
            length: length,
            season: parsedSeason
        }
    })

    return res.json('Activity created')
}