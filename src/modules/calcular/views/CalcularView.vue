<template>
  <h3>Propiedades computadas</h3>
  <input type="number" v-model="valor">
  <p v-if="mostrarElementoPadre">Resultado rapido: {{ valorCalculado }}</p>
  <p v-else>Aqui no se muestra nada en el 'mostrarElementoPadre' con v-if, v-else</p>
  <ResultadoSection v-show="mostrarElementoHijo" :resultado="valorCalculado"/>
</template>

<script setup>
import { ref, computed } from 'vue';
import ResultadoSection from '../components/ResultadoSection.vue';

const valor = ref('');

const valorCalculado = computed(()=>{
  return valor.value * 3;
});

const mostrarElementoHijo = computed(()=>{
  return valor.value > 10
})

const mostrarElementoPadre = computed(()=>{
  return valor.value < 10
})
</script>

<style scoped>
</style>