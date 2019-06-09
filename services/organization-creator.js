const User = require('../models/user')
const Organization = require('../models/organization')


class OrganizationCreator {
  constructor(user_id, attrs) {
    this.user_id = user_id
    this.attrs = attrs
  }

  async create() {
    const user = await this.getUser()
    const organization = await this.createOrg()

    await this.linkOrgToUser(organization, user)
    return organization
  }

  async linkOrgToUser(organization, user) {
    const promise = new Promise((resolve, reject) => {
      User.update({
        id: user.attrs.id,
        organization_id: organization.attrs.id,        
      }, (err, user) => {
        if (err) {
          console.log(err)
          return reject(err)
        }

        resolve(user)
      })
    })

    return promise
  }

  async getUser() {
    const promise = new Promise((resolve, reject) => {
      User.load({id: this.user_id }, (err, user) => {
        if (err) {
          console.log(err)
          return reject(err)
        }

        resolve(user)
      })
    })

    return promise
  }

  async createOrg() {
    const promise = new Promise((resolve, reject) => {
      Organization.insert({
        name: this.attrs.name,
        website: this.attrs.website,
        phone: this.attrs.phone,
      }, (err, organization) => {
        if (err) {
          console.log(err)
          return reject(err)
        }

        resolve(organization)
      })
    })

    return promise
  }
}

module.exports = OrganizationCreator