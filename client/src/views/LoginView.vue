<script setup lang="ts">
import CardForm from '../components/form/CardForm.vue'
import { isLogin } from '../Redirect'

isLogin()
</script>
<template>
  <CardForm page="login" />
</template>
