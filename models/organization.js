'use strict'

const vogels = require('vogels')
const Joi = require('joi')
const crypto = require('crypto')
const only = require('only')

vogels.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

const Organization = vogels.define('Organization', {
  hashKey: 'id',
  timestamps: true,
  schema: {
    id: vogels.types.uuid(),
    name: Joi.string().trim().regex(/^[A-Za-z ]{3,}$/),
    email: Joi.string().email().trim().required(),
    hashed_password: Joi.string(),
    salt: Joi.string(),
  }
})

module.exports = Organization

/**
 * Hooks
 */

Organization.before('create', (data, next) => {
  // password validation
  if (!data.password || !data.password.length) {
    return next(new Error('Password can not be empty'), data)
  }

  // email duplication
  Organization.load({ email: data.email }, (err, admin) => {
    if (err) return next(err)
    if (admin) return next(new Error('Email already exists'), data)

    data.salt = makeSalt()
    data.hashed_password = encryptPassword(data.salt, data.password)

    delete data.password
    delete data._csrf

    next(null, data)
  })
})


/**
 * Methods
 */

Organization.prototype.authenticate = (plainText) => {
  return encryptPassword(this.get('salt'), plainText) === this.get('hashed_password')
}

const makeSalt = () => {
  return Math.round(new Date().valueOf() * Math.random()) + ''
}

const encryptPassword = (salt, password) => {
  if (!password) return ''
  try {
    return crypto
      .createHmac('sha1', salt)
      .update(password)
      .digest('hex')
  } catch (err) {
    return ''
  }
}

/**
 * Statics
 */

Organization.load = ({ id, email }, cb) => {
  if (id) {
    return Organization.get(options.id, {
      ConsistentRead: true,
      AttributesToGet: ['id', 'name', 'email']
    }, cb)
  } else {
    return Organization.scan()
      .where('email').equals(email)
      .exec((err, result) => {
        if (err) return cb(err, null)
        return cb(err, result.Count > 0 ? result.Items[0] : null)
      })
  }
}

Organization.insert = (data, cb) =>
  Organization.create(only(data, 'email password name'), cb)

Organization.update = (data, cb) =>
  Organization.create(only(data, 'id email password name'), cb)

Organization.remove = (id, cb) =>
  Organization.destroy(id, cb)

/**
 * Create Table
 */

vogels.createTables({ Organization: { readCapacity: 20, writeCapacity: 20 } }, err => {
  if (err) return console.log(`Error creating Organization table.`)
  console.log(`Organization table has been created.`)
})