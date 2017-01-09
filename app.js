var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var commoditiesList = require(__dirname+'/data/commodities_list.json');

var index = require('./routes/index');
var users = require('./routes/users');
var signup = require('./routes/signup');
var login = require('./routes/login');
var about = require('./routes/about');
var account = require('./routes/accounts');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.set('commodities-list', commoditiesList);

app.locals.title= 'Dynamkt.com';
app.locals.tableHeaders={1:'Trading Instrument',2:'Trade Date', 3:'Action', 4:'Position', 5:'Latest Price', 6:'Entry Price', 7:'Points', 8:'Contracts',9:'Profit or Loss on Trade Yellow = Open Position',10:'Cumulative Commissions',11:'Cumulative Net Profit/Loss',12:'Initial Margin',13:'Beginning Date of Trading',14:'Account Total',15:'N-Day Gain Factor since Begin Date'};
// app.locals.commoditiesList = commoditiesList;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
		src:  path.join(__dirname, 'public/stylesheets'),
		dest: path.join(__dirname, 'public/stylesheets'),
		indentedSyntax: true,
		sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/sign-up', signup);
app.use('/login', login);
app.use('/about', about);
app.use('/account', account);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
		var err = new Error('Not Found');
		err.status = 404;
		next(err);
});

// error handler
app.use(function (err, req, res, next) {
		// set locals, only providing error in development
		res.locals.message = err.message;
		res.locals.error = req.app.get('env') === 'development' ? err : {};

		// render the error page
		res.status(err.status || 500);
		res.render('error');
});


module.exports = app;
