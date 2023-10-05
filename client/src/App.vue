<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue';
import LoaderUser from './LoaderUser.vue'

const isLoading = ref(false);

const onLoading = (value: any) => {
  isLoading.value = value;
}

</script>
<template>
  <LoaderUser :isLoading="isLoading"  @loading="onLoading" v-if="isLoading"/>

  <div id="web" v-else>
    <router-view />
  </div>
</template>
<style scoped></style>
