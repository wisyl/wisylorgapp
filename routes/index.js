const OrganizationRoutes = require('./organization')
const UserRoutes = require('./user')

module.exports = (expressApp) => {
  OrganizationRoutes(expressApp)
  UserRoutes(expressApp)
}