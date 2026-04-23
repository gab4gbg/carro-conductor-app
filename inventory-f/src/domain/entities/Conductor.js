export default class Conductor {
  constructor({ id, nombre, nacionalidad, edad }) {
    if (!nombre)       throw new Error("Nombre is required");
    if (!nacionalidad) throw new Error("Nacionalidad is required");
    if (edad == null || Number(edad) < 0) throw new Error("Edad must be >= 0");

    this.id           = id;
    this.nombre       = nombre;
    this.nacionalidad = nacionalidad;
    this.edad         = Number(edad);
  }
}
