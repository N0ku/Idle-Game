<template>
  <div class="game-container">
    <StartSlider :start="start" @itemClicked="handleItemClicked" v-if="start" />
    <DrawerGlobalView />
  </div>
</template>

<script setup lang="ts">
import StartSlider from "../components/game/StartSlider.vue";
import DrawerGlobalView from "@/components/game/drawer/DrawerGlobalView.vue";
import { useUserStore } from "@/stores/datastore";
import { ref } from "vue";
import { Factory,Product,TypeFactory } from "../../../server/src/global/implements";

const userStore = useUserStore();


let start = ref(true);

let handleItemClicked = (product: Product): void => {
  start.value = false;
  let newFactory = new Factory(product.name, TypeFactory.StoneProduction, "0", 10, 1, undefined, 1);
  userStore.addFactory({ factory: newFactory });


};
</script>

<style lang="scss">
.game-container {
  width: 100%;
  height: 100vh;
  background-image: url('https://media.discordapp.net/attachments/1158387777868660736/1158931549635485837/pixel-art-grassland-powerpoint-background-.jpg?ex=651e0a9d&is=651cb91d&hm=f529110f9c9c4e73f7781c95b698148c4d55c12bfea06a5dbfe9d00c1774b42e&=&width=2300&height=1294');
}
</style>
../../../global/implements