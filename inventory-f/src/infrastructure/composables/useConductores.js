import { ref } from "vue";
import { createConductor, getAllConductores, deleteConductor } from "../config/container.js";

export function useConductores() {
  const conductores = ref([]);
  const error   = ref(null);
  const loading = ref(false);

  async function fetchAll() {
    loading.value = true;
    try { conductores.value = await getAllConductores.execute(); }
    catch (err) { error.value = err.message; }
    finally { loading.value = false; }
  }

  async function create(data) {
    try { await createConductor.execute(data); await fetchAll(); }
    catch (err) { error.value = err.message; }
  }

  async function remove(id) {
    try { await deleteConductor.execute(id); await fetchAll(); }
    catch (err) { error.value = err.message; }
  }

  return { conductores, error, loading, fetchAll, create, remove };
}
