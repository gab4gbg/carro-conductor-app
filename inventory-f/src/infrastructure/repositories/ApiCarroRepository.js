import CarroRepository from "../../domain/repositories/CarroRepository.js";
const BASE_URL = import.meta.env.VITE_API_URL;

export default class ApiCarroRepository extends CarroRepository {
  async save(carro) {
    const res = await fetch(`${BASE_URL}/carros`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carro),
    });
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
  async findAll() {
    const res = await fetch(`${BASE_URL}/carros`);
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
  async findByTitulo(titulo) {
    const res = await fetch(`${BASE_URL}/carros/${encodeURIComponent(titulo)}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(await res.text());
    return res.json();
  }
  async delete(id) {
    const res = await fetch(`${BASE_URL}/carros/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(await res.text());
  }
}
