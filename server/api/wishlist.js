const router = require('express').Router()
const {User, Wishlist} = require('../db/models')
module.exports = router

const {isAdmin, isUser} = require('../../utils')


router.get('/:userId', isUser, async (req, res, next) => {
  try {
    const currentUser = await User.findAll({
        where: {
          id: req.params.userId
          },
          include: [{
            model: Wishlist,
          }]
        });
    res.send(currentUser);
  } catch(e) {
    next(e)
  }
})

router.put('/add/:userId',isUser, async (req, res, next) => {
  try {
    const currentUser = await User.findOne({
      where: {
        id: req.params.userId
        },
        include: [{
          model: Wishlist,
        }]
      });
    const addedItem = req.body
    if (addedItem.thumbnail.length > 255) {
      delete addedItem.thumbnail
    }
    let alreadyIn = false
    for (let i = 0; i < currentUser.wishlists.length; i++) {
      let wishItem = currentUser.wishlists[i] 
      if (addedItem.title === wishItem.title) alreadyIn = true
    }
    if (!alreadyIn) {
      const wishlistItem = await Wishlist.create({title: req.body.title, link: req.body.link, serpapi_product_api: req.body.serpapi_product_api, source: req.body.source, price: req.body.price, extracted_price: req.body.extracted_price, thumbnail: req.body.thumbnail})
      await currentUser.addWishlist(wishlistItem);
      res.json(wishlistItem);
    } else {
      console.log('This item already in your wishlist!')
    }
  } catch (e) {
    next(e)
  }
} )

router.delete('/remove/:userId/:wishlistId', isUser, async (req, res, next) => {
  try {
    const removedWishlistItem = await Wishlist.findByPk(req.params.wishlistId)
    const currentUser = await User.findByPk(req.params.userId);
    await currentUser.removeWishlist(removedWishlistItem)
    res.sendStatus(204);
  } catch (e) {
    next(e)
  }
})
