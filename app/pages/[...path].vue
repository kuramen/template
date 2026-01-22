<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Page introuvable</p>
    <button @click="router.push('/')">Retour à l'accueil</button>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  gap: 1rem;
}

.not-found h1 {
  font-size: 4rem;
  margin: 0;
}
</style>
