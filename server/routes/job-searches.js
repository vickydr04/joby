var express = require('express');
var router = express.Router();

// Get the list of job searches.
router.get('/', function(req, res, next) {
  res.send('GET /job-searches');
});

// Create a job search.
router.post('/', function(req, res, next) {
  res.send('POST /job-searches');
});

// Get a job search by id.
router.get('/:jsId', function(req, res, next) {
  res.send('GET /job-searches/:jsId');
});

// Update a job search by id.
router.patch('/:jsId', function(req, res, next) {
  res.send('PATCH /job-searches/:jsId');
});

// Delete a job search by id.
router.delete('/:jsId', function(req, res, next) {
  res.send('DELETE /job-searches/:jsId');
});

module.exports = router;
