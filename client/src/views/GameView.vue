<template>
  <div class="game-container">
    <ButtonMarketPlace @open-marketplace="openMarketPlace" class="z-50" />

    <StartSlider
      :start="start"
      :currentStep="counterStep"
      @itemClicked="handleItemClicked"
      v-if="start"
    />

    <FactoryContainer v-if="!start" :factories="allFactories" />
    <DrawerGlobalView v-if="!start" :factories="allFactories" />

    <MarketPlace v-if="showMarketPlace" @close-marketplace="closeMarketPlace"> </MarketPlace>
  </div>
</template>

<script setup lang="ts">
import ButtonMarketPlace from '../components/game/ButtonMarketPlace.vue'
import StartSlider from '../components/game/StartSlider.vue'
import DrawerGlobalView from '@/components/game/drawer/DrawerGlobalView.vue'
import { useUserStore } from '@/stores/datastore'
import MarketPlace from '@/components/menu/MarketPlace.vue'
import type { Item } from '@/types/Item'
import { ref, reactive } from 'vue'
import { Factory, Products, TypeFactory } from '../../../server/src/global/implements'
import FactoryContainer from '@/components/game/factory/FactoryContainer.vue'

const userStore = useUserStore()

let start = ref(false)
let counterStep = ref(1)

let handleItemClicked = (product: any): void => {
  let factoryType: TypeFactory = TypeFactory.WoodProduction
  let newFactory: Factory = new Factory(
    product.name,
    factoryType,
    userStore.getId,
    10,
    1,
    undefined,
    counterStep.value
  )

  switch (product.id) {
    case Products.Wood:
      factoryType = TypeFactory.WoodProduction
      newFactory = new Factory(
        product.title,
        factoryType,
        userStore.getId,
        20,
        1,
        undefined,
        counterStep.value
      )
      break
    case Products.Stone:
      factoryType = TypeFactory.StoneProduction
      newFactory = new Factory(
        product.title,
        factoryType,
        userStore.getId,
        20,
        1,
        undefined,
        counterStep.value
      )
      break
    case Products.CBD:
      factoryType = TypeFactory.CBDProduction
      newFactory = new Factory(
        product.title,
        factoryType,
        userStore.getId,
        5,
        1,
        undefined,
        counterStep.value
      )
      break
    case Products.Fertilizer:
      factoryType = TypeFactory.FertilizerProduction
      newFactory = new Factory(
        product.title,
        factoryType,
        userStore.getId,
        15,
        1,
        undefined,
        counterStep.value
      )
      break
    case Products.Weed:
      factoryType = TypeFactory.WeedProduction
      newFactory = new Factory(
        product.title,
        factoryType,
        userStore.getId,
        5,
        1,
        undefined,
        counterStep.value
      )
      break
    case Products.Water:
      factoryType = TypeFactory.WaterProduction
      newFactory = new Factory(
        product.title,
        factoryType,
        userStore.getId,
        15,
        1,
        undefined,
        counterStep.value
      )
      break
    default:
      break
  }
  console.log(newFactory)

  userStore.addFactory({ factory: newFactory })
  counterStep.value++
  if (counterStep.value > 3) {
    start.value = false
  }
}
let showMarketPlace = ref(false)

const openMarketPlace = () => {
  showMarketPlace.value = true
}

const closeMarketPlace = () => {
  showMarketPlace.value = false
}

const factories = reactive<Factory[]>(userStore.getFactories)
console.log(userStore.getProducts)

const allFactories = factories.map(
  (item) =>
    new Factory(
      item.productName,
      item.factoryType,
      item.userId,
      item.production,
      item.level,
      item._id,
      item.id_localisation
    )
)
if (factories.length === 0) {
  start.value = true
}
</script>

<style lang="scss">
.game-container {
  width: 100%;
  height: 100vh;
  background-size: 100vw 100vh;
  background-image: url('https://media.discordapp.net/attachments/1158387777868660736/1158931549635485837/pixel-art-grassland-powerpoint-background-.jpg?ex=651e0a9d&is=651cb91d&hm=f529110f9c9c4e73f7781c95b698148c4d55c12bfea06a5dbfe9d00c1774b42e&=&width=2300&height=1294');
}
</style>
