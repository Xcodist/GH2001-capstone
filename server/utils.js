const isAdmin = (req, res, next) => {
  try {
    if (req.user) {
      if (req.user.isAdmin) {
        next()
      } else {
        res.status(401).send('Must be an admin!')
      }
    } else {
      res.status(401).send('Must login to access!')
    }
  } catch (error) {
    next(error)
  }
}

const isUser = (req, res, next) => {
  try {
    if (req.user) {
      next()
    } else {
      res.status(401).send('Must login to access!')
    }
  } catch (error) {
    next(error)
  }
}

const snip = (search) => {
  let count = 0;
  let snippet = ''
  for (let i = 0; i < search.length; i++) {
    if (search[i] === " ") count ++
    if (count === 3) break
    snippet += search[i]
  }
  return snippet
}

module.exports = {isUser, isAdmin, snip}
