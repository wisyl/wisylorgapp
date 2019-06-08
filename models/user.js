'use strict'

const vogels = require('vogels')
const Joi = require('@hapi/joi')
const crypto = require('crypto')
const only = require('only')

const dotenv = require('dotenv')
dotenv.config()

console.log({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

vogels.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
})

const User = vogels.define('User', {
  hashKey: 'id',
  timestamps: true,
  schema: {
    id: vogels.types.uuid(),
    name: Joi.string().trim().regex(/^[A-Za-z ]{3,}$/),
    email: Joi.string().email().trim().required(),
    hashed_password: Joi.string(),
    salt: Joi.string(),
    company_id: Joi.string(),
  }
})

module.exports = User

/**
 * Hooks
 */

User.before('create', (data, next) => {
  // password validation
  if (!data.password || !data.password.length) {
    return next(new Error('Password can not be empty'), data)
  }

  // email duplication
  User.load({ email: data.email }, (err, admin) => {
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

User.prototype.authenticate = (plainText, salt, hashed_password) => {
  return encryptPassword(salt, plainText) === hashed_password
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

User.load = ({ id, email }, cb) => {
  if (id) {
    return User.get(id, {
      ConsistentRead: true,
      AttributesToGet: ['id', 'name', 'email']
    }, cb)
  } else {
    return User.scan()
      .where('email').equals(email)
      .exec((err, result) => {
        if (err) return cb(err, null)
        return cb(err, result.Count > 0 ? result.Items[0] : null)
      })
  }
}

User.insert = (data, cb) =>
  User.create(only(data, 'email password name'), cb)

User.update = (data, cb) =>
  User.create(only(data, 'id email password name'), cb)

User.remove = (id, cb) =>
  User.destroy(id, cb)

/**
 * Create Table
 */

vogels.createTables({ User: { readCapacity: 20, writeCapacity: 20 } }, err => {
  if (err) return console.log(`Error creating User table.`)
  console.log(`User table has been created.`)
})