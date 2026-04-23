export default class DeleteCarro {
  constructor(CarroRepository) {
    this.CarroRepository = CarroRepository;
  }
  async execute(id) {
    return await this.CarroRepository.delete(id);
  }
}
