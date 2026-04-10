import ConductorRepository from "../../domain/repositories/ConductorRepository.js";

export default class InMemoryConductorRepository extends ConductorRepository {
  constructor() {
    super();
    this.conductores = [];
  }

  async save(conductor) {
    const index = this.conductores.findIndex(a => a.id === conductor.id);
    if (index >= 0) {
      this.conductores[index] = conductor;
    } else {
      this.conductores.push(conductor);
    }
    return conductor;
  }

  async findAll() {
    return this.conductores;
  }
}
