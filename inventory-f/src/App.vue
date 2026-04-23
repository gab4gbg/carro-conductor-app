<template>
  <nav class="navbar">
    <span class="navbar__brand">📚 Inventario Carro</span>
    <div class="navbar__links">
      <RouterLink to="/carros">Carros</RouterLink>
      <RouterLink to="/conductores">Conductores</RouterLink>
    </div>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: sans-serif;
  background: #f5f5f5;
  color: #333;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1a1a2e;
  color: white;
  padding: 1rem 2rem;
}

.navbar__brand { font-size: 1.2rem; font-weight: bold; }

.navbar__links { display: flex; gap: 1.5rem; }

.navbar__links a {
  color: #ccc;
  text-decoration: none;
  font-size: 1rem;
}

.navbar__links a.router-link-active { color: white; font-weight: bold; }

main {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}

h1 { margin-bottom: 1.5rem; color: #1a1a2e; }

form {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.field { display: flex; flex-direction: column; gap: 4px; }
.field label { font-weight: 600; font-size: 0.9rem; }
.field input {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}
.field__error { color: #e74c3c; font-size: 0.8rem; }

button {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
}

button[type="submit"] { background: #1a1a2e; color: white; justify-self: start; }
button[type="submit"]:hover { background: #16213e; }
button[type="button"] { background: #e74c3c; color: white; }
button[type="button"]:hover { background: #c0392b; }
button:disabled { opacity: 0.5; cursor: not-allowed; }

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

th {
  background: #1a1a2e;
  color: white;
  padding: 0.75rem 1rem;
  text-align: left;
}

td { padding: 0.75rem 1rem; border-bottom: 1px solid #eee; }
tr:last-child td { border-bottom: none; }
tr:hover td { background: #f9f9f9; }

.msg-error { color: #e74c3c; margin-bottom: 1rem; }
.msg-empty { color: #888; }
</style>
