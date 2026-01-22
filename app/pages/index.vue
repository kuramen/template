<script setup lang="ts">
import { ref } from "vue";

const message = ref("");

async function call() {
  const res = await fetch("/api");
  const data = await res.json();
  message.value = data.api;
}
</script>

<template>
  <div>
    <h1>Nitro + Vite + Vue</h1>
    <button @click="call">Call /api</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>
