var app = app || {};
app.Book = Backbone.Model.extend({
	defaults: {
		coverImage: "img/ejs.png",
		title: 'No title',
		author: "",
		releaseDate: "",
		keywords: ""
	}
})