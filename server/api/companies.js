const router = require('express').Router()
const {Company} = require('../db/models')
module.exports = router




router.get('/', async (req, res, next) => {
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (error) {
        next(error);
    }
});

router.get('/:companyId', async (req, res, next) => {
    try {
        const company = await Company.findByPk(req.params.companyId);
        if(company) {
            res.json(company);
        } else {
            res.status(404).json('Company is not defined!');
        }
    } catch (error) {
        next(error);
    }
});

