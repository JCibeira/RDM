/**
 * AttendRequest.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    realAttentionTime: {
		type: 'string',
		columnType: 'datetime'
	},
	
	estimatedTime: {
		type: 'string',
		columnType: 'datetime'
	},

	startedToAttend: {
		type: 'string',
		columnType: 'datetime'
	},

	rating: {
		type: 'number',
		columnType: 'integer'
	},

	status: {
		type: 'string',
		isIn: ['processing', 'completed', 'canceled'],
		defaultsTo: 'processing'
	},

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
	//  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
	
	idCollector: {
		model: 'collector'
	},

	idRequest: {
		model: 'request'
	}, 

	idAddress: {
		model: 'address'
	}

  },

};