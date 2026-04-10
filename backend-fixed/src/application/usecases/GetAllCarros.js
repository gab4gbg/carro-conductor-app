export default class GetAllCarros {
  constructor(CarroRepository) {
    this.CarroRepository = CarroRepository;
  }

  async execute() {
    return await this.CarroRepository.findAll();
  }
}
