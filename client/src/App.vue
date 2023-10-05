<script setup lang="ts">
import { RouterView } from 'vue-router'
import { isLogin } from './Redirect';

isLogin();
</script>
<template>
  <RouterView />
</template>
<style scoped></style>
