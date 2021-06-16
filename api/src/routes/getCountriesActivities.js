const { Country, Activity, country_activity } = require('../db');

module.exports = async(req, res) => {
    let dbCountries = await Country.findAll();
    const match = await country_activity.findAll();

    for(let i = 0; i < dbCountries.length; i++) {
        dbCountries[i] = {
            ...dbCountries[i].dataValues,
            activities: []
        }
    }

    for(let i = 0; i < match.length; i++) {
        const activityId = match[i].activityId;
        const countryId = match[i].countryId;

        const activity = await Activity.findOne({
            where: {
                id: activityId
            }
        })

        for(j = 0; j < dbCountries.length; j++) {
            if(dbCountries[j].id === countryId) {
                dbCountries[j].activities.push(activity)
            }
        }
    }

    res.json(dbCountries)       
}