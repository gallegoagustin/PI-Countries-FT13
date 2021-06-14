const { Router } = require('express');
const router = Router();

const getCountries = require('./getCountries');
const countryDetails = require('./countryDetails');
const createActivity = require('./createActivity');
const getActivities = require('./getActivities');

router.get('/countries', getCountries);
router.get('/countries/:id', countryDetails);
router.post('/activity', createActivity);
router.get('/activities', getActivities);

module.exports = router;