import Conductor from "../../domain/entities/Conductor.js";

export default class CreateConductor {
  constructor(ConductorRepository) {
    this.ConductorRepository = ConductorRepository;
  }

  async execute({ nombre, nacionalidad, edad }) {  
    const conductor = new Conductor({ nombre, nacionalidad, edad });  
    return await this.ConductorRepository.save(conductor);
  }
}