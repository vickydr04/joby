var express = require('express');
var { MongoDbRepository } = require('../repositories/mongodb-repository');
var { JobSearch } = require('../models');

var router = express.Router();
var repository = new MongoDbRepository(JobSearch);

// Get the list of job searches.
router.get('/', async function(req, res) {
  try {
    const entities = await repository.findAll();
    res.json(entities);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a job search.
router.post('/', async function(req, res) {
  try {
    const entity = await repository.create(req.body);
    res.json(entity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a job search by id.
router.get('/:jsId', async function(req, res) {
  try {
    const entity = await repository.findById(req.params.jsId);
    res.json(entity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a job search by id.
// @todo fail when id is not valid
router.patch('/:jsId', async function(req, res) {
  try {
    await repository.updateById(req.params.jsId, req.body);
    res.end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a job search by id.
router.delete('/:jsId', async function(req, res) {
  try {
    await repository.deleteById(req.params.jsId);
    res.end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
