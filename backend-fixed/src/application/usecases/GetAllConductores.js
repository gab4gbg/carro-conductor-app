export default class GetAllConductores {
  constructor(ConductorRepository) {
    this.ConductorRepository = ConductorRepository;
  }

  async execute() {
    return await this.ConductorRepository.findAll();
  }
}
