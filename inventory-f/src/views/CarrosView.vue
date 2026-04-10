<template>
  <main>
    <h1>Inventario de Carros</h1>
    <form @submit.prevent="handleCreate">
      <AppInput id="titulo" label="Título" placeholder="Título del carro" v-model="form.titulo" :error="errors.titulo" />
      <AppInput id="conductor" label="Conductor" placeholder="Nombre del conductor" v-model="form.conductor" :error="errors.conductor" />
      <AppInput id="precio" label="Precio" type="number" placeholder="0" v-model="form.precio" :error="errors.precio" />
      <AppInput id="stock" label="Stock" type="number" placeholder="0" v-model="form.stock" :error="errors.stock" />
      <AppButton type="submit" label="Agregar carro" :disabled="loading" />
    </form>
    <p v-if="error" class="msg-error">{{ error }}</p>
    <table v-if="carros.length">
      <thead>
        <tr><th>Título</th><th>Conductor</th><th>Precio</th><th>Stock</th><th></th></tr>
      </thead>
      <tbody>
        <tr v-for="carro in carros" :key="carro.id || carro._id">
          <td>{{ carro.titulo }}</td>
          <td>{{ carro.conductor }}</td>
          <td>{{ carro.precio }}</td>
          <td>{{ carro.stock }}</td>
          <td><AppButton label="Eliminar" @click="handleDelete(carro.id || carro._id)" /></td>
        </tr>
      </tbody>
    </table>
    <p v-else-if="!loading" class="msg-empty">No hay carros.</p>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCarros }      from "../infrastructure/composables/useCarros.js";
import AppInput           from "../components/AppInput.vue";
import AppButton          from "../components/AppButton.vue";
import { v4 as uuidv4 }  from "uuid";

const { carros, error, loading, fetchAll, create, remove } = useCarros();
const form   = ref({ titulo: "", conductor: "", precio: "", stock: "" });
const errors = ref({ titulo: "", conductor: "", precio: "", stock: "" });

function validate() {
  errors.value = { titulo: "", conductor: "", precio: "", stock: "" };
  if (!form.value.titulo)       errors.value.titulo = "El título es requerido";
  if (!form.value.conductor)        errors.value.conductor  = "El conductor es requerido";
  if (form.value.precio === "") errors.value.precio = "El precio es requerido";
  if (form.value.stock  === "") errors.value.stock  = "El stock es requerido";
  return Object.values(errors.value).every(e => e === "");
}

async function handleCreate() {
  if (!validate()) return;
  await create({ id: uuidv4(), ...form.value });
  form.value = { titulo: "", conductor: "", precio: "", stock: "" };
}

async function handleDelete(id) { await remove(id); }
onMounted(fetchAll);
</script>
