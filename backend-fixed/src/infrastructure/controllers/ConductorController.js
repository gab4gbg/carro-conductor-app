export default class ConductorController {
  constructor({ createConductor, getAllConductores, deleteConductor }) {
    this.createConductor  = createConductor;
    this.getAllConductores = getAllConductores;
    this.deleteConductor  = deleteConductor;
  }

  async create(req, res) {
    try {
      const conductor = await this.createConductor.execute(req.body);
      res.status(201).json(conductor);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const conductores = await this.getAllConductores.execute();
      res.status(200).json(conductores);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await this.deleteConductor.execute(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}
