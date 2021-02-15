var express = require('express');
var { MongoDbRepository } = require('../repositories/mongodb-repository');
var { Application } = require('../models');

var router = express.Router({ mergeParams: true });
var repository = new MongoDbRepository(Application);

// Get the list of applications for a job search.
router.get('/', async function(req, res) {
  try {
    const entities = await repository.findAll({ jobSearchId: req.params.jsId });
    res.json(entities);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create an application for a job search.
router.post('/', async function(req, res) {
  try {
    const entity = await repository.create({ ...req.body, jobSearchId: req.params.jsId });
    res.json(entity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get an application by id.
router.get('/:appId', async function(req, res) {
  try {
      const entities = await repository.findAll({ _id: req.params.appId, jobSearchId: req.params.jsId });
      if (entities.length === 0) {
        throw new Error(`Entity with id "${req.params.appId}" does not exist in parent entity with id "${req.params.jsId}"`);
      }
      res.json(entities[0]);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

// Update an application by id.
// @todo fail when id is not valid
router.patch('/:appId', async function(req, res) {
  try {
    const updateCount = await repository.update({ _id: req.params.appId, jobSearchId: req.params.jsId }, req.body);
    if (updateCount === 0) {
      throw new Error(`Entity with id "${req.params.appId}" does not exist in parent entity with id "${req.params.jsId}"`);
    }
    res.end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an application by id.
router.delete('/:appId', async function(req, res) {
  try {
    const deleteCount = await repository.delete({ _id: req.params.appId, jobSearchId: req.params.jsId });
    if (deleteCount === 0) {
      throw new Error(`Entity with id "${req.params.appId}" does not exist in parent entity with id "${req.params.jsId}"`);
    }
    res.end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
