const { Router } = require('express');
const router = Router();

const getCountries = require('./getCountries');
const countryDetails = require('./countryDetails');
const countryQuery = require('./countryQuery')
const createActivity = require('./createActivity');

router.get('/countries', getCountries);
router.get('/countries/:id', countryDetails);
router.get('/countries?name', countryQuery);
router.post('/activity', createActivity);

module.exports = router;