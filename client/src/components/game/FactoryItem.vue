<template>
  <div class="slider-container left-30 z-25 bg-green">
    <div class="slider top-full left-30 p-4 z-25">
      <div class="factory hover:shadow-lg" v-for="(factory, index) in fullFactory" :key="index">
        <img
          class="rounded-full"
          :src="TypeFactoryExtensions.GetImage(factory?.factoryType)"
          :alt="'Image de la factory ' + (index + 1)"
        />
        <h1>Factory {{ factory.getProductName() }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  height: 300px;
}

.slider {
  position: absolute;
  display: flex;
  transition: transform 0.5s ease-in-out;
  justify-content: center;
  flex-wrap: nowrap;
}

.factory {
  text-align: center;
  width: 20%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  max-width: 70%;
  height: auto;
}
</style>

<script setup lang="ts">
import {
  Factory,
  Products,
  TypeFactory,
  TypeFactoryExtensions
} from '../../../../server/src/global/implements'
const userId = '651ea4dd468911b45082ae68'
const fullFactory = [
  new Factory(Products.Wood, TypeFactory.StoneProduction, userId, 100, 1, '1', 1),
  new Factory(Products.Stone, TypeFactory.StoneProduction, userId, 150, 2, '2', 2),
  new Factory(Products.Weed, TypeFactory.StoneProduction, userId, 200, 3, '3', 3)
]
</script>
