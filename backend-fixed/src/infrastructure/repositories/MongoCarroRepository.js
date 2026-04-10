import CarroRepository from "../../domain/repositories/CarroRepository.js";
import CarroModel      from "../database/models/CarroModel.js";

export default class MongoCarroRepository extends CarroRepository {
  async save(carro) {
    const doc = await CarroModel.findOneAndUpdate(
      { titulo: carro.titulo },
      carro,
      { upsert: true, new: true }
    );
    return doc;
  }

  async findAll() {
    return await CarroModel.find();
  }

  async findByTitulo(titulo) {
    return await CarroModel.findOne({ titulo }) ?? null;
  }

  async delete(id) {
    const result = await CarroModel.findByIdAndDelete(id);
    if (!result) throw new Error(`Carro with id "${id}" not found`);
  }
}
