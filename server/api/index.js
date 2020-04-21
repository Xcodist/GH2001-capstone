const router = require('express').Router()
router.use('/users', require('./users'))
router.use('/companies', require('./companies'))
router.use('/alt', require('./alt'))
router.use('/wishlist', require('./wishlist'))
router.use('/subsidiaries', require('./subsidiaries'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

module.exports = router
