<template>
  <main>
    <h1>Inventario de Conductores</h1>
    <form @submit.prevent="handleCreate">
      <AppInput id="nombre" label="Nombre" placeholder="Nombre del conductor" v-model="form.nombre" :error="errors.nombre" />
      <AppInput id="nacionalidad" label="Nacionalidad" placeholder="Ej: Japonesa" v-model="form.nacionalidad" :error="errors.nacionalidad" />
      <AppInput id="edad" label="Edad" type="number" placeholder="0" v-model="form.edad" :error="errors.edad" />
      <AppButton type="submit" label="Agregar conductor" :disabled="loading" />
    </form>
    <p v-if="error" class="msg-error">{{ error }}</p>
    <table v-if="conductores.length">
      <thead>
        <tr><th>Nombre</th><th>Nacionalidad</th><th>Edad</th><th></th></tr>
      </thead>
      <tbody>
        <tr v-for="conductor in conductores" :key="conductor.id || conductor._id">
          <td>{{ conductor.nombre }}</td>
          <td>{{ conductor.nacionalidad }}</td>
          <td>{{ conductor.edad }}</td>
          <td><AppButton label="Eliminar" @click="handleDelete(conductor.id || conductor._id)" /></td>
        </tr>
      </tbody>
    </table>
    <p v-else-if="!loading" class="msg-empty">No hay conductores.</p>
  </main>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useConductores }     from "../infrastructure/composables/useConductores.js";
import AppInput           from "../components/AppInput.vue";
import AppButton          from "../components/AppButton.vue";
import { v4 as uuidv4 }  from "uuid";

const { conductores, error, loading, fetchAll, create, remove } = useConductores();
const form   = ref({ nombre: "", nacionalidad: "", edad: "" });
const errors = ref({ nombre: "", nacionalidad: "", edad: "" });

function validate() {
  errors.value = { nombre: "", nacionalidad: "", edad: "" };
  if (!form.value.nombre)          errors.value.nombre       = "El nombre es requerido";
  if (!form.value.nacionalidad)    errors.value.nacionalidad = "La nacionalidad es requerida";
  if (form.value.edad === "")      errors.value.edad         = "La edad es requerida";
  return Object.values(errors.value).every(e => e === "");
}

async function handleCreate() {
  if (!validate()) return;
  await create({ id: uuidv4(), ...form.value });
  form.value = { nombre: "", nacionalidad: "", edad: "" };
}

async function handleDelete(id) { await remove(id); }
onMounted(fetchAll);
</script>
