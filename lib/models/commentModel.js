
var Backbone = require("backbone");

var commentModel = Backbone.Model.extend({

	defaults: {
		comment: "",
		user: "",
		upVotes: 0,
		downVotes: 0,
		dateTime: ""
	},

	initialize: function() {

	},

	upVote: function() {

	},

	downVote: function() {


	}
});

module.exports = commentModel;