var express = require('express');
var { SearchJobRepository } = require('../repositories/search-job-repository');
var router = express.Router();

var repository = new SearchJobRepository();

// Get the list of job searches.
router.get('/', function(req, res) {
  try {
    const entities = repository.findAll();
    res.json(entities);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a job search.
router.post('/', function(req, res) {
  try {
    repository.create(req.body);
    res.end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a job search by id.
router.get('/:jsId', function(req, res) {
  try {
    const entity = repository.findById(req.params.jsId);
    res.json(entity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a job search by id.
router.patch('/:jsId', function(req, res) {
  try {
    repository.updateById(req.params.jsId, req.body);
    res.end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a job search by id.
router.delete('/:jsId', function(req, res) {
  try {
    repository.deleteById(req.params.jsId);
    res.end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
