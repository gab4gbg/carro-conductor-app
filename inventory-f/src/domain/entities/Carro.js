export default class Carro {
  constructor({ id, titulo, conductor, precio, stock }) {
    if (!titulo) throw new Error("Titulo is required");
    if (!conductor)  throw new Error("Conductor is required");
    if (precio == null || Number(precio) < 0) throw new Error("Precio must be >= 0");
    if (stock == null || !Number.isInteger(Number(stock)) || Number(stock) < 0)
      throw new Error("Stock must be an integer >= 0");

    this.id     = id;
    this.titulo = titulo;
    this.conductor  = conductor;
    this.precio = Number(precio);
    this.stock  = Number(stock);
  }
}
