const { Activity } = require('../db');

const activityExistanceCheck = async(name, level, length, parsedSeason) => {
    const check = await Activity.findAll({
        where: {
            name: name,
            level: level,
            length: length,
            season: parsedSeason
        }
    })

    if(check.length) {
        return true;
    }

    return false;
}

module.exports = { activityExistanceCheck };