const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

//const {adminsOnly, currentUserOnly, adminOrCurrentUser} = require('../utils')

//get all users for admin only
router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

//get single page user for admins and the logged in user
router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ['id', 'email']
    })
    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json('User is not defined!')
    }
  } catch (err) {
    next(err)
  }
});


//update user account

/*
navigating the cartItems array :
product id = cartItem.id,
name = cartItem.name,
imageUrl = cartItem.imageUrl,
quantity = cartItem.orders[0].order_history.quantity,
currentPrice = cartItem.orders[0].order_history.currentPrice
*/
