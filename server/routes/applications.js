var express = require('express');
var router = express.Router();

// Get the list of applications for a job search.
router.get('/', function(req, res, next) {
  res.send('GET /job-searches/:jsId/applications');
});

// Create an application for a job search.
router.post('/', function(req, res, next) {
  res.send('POST /job-searches/:jsId/applications');
});

// Get an application by id.
router.get('/:appId', function(req, res, next) {
  res.send('GET /job-searches/:jsId/applications/:appId');
});

// Update an application by id.
router.patch('/:appId', function(req, res, next) {
  res.send('PATCH /job-searches/:jsId/applications/:appId');
});

// Delete an application by id.
router.delete('/:appId', function(req, res, next) {
  res.send('DELETE /job-searches/:jsId/applications/:appId');
});

module.exports = router;
