const User = require('./models/user');

module.exports = () => {
  return Promise.resolve({
    find: ({ id, email } = {}) => {
      return new Promise((resolve, reject) => {
        User.load({ id, email }, (err, org) => {
          if (err) return reject(err)
          return resolve(org.attrs)
        })
      })
    },
    insert: (orgData, oAuthProfile) => {
      return new Promise((resolve, reject) => {
        User.insert(orgData, (err, org) => {
          if (err) return reject(err)
          if (!orgData.id && org.attrs.id) orgData.id = org.attrs.id
          return resolve(orgData)
        })
      })
    },
    update: (orgData, oAuthProfile) => {
      return new Promise((resolve, reject) => {
        User.update(orgData, (err, org) => {
          if (err) return reject(err)
          return resolve(orgData)
        })
      })
    },
    remove: (id) => {
      return new Promise((resolve, reject) => {
        User.remove(id, (err) => {
          if (err) return reject(err)
          return resolve(true)
        })
      })
    },
    serialize: (orgData) => {
      if (orgData.id) {
        return Promise.resolve(orgData.id)
      } else {
        return Promise.reject(new Error("Unable to serialise User"))
      }
    },
    deserialize: (id) => {
      return new Promise((resolve, reject) => {
        User.load({ id }, (err, org) => {
          if (err) return reject(err)

          if (!org) return resolve(null)

          return resolve(org.attrs)
        })
      })
    },
    signIn: ({form, req}) => {
      return new Promise((resolve, reject) => {
        // Should validate credentials (e.g. hash password, compare 2FA token
        // etc) and return a valid user object from a database.
        return User.load({
          email: form.email
        }, (err, user) => {
          if (err) return reject(err)
          if (!user) return resolve(null)

          if (user.authenticate(form.password, user.attrs.salt, user.attrs.hashed_password)) {
            return resolve(user.attrs)
          } else {
            return null
          }
        })
      })
    },
  })
}