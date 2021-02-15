const express = require('express');
const { MongoDbRepository } = require('../repositories/mongodb-repository');
const { ApplicationUpdate } = require('../models');

const router = express.Router();
const repository = new MongoDbRepository(ApplicationUpdate);

// Get the list of updates of an application.
router.get('/', async function(req, res) {
  try {
    const entities = await repository.findAll({ jobSearchId: req.params.jsId, appId: req.params.appId });
    res.json(entities);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create an application update.
router.post('/', async function(req, res) {
  try {
    const entity = await repository.create({ ...req.body, jobSearchId: req.params.jsId, appId: req.params.appId });
    res.json(entity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get an application update by id.
router.get('/:uId', async function(req, res) {
  try {
    const entities = await repository.findAll({ _id: req.params.uId, jobSearchId: req.params.jsId, appId: req.params.appId });
    if (entities.length === 0) {
      throw new Error(`Entity with id "${req.params.uId}" does not exist in parent entity with id "${req.params.jsId}"`);
    }
    res.json(entities[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an application update by id.
router.patch('/:uId', async function(req, res) {
  try {
    const updateCount = await repository.update({ _id: req.params.uId, jobSearchId: req.params.jsId, appId: req.params.appId }, req.body);
    if (updateCount === 0) {
      throw new Error(`Entity with id "${req.params.uId}" does not exist in parent entity with id "${req.params.appId}"`);
    }
    res.end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an application update by id.
router.delete('/:uId', async function(req, res) {
  try {
    const deleteCount = await repository.delete({ _id: req.params.uId, jobSearchId: req.params.jsId, appId: req.params.appId });
    if (deleteCount === 0) {
      throw new Error(`Entity with id "${req.params.uId}" does not exist in parent entity with id "${req.params.appId}"`);
    }
    res.end();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
