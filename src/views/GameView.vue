<script setup lang="ts">
import "../assets/GameView.scss"
import StartSlider from "@/components/game/StartSlider.vue"
</script>

<template lang="">
    <div class="game-container">
        <StartSlider />
    </div>
</template>
<style lang="scss">
.game-container {
    width: 100%;
    height: 100vh;
}
</style>