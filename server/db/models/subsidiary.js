const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../db");
const Company = require("./company")

const Subsidiary = db.define("subsidiary", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
})

Subsidiary.findSubsidiary = async function(name) {
  const subsidiary = await this.findAll({
    where: {
      name: {
        [Op.like]: `%${name}`
      }
    }
  })
  return subsidiary;
}

module.exports = Subsidiary;
