'use strict'

const vogels = require('vogels')
const Joi = require('@hapi/joi')
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
  }
})

module.exports = Organization

/**
 * Hooks
 */

Organization.before('create', (data, next) => {
  next(null, data)
})


/**
 * Methods
 */

/**
 * Statics
 */

Organization.load = ({ id, email }, cb) => {
  if (id) {
    return Organization.get(options.id, {
      ConsistentRead: true,
      AttributesToGet: ['id', 'name']
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
  Organization.create(only(data, 'name'), cb)

Organization.update = (data, cb) =>
  Organization.create(only(data, 'id name'), cb)

Organization.remove = (id, cb) =>
  Organization.destroy(id, cb)

/**
 * Create Table
 */

vogels.createTables({ Organization: { readCapacity: 20, writeCapacity: 20 } }, err => {
  if (err) return console.log(`Error creating Organization table.`)
  console.log(`Organization table has been created.`)
})