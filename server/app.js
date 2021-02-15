var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var jobSearchesRouter = require('./routes/job-searches');
var applicationsRouter = require('./routes/applications');
var applicationUpdatesRouter = require('./routes/application-updates');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/job-searches', jobSearchesRouter);
app.use('/job-searches/:jsId/applications', applicationsRouter);
app.use('/job-searches/:jsId/applications/:appId/updates', applicationUpdatesRouter);

mongoose.connect('mongodb://localhost/joby', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = app;
