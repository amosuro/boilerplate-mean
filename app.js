var express      = require('express'),
    path         = require('path'),
    favicon      = require('serve-favicon'),
    logger       = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    mongoose     = require('mongoose'),

    // API routes
    todos        = require('./api/todos'),

    app          = express(),
    router       = express.Router();

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app')));

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My App' });
});

// API Routes
app.use('/todos', todos);

// Mongoose connection
mongoose.connect('mongodb://localhost/boilerplate-mean', function(err) {
  if(err) {
      console.log('connection error', err);
  } else {
      console.log('connection successful');
  }
});

module.exports = app;
