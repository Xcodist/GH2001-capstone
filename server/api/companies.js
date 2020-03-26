const router = require('express').Router()
const {Company} = require('../db/models')
const Sequelize = require('sequelize');

module.exports = router



router.get('/', async (req, res, next) => {
    try {
        console.log(req.query.name)
        const companies = await Company.findCompany(req.query.name);
        res.json(companies);
    } catch (error) {
        next(error);
    }
});


