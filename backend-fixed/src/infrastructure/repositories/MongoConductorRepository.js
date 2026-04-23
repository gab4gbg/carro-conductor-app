import ConductorRepository from "../../domain/repositories/ConductorRepository.js";
import ConductorModel      from "../database/models/ConductorModel.js";

export default class MongoConductorRepository extends ConductorRepository {
  async save(conductor) {
    const doc = await ConductorModel.findOneAndUpdate(
      { nombre: conductor.nombre },
      conductor,
      { upsert: true, new: true }
    );
    return doc;
  }

  async findAll() {
    return await ConductorModel.find();
  }

  async findByNombre(nombre) {
    return await ConductorModel.findOne({ nombre }) ?? null;
  }

  async delete(id) {
    const result = await ConductorModel.findByIdAndDelete(id);
    if (!result) throw new Error(`Conductor with id "${id}" not found`);
  }
}
