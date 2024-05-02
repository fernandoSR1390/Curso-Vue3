<template>
  <div class="header">
    <h3>La temperatura actual es:  <WeatherV /></h3>
  </div>
</template>

<script setup>
import WeatherV from './WeatherV.vue';
</script>

<style scoped>
.header{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #333;
  color: white;
}
h3{
  margin: 0;
}
</style>