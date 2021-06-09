const { Country } = require('../db');

const countryExistanceCheck = async(array) => {
    let dbCountries = [];

    for(let i = 0; i < array.length; i++) {
        const match = await Country.findOne({
            where: {
                name: array[i]
            }
        })
        if(match !== undefined && match !== null) {
            dbCountries.push(match);
        }
    }

    if(dbCountries.length === array.length) {
        return true;
    }

    return false;
}

module.exports = { countryExistanceCheck };