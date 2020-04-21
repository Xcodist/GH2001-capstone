const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const db = require("../db");
const Subsidiary = require('./subsidiary')

const Company = db.define("company", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  rating: {
    type: Sequelize.STRING,
    default: 60
  }
});

Company.beforeBulkCreate((companies, options) => {
  for (const company of companies) {
    let name = company.name;
    for (let i = 0; i < company.name; i++) {
      const currentLetter = name[i];
      currentLetter = currentLetter.toLowerCase();
    }
    company.name = name;
  }
});

Company.findCompany = async function(name) {
  const company = await this.findAll({
    where: {
      name: {
        [Op.like]: `%${name}%`
      }
    }
  });
  return company;
};

Company.findCompanyWithSubsidiaries = async function(id) {
  const company = await this.findAll({
    where: {
      id: {
        [Op.eq]: id
      }
    }, include: [{
      model: Subsidiary
    }]
  })
  return company
}

Company.prototype.getNumRating = function() {
  const parsed = parseInt(this.rating, 10);
  if (isNaN(parsed)) {
    return this.rating;
  }
  return parsed * 100;
};

Company.findRatings = async function() {
  const companies = await this.findAll();
};



module.exports = Company;
