/**
 * Admin.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 200
    },

    password: {
      type: 'string',
      required: true,
      protect: true
    },

    name: {
      type: 'string',
      required: true,
      maxLength: 120
    },

    lastName: {
      type: 'string',
      required: true,
      maxLength: 120
    },

    phone: {
      type: 'string',
      required: true,
      maxLength: 120
    },

    profile_picture: {
      type: 'string',
      maxLength: 120
    },

    passwordResetToken: {
      type: 'string',
    },

    passwordResetTokenTime: {
      type: 'string',
      columnType: 'datetime'
    },

    lastSeenIp: {
      type: 'string',
    },

    lastSeenAt: {
      type: 'string',
      columnType: 'datetime'
    },

  },

};

