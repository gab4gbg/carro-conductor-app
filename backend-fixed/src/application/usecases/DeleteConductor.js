export default class DeleteConductor {
  constructor(ConductorRepository) {
    this.ConductorRepository = ConductorRepository;
  }
  async execute(id) {
    return await this.ConductorRepository.delete(id);
  }
}
