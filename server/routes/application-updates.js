var express = require('express');
var router = express.Router();

// Get the list of updates of an application.
router.get('/', function(req, res, next) {
  res.send('GET /job-searches/:jsId/applications/:appId/updates');
});

// Create an application update.
router.post('/', function(req, res, next) {
  res.send('POST /job-searches/:jsId/applications/:appId/updates');
});

// Get an application update by id.
router.get('/:uId', function(req, res, next) {
  res.send('GET /job-searches/:jsId/applications/:appId/updates/:uId');
});

// Update an application update by id.
router.patch('/:uId', function(req, res, next) {
  res.send('PATCH /job-searches/:jsId/applications/:appId/updates/:uId');
});

// Delete an application update by id.
router.delete('/:uId', function(req, res, next) {
  res.send('DELETE /job-searches/:jsId/applications/:appId/updates/:uId');
});

module.exports = router;
