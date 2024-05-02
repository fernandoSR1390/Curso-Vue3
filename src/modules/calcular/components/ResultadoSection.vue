<template>
  <div class="resultado">Resultado desde el valor del padre al hijo 'ResultadoSection' es: {{props.resultado}}</div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps([
  'resultado'
]);
</script>

<style scoped>
.resultado{
  background-color: aquamarine;
  margin-top: 1%;
  padding: 10px;
}
</style>