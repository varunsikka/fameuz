
var moment = require("moment");
var commentsModel = require("./lib/models/commentsModel.js");

var comment1 = new commentsModel({
	text: "This is a comment 1",
	user: "varun",
	upVotes: 1,
	downVotes: 0,
	dateTime: moment().format("YYYY-MM-DD HH:mm:ss")
});

var comment2 = new commentsModel({
	text: "This is a comment 2",
	user: "varun",
	upVotes: 2,
	downVotes: 0,
	dateTime: moment().format("YYYY-MM-DD HH:mm:ss")
});


console.log(JSON.stringify(comment1.attributes));
console.log(JSON.stringify(comment2.attributes));

comment2.set({upVotes: 3});

console.log(JSON.stringify(comment1.attributes));
console.log(JSON.stringify(comment2.attributes));