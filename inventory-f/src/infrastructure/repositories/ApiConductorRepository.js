import ConductorRepository from "../../domain/repositories/ConductorRepository.js";
const BASE_URL = import.meta.env.VITE_API_URL;

export default class ApiConductorRepository extends ConductorRepository {
  async save(conductor) {
    const res = await fetch(`${BASE_URL}/conductores`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(conductor),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
  async findAll() {
    const res = await fetch(`${BASE_URL}/conductores`);
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
  async findByNombre(nombre) {
    const res = await fetch(`${BASE_URL}/conductores/${encodeURIComponent(nombre)}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
  async delete(id) {
    const res = await fetch(`${BASE_URL}/conductores/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(await res.text());
  }
}
