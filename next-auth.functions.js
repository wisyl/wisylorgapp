const Organization = require('./models/organization');

module.exports = () => {
  return Promise.resolve({
    find: ({ id, email } = {}) => {
      return new Promise((resolve, reject) => {
        Organization.load({ id, email }, (err, org) => {
          if (err) return reject(err)
          return resolve(org.attrs)
        })
      })
    },
    insert: (orgData, oAuthProfile) => {
      return new Promise((resolve, reject) => {
        Organization.insert(orgData, (err, org) => {
          if (err) return reject(err)
          if (!orgData.id && org.attrs.id) orgData.id = org.attrs.id
          return resolve(orgData)
        })
      })
    },
    update: (orgData, oAuthProfile) => {
      return new Promise((resolve, reject) => {
        Organization.update(orgData, (err, org) => {
          if (err) return reject(err)
          return resolve(orgData)
        })
      })
    },
    remove: (id) => {
      return new Promise((resolve, reject) => {
        Organization.remove(id, (err) => {
          if (err) return reject(err)
          return resolve(true)
        })
      })
    },
    serialize: (orgData) => {
      if (orgData.id) {
        return Promise.resolve(orgData.id)
      } else {
        return Promise.reject(new Error("Unable to serialise organization"))
      }
    },
    deserialize: (id) => {
      return new Promise((resolve, reject) => {
        Organization.load({ id }, (err, org) => {
          if (err) return reject(err)

          if (!org) return resolve(null)

          return resolve(org.attrs)
        })
      })
    }
  })
}