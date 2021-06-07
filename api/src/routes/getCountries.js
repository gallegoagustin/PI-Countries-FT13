const {Country, Activity} = require('../db');
const axios = require('axios').default;

module.exports = async(req, res) => {
    let paises = await axios.get('https://restcountries.eu/rest/v2/all');
    let aux = paises.data;
    let result = [];
    let i = 0;

    for(let i = 0; i < aux.length; i++) {
        await Country.findOrCreate({
            where: {
                id: aux[i].alpha3Code,
                name: aux[i].name,
                flag: aux[i].flag,
                continent: aux[i].region,
                capital: aux[i].capital,
                subregion: aux[i].subregion,
                area: aux[i].area,
                population: aux[i].population
            }
        })
    }

    const dbCountries = await Country.findAll();

    while(i < 10) {
        result.push(dbCountries[i]);
        i++
    }

    return res.json(result);
}