export default class CarroController {
  constructor({ createCarro, getAllCarros, deleteCarro }) {
    this.createCarro  = createCarro;
    this.getAllCarros  = getAllCarros;
    this.deleteCarro  = deleteCarro;
  }

  async create(req, res) {
    try {
      const carro = await this.createCarro.execute(req.body);
      res.status(201).json(carro);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const carros = await this.getAllCarros.execute();
      res.status(200).json(carros);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      await this.deleteCarro.execute(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}
