<template>
  <div class="game-container">
    <ButtonMarketPlace @open-marketplace="openMarketPlace" class="z-50" />

    <StartSlider :start="start" @itemClicked="handleItemClicked" v-if="start" />
    <DrawerGlobalView></DrawerGlobalView>

    <MarketPlace v-if="showMarketPlace" @close-marketplace="closeMarketPlace">
    </MarketPlace>
  </div>
</template>

<script setup lang="ts">
import ButtonMarketPlace from "../components/game/ButtonMarketPlace.vue";
import StartSlider from "../components/game/StartSlider.vue";
import DrawerGlobalView from "@/components/game/drawer/DrawerGlobalView.vue";
import { useUserStore } from "@/stores/datastore";
import MarketPlace from "@/components/menu/MarketPlace.vue";
import type { Item } from '@/types/Item';
import { ref } from "vue";
import { Factory,Product,TypeFactory } from "../../../server/src/global/implements";

const userStore = useUserStore();


let start = ref(true);
let showMarketPlace = ref(false);

let handleItemClicked = (product: Product): void => {
  start.value = false;
  let newFactory = new Factory(product.name, TypeFactory.StoneProduction, "0", 10, 1, undefined, 1);
  userStore.addFactory({ factory: newFactory });


const openMarketPlace = () => {
  showMarketPlace.value = true;
};

const closeMarketPlace = () => {
  showMarketPlace.value = false;
};
</script>

<style lang="scss">
.game-container {
  width: 100%;
  height: 100vh;
  background-size: 100vw 100vh;
  background-image: url('https://media.discordapp.net/attachments/1158387777868660736/1158931549635485837/pixel-art-grassland-powerpoint-background-.jpg?ex=651e0a9d&is=651cb91d&hm=f529110f9c9c4e73f7781c95b698148c4d55c12bfea06a5dbfe9d00c1774b42e&=&width=2300&height=1294');
}
</style>

