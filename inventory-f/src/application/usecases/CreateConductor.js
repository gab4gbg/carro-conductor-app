import Conductor from "../../domain/entities/Conductor.js";
export default class CreateConductor {
  constructor(r) { this.r = r; }
  async execute(data) { return await this.r.save(new Conductor(data)); }
}
