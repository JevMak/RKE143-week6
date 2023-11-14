const express = require('express');
const router = express.Router();
const data = require('../data/countries.json');

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:countryId', (req, res) => {
    const requestedCountryId = parseInt(req.params.countryId, 10);
    const country = data.countries.find(countryInData => countryInData.id === requestedCountryId);

    if (!country) {
        res.status(404).json({ error: 'Country not found' });
    } else {
        res.status(200).json(country);
    }
});

module.exports = router;
