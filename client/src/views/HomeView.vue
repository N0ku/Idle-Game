<script setup lang="ts">
import GameMenu from '@/components/menu/GameMenu.vue'
import TitleMenu from '@/components/menu/TitleMenu.vue'
import {isLogin} from '../Redirect'

isLogin() 
</script>

<template>
  <div class="container">
    <TitleMenu />
    <GameMenu />
  </div>
</template>


