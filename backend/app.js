var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb+srv://smlee:<910322>@cluster0.9uwjk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// DEFINE MODEL
var Book = require('./models/book');

var router = require('./routes')(app, Book);




app.post('/api/books', function(req, res){
  var book = new Book();
  book.title = req.body.name;
  book.author = req.body.author;
  book.published_date = new Date(req.body.published_date);

  book.save(function(err){
      if(err){
          console.error(err);
          res.json({result: 0});
          return;
      }

      res.json({result: 1});

  });
});



module.exports = app;
