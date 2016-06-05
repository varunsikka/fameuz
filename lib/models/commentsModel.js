
var Backbone = require("backbone");

var commentsModel = Backbone.Model.extend({

	defaults: {
		text: "",
		user: "",
		upVotes: 0,
		downVotes: 0,
		dateTime: ""
	},

	initialize: function() {

	}
});

module.exports = commentsModel;