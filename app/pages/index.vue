<script setup lang="ts">
import { ref } from "vue";

const message = ref("");

async function fetchHello() {
  const res = await fetch("/api/hello");
  const data = await res.json();
  message.value = data.api;
}
</script>

<template>
  <div>
    <h1>Nitro + Vite + Vue</h1>
    <button @click="fetchHello">Call /api/hello</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>
