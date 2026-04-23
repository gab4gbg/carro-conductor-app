import CarroRepository from "../../domain/repositories/CarroRepository.js";

export default class InMemoryCarroRepository extends CarroRepository {
  constructor() {
    super();
    this.carros = [];
  }

  async save(carro) {
    const index = this.carros.findIndex(m => m.id === carro.id);
    if (index >= 0) {
      this.carros[index] = carro;
    } else {
      this.carros.push(carro);
    }
    return carro;
  }

  async findAll() {
    return this.carros;
  }
}
