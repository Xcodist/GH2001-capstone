const Sequelize = require('sequelize')
const db = require('../db')

const Company = db.define('company', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  rating: {
    type: Sequelize.STRING,
    default: 60
  }
})



Company.prototype.getNumRating = function () {
  const parsed = parseInt(this.rating, 10)
  if (isNaN(parsed)) {return this.rating}
  return parsed * 100
}

Company.findRatings = async function() {
  const companies = await this.findAll()
  console.log(companies)
}


module.exports = Company
