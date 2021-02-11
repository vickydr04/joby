class SearchJobRepository {

  constructor() {
    this.idName = 'id';
    this.data = {}
  }

  entityExists(id) {
    return Object.prototype.hasOwnProperty.call(this.data, id);
  }

  validateEntityExists(id) {
    if (!this.entityExists(id)) {
      throw new Error(`Entity with id "${id}" does not exist`);
    }
  }

  findAll() {
    return Object.values(this.data);
  }

  create(entity) {
    const id = entity[this.idName];

    if (typeof id === "undefined") {
      throw new Error("Missing entity Id");
    }

    if (this.entityExists(id)) {
      throw new Error(`Entity with id "${id}" already exists`);
    }

    this.data[id] = entity;
  }

  findById(id) {
    this.validateEntityExists(id);
    return this.data[id];
  }

  updateById(id, data) {
    const oldEntity = this.findById(id);

    const newId = Object.prototype.hasOwnProperty.call(data, this.idName) ? data[this.idName] : id;
    const idChanged = newId !== id;

    if (idChanged) {
      if (this.entityExists(newId)) {
        throw new Error(`Cannot update the Id of "${id}" because entity with Id "${newId}" already exists`);
      }

      delete this.data[id];
    }

    const updatedEntity = { ...oldEntity, ...data };

    this.data[newId] = updatedEntity;
  }

  deleteById(id) {
    this.validateEntityExists(id);
    delete this.data[id];
  }
}

module.exports = { SearchJobRepository };
