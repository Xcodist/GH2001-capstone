const router = require('express').Router()
const {Company} = require('../db/models')

module.exports = router



router.get('/', async (req, res, next) => {
    try {
        console.log('in the query', req.query)
        const companies = await Company.findCompany(req.query.name);
        res.json(companies);
    } catch (error) {
        next(error);
    }
});


