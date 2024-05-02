<template>
  <HeaderV :mensaje="texto"/>
  <div class="container">
    <SidevarV />
    <div class="content">
      <hr>
      <h2>Pasando valor al componente hijo 'Header' desde el padre 'MainView'</h2>
      <input type="texto" v-model="texto">
      {{texto}}
      <hr>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import HeaderV from '@/components/HeaderV.vue';
import SidevarV from '@/components/SidevarV.vue';
import { ref } from 'vue';

const texto = ref('');
</script>

<style scoped>
.container{
  display: flex;
}
.content{
  flex: 1;
  padding: 20px;
}
hr{
  border: 3px solid green;
}
</style>