const { Activity, Country, country_activity } = require('../db');

module.exports = async(req, res) => {

    if(req.query.name) {
        const activity = await Activity.findOne({
            where: {
                name: req.query.name
            }
        });
    
        const countryCodes = [];
    
        const match = await country_activity.findAll({
            where: {
                activityId: activity.id
            }
        })

        for(let i = 0; i < match.length; i++) {
            const countryName = await Country.findOne({
                where: {
                    id: match[i].countryId
                }
            })
            countryCodes.push(countryName.name)
        }
        return res.json(countryCodes);
    }

    const activities = await Activity.findAll();
    
    return res.json(activities);
}