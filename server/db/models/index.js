const User = require('./user')
const Company = require('./company')
const Wishlist = require('./wishlist')

module.exports = {
  User,
  Company,
  Wishlist
}

User.belongsToMany(Wishlist, {through: "UserWishlist"})
Wishlist.belongsToMany(User, {through: "UserWishlist"})
