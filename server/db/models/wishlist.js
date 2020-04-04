const Sequelize = require('sequelize')
const db = require("../db")

const Wishlist = db.define("wishlist", {
  title: {
    type: Sequelize.STRING
  },
  link: {
    type: Sequelize.TEXT,
    validate: {
      isUrl: true
    }
  },
  serpapi_product_api: {
    type: Sequelize.TEXT

  },
  source: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  },
  extracted_price: {
    type: Sequelize.FLOAT
  },
  thumbnail: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
})

module.exports = Wishlist;
