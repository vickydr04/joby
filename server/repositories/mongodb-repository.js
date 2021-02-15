var { AbstractRepository } = require('../repositories/abstract-repository');
var { JobSearch } = require('../models');

class MongoDbRepository extends AbstractRepository {

  constructor() {
    super();
  }

  async entityExists(id) {
    const entity = await JobSearch.findById(id);
    return entity !== null;
  }

  async findAll() {
    return JobSearch.find();
  }

  async create(data) {
    const entity = new JobSearch(data);
    await entity.save();
  }

  async findById(id) {
    const entity = await JobSearch.findById(id);

    if (entity === null) {
      throw new Error(`Entity with id "${id}" does not exist`);
    }

    return entity;
  }

 async updateById(id, data) {
    await JobSearch.updateOne({ _id: id }, data);
  }

  async deleteById(id) {
    await JobSearch.deleteOne({ _id: id });
  }
}

module.exports = { MongoDbRepository };
