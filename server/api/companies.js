const router = require("express").Router();
const { Company } = require("../db/models");

module.exports = router;

router.get("/subsidiaries", async (req, res, next) => {
  try {
    const companies = await Company.findCompanyWithSubsidiaries(req.query.name);
    res.json(companies[0]);
  } catch (e) {
    next(e)
  }
})

router.get("/", async (req, res, next) => {
  try {
    const companies = await Company.findCompany(req.query.name);
    res.json(companies[0]);
  } catch (error) {
    next(error);
  }
});
