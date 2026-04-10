import Carro from "../../domain/entities/Carro.js";

export default class CreateCarro {
  constructor(CarroRepository) {
    this.CarroRepository = CarroRepository;
  }

  async execute({ titulo, conductor, precio, stock }) {
    const carro = new Carro({ titulo, conductor, precio, stock });
    return await this.CarroRepository.save(carro);
  }
}
