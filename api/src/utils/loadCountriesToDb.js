const { Country } = require('../db');
const axios = require('axios').default;

const loadCountriesToDb = async() => {
    const dbCountries = await Country.findAll();

    if(dbCountries.length) {
        return null;
    }

    let paises = await axios.get('https://restcountries.eu/rest/v2/all');
    let aux = paises.data;
    
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
}

module.exports = { loadCountriesToDb };