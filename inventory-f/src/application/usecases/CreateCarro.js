import Carro from "../../domain/entities/Carro.js";
export default class CreateCarro {
  constructor(r) { this.r = r; }
  async execute(data) { return await this.r.save(new Carro(data)); }
}
