<script setup lang="ts">
import GameMenu from '@/components/menu/GameMenu.vue'
import TitleMenu from '@/components/menu/TitleMenu.vue'
</script>

<template>
  <div class="container">
    <TitleMenu />
    <GameMenu />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background: url(https://cdn.dribbble.com/users/2806983/screenshots/17562642/media/c53bdce8eb51083d7fc02bbdc9064827.png?resize=400x0);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
