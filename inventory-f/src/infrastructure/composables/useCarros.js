import { ref } from "vue";
import { createCarro, getAllCarros, deleteCarro } from "../config/container.js";

export function useCarros() {
  const carros  = ref([]);
  const error   = ref(null);
  const loading = ref(false);

  async function fetchAll() {
    loading.value = true;
    try { carros.value = await getAllCarros.execute(); }
    catch (err) { error.value = err.message; }
    finally { loading.value = false; }
  }

  async function create(data) {
    try { await createCarro.execute(data); await fetchAll(); }
    catch (err) { error.value = err.message; }
  }

  async function remove(id) {
    try { await deleteCarro.execute(id); await fetchAll(); }
    catch (err) { error.value = err.message; }
  }

  return { carros, error, loading, fetchAll, create, remove };
}
