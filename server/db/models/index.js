const User = require('./user')
const Company = require('./company')
const Wishlist = require('./wishlist')
const Subsidiary = require('./subsidiary')

module.exports = {
  User,
  Company,
  Wishlist,
  Subsidiary
}

User.belongsToMany(Wishlist, {through: "UserWishlist"})
Wishlist.belongsToMany(User, {through: "UserWishlist"})
Company.hasMany(Subsidiary)
Subsidiary.belongsTo(Company)
