module.exports = (expressApp) => {
  expressApp.get('/users/:id/organization', async (req, res) => {
    await getUsersOrganization(req, res)
  })

  expressApp.post('/users/:id/organization', async (req, res) => {
    await postUsersOrganization(req, res)
  })

  expressApp.get('/organizations/:id', async (req, res) => {
    await getOrganizations(req, res)
  })
} 

const OrganizationCreator = require('../services/organization-creator')
const Organization = require('../models/organization')
const User = require('../models/user')

/**
 * GET /users/:id/organization
 * @param {*} req 
 * @param {*} res 
 */
async function getUsersOrganization(req, res) {
  User.load({
    id: req.params.id
  }, (err, user) => {
    Organization.load({
      id: user.attrs.organization_id
    }, (err, org) => {
      res.status(200).json(org)
    })
  })
}

/**
 * POST /users/:id/organization
 * @param {*} req 
 * @param {*} res 
 */
async function postUsersOrganization(req, res) {
  const creator = new OrganizationCreator(req.params.id, req.body)

  const organization = await creator.create()
  res.status(201).send(organization)
}

/**
 * GET /organizations/:id
 * @param {*} req 
 * @param {*} res 
 */
async function getOrganizations(req, res) {

  Organization.load({
    id: req.params.id
  }, (err, org) => {
    res.status(200).send(org)
  })
}