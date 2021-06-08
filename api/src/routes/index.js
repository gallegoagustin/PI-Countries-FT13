const { Router } = require('express');
const router = Router();

const getCountries = require('./getCountries');
const countryDetails = require('./countryDetails');
const createActivity = require('./createActivity');

router.get('/countries', getCountries);
router.get('/countries/:id', countryDetails);
router.post('/activity', createActivity);

module.exports = router;