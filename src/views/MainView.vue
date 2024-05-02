<template>
  <HeaderV />
  <div class="container">
    <SidevarV />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import HeaderV from '@/components/HeaderV.vue';
import SidevarV from '@/components/SidevarV.vue';
</script>

<style scoped>
.container{
  display: flex;
}
.content{
  flex: 1;
  padding: 20px;
}
</style>