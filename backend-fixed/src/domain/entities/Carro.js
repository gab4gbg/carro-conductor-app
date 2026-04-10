export default class Carro {
  constructor({ titulo, conductor, precio, stock }) {
    this.titulo = titulo;
    this.conductor  = conductor;
    this.precio = Number(precio);
    this.stock  = Number(stock) || 0;
  }
}
