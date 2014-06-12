var app = app || [];
app.BookView = Backbone.View.extend({
	className: 'bookContainer', 
	template: _.template($('#bookTemplate').html() ), 
	render: function(){
		this.$el.html(this.template(this.model.toJSON() ));
		return this;
	},
	events: {
		"click .delete": "deleteBook"
	},

	deleteBook: function(){
		console.log('trigger')
		this.model.destroy();
		this.remove();
	}
	
})