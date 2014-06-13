var application_root = __dirname,
	express = require('express'),
	path = require('path'),
	mongoose = require('mongoose');

var app = express();
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOverride() );
	app.use(app.router);
	app.use(express.static(path.join(application_root, 'site') ));
	app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
})

//db connection
mongoose.connect('mongodb://localhost/library_database');

//Schemas
var Keywords = new mongoose.Schema({
	keyword: String
});

var Book = new mongoose.Schema({
	title: String,
	author: String,
	releaseDate: Date,
	keywords: [ Keywords ]
});
//Models
var BookModel = mongoose.model( 'Book', Book );


app.get('/api', function(req, res){
	res.send('Library api test');
})
//get all books
app.get('/api/books', function(req, res){
	return BookModel.find(function( err, books ){
		if(!err){
			return res.send( books );
		}
		else{
			return console.log( err );
		}
	})
})
//create new book
app.post('/api/books', function(req, res){
	var book = new BookModel({
		title: req.body.title,
		author: req.body.author,
		releaseDate: req.body.releaseDate,
		keywords: req.body.keywords
	});

	book.save(function(err){
		if(!err){
			return console.log('created');
		}
		else{
			return console.log(err);
		}
	})
	return res.send(book);
});

//get a single book by id
app.get('/api/books/:id', function(req, res){
	return BookModel.findById(req.params.id, function( err, book ){
		if(!err){
			return res.send(book);
		}
		else{
			return console.log(err);
		}
	})
});

//update book
app.put('/api/books/:id', function(req, res){
	console.log('Updating book '+req.body.title);
	return BookModel.findById(req.params.id, function(err, book){
		book.title = req.body.title;
		book.author = req.body.author;
		book.releaseDate = req.body.releaseDate;
		book.keywords = req.body.keywords;
		return book.save(function(err){
			if(!err){
				console.log('book updated');
			}
			else{
				console.log(err);
			}
			return res.send(book);
		})
	})
})

app.delete('/api/books/:id', function(req, res){
	console.log('deleting book with id '+ req.params.id);
	return BookModel.findById(req.params.id, function(err, book){
		return book.remove(function(err){
			if(!err){
				console.log('book removed');
				return res.send('');
			}
			else{
				console.log(err);
			}
		})
	})
});



var port = 4711;
app.listen(port, function(){
	console.log("Server started", port, app.settings.env);
})	

