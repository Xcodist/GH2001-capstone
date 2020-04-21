const router = require("express").Router();
const { Company, Subsidiary } = require("../db/models");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const subsidiaryChild = await Subsidiary.findSubsidiary(req.query.name);
    res.json(subsidiaryChild[0]);
  } catch (error) {
    next(error);
  }
});
