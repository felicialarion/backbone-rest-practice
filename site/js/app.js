var app = app || {};
$(function(){

	// var books = [
	// 	{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford',
	// 	releaseDate: '2008', keywords: 'JavaScript Programming' },
	// 	{ title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw',
	// 	releaseDate: '2012', keywords: 'CoffeeScript Programming' },
	// 	{ title: 'Scala for the Impatient', author: 'Cay S. Horstmann',
	// 	releaseDate: '2012', keywords: 'Scala Programming' },
	// 	{ title: 'American Psycho', author: 'Bret Easton Ellis',
	// 	releaseDate: '1991', keywords: 'Novel Splatter' },
	// 	{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke',
	// 	releaseDate: '2011', keywords: 'JavaScript Programming' }
	// ];
	$( '#releaseDate' ).datepicker();
	new app.LibraryView();

	// $.post( '/api/books', {
	// 	'title': 'JavaScript basics',
	// 	'author': 'Douglas Crockford',
	// 	'releaseDate': new Date( 2008, 10, 1 ).getTime(),
	// 	'keywords': [
	// 		{'keyword':"JavaScript"},
	// 		{'keyword': 'Reference'}
	// 	]
	// 	}, function(data, textStatus, jqXHR) {
	// 	console.log( 'Post response:' );
	// 	console.dir( data );
		
	// });

	// $.get( '/api/books/', function( data, textStatus, jqXHR ) {
	// 	console.log( 'Get response:' );
	// 	console.log('data ', data );
	// });

	//test one book get
	// $.get('/api/books/539aab757bf5742817000001', function(data){
	// 	console.log("response: ");
	// 	console.log(data);
	// })
	// $.ajax({
	// 	url: '/api/books/539aab757bf5742817000001',
	// 	type: 'PUT',
	// 	data:{
	// 		'title':'JavaScript The good parts',
	// 		'author':'The Legendary Douglas Crockford',
	// 		'releaseDate':new Date(2008,4,1).getTime()
	// 	},
	// 	success: function(data){
	// 		console.log('response: ');
	// 		console.log(data);
	// 	}
	// })

	// $.ajax({
	// 	url:'/api/books/539ab41d5d5c48ac17000001',
	// 	type: 'DELETE',
	// 	success: function(data){
	// 		console.log('delete response: ');
	// 		console.log(data);
	// 	}
	// })
})