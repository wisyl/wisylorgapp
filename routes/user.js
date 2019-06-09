module.exports = (expressApp) => {
  expressApp.get('/users/:id', async (req, res) => {
    await getUsers(req, res)
  })
} 

const User = require('../models/user')

/**
 * GET /users/:id
 * @param {*} req 
 * @param {*} res 
 */
async function getUsers(req, res) {
  User.load({
    id: req.params.id
  }, (err, user) => {
    res.status(200).json(user)
  })
}