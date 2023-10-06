<script lang="ts" setup>
import { reactive } from 'vue'
import CardDrawer from '@/components/game/drawer/CardDrawer.vue'
import {
  Products,
  Product,
  TypeFactory,
  Factory,
  Success
} from '../../../../../server/src/global/implements'

import { Trade } from '../../../../../server/src/global/interface/Trade'

const props = defineProps({
  factories: {
    type: Array as () => Factory[]
  },
  success: {
    type: Array as () => Success[]
  },
  allProducts: {
    type: Array as () => Product[]
  }
})

console.log(props.success);



const fullSell: Trade[] = [
  new Trade('dzdzdzd', Products.Wood, 30, 20, '877Ec-zdzd-zdz', 'zfezfzefef'),
  new Trade('dzdzdzd', Products.Water, 30, 20, '877Ec-zdzd-zdz', 'zfezfzefef'),
  new Trade('dzdzdzd', Products.Water, 30, 20, '877Ec-zdzd-zdz', 'zfezfzefef')
]
let open = reactive({ value: false })
let view = reactive({ value: 'global' })
let right = true

function toogle() {
  open.value = !open.value
}
function handleView(viewChoice: string) {
  view.value = viewChoice
}
</script>

<template>
  <!-- Sidebar -->
  <div :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']" class="absolute w-50 flex top-0 h-screen z-20">
    <!--Drawer -->
    <button
      class="w-8 h-40 p-1 my-auto rounded text-white bg-gray-700 text-center focus:outline-none hover:bg-gray-800 transition-color rounded-l-full duration-300"
      @click="toogle">
      <span :class="[open.value ? '-rotate-180' : '']" class="block transform origin-center font-bold">
        <!-- Chevron Icone -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M15.75 19.5L8.25 12l7.5-7.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </button>
    <div class="bg-gray-800 w-2 border-l-4 border-gray-700 flex top-0 h-screen z-20"></div>
    <!-- Sidebar Content -->
    <div v-if="open.value" class="transition-all w-80 duration-700 bg-gray-800 flex">
      <!-- Boutton pour handle les view -->
      <div class="w-80">
        <div class="w-80 h-12 flex justify-center mt-1">
          <div class="group">
            <!-- Bouton de gauche -->
            <button :class="[view.value == 'global' ? 'bg-gray-800' : 'bg-gray-700']"
              class="rounded-l-xl border-gray-900 border-2 text-white font-bold py-2 px-4" @click="handleView('global')">
              Global
            </button>

            <!-- Bouton du milieu -->
            <button :class="[view.value == 'bonus' ? 'bg-gray-800' : 'bg-gray-700']"
              class="border-gray-900 border-2 text-white font-bold py-2 px-4" @click="handleView('bonus')">
              Succès
            </button>

            <!-- Bouton de droite -->
            <button :class="[view.value == 'history' ? 'bg-gray-800' : 'bg-gray-700']"
              class="rounded-r-xl border-gray-900 border-2 text-white font-bold py-2 px-4" @click="handleView('history')">
              Historique
            </button>
          </div>
        </div>

        <!-- View Onglet -->

        <!-- Global View -->
        <div v-if="view.value == 'global'" class="grid grid-rows-2 mt-16">
          <!-- Ressource Layout -->
          <div class="content-center">
            <div class="grid justify-center mb-2">
              <div class="text-center rounded-full bg-green-400 font-bold text-white p-1 text-xl">
                Ressources
              </div>
            </div>
            <div class="w-9/12 overflow-x-auto grid grid-rows-4 grid-flow-col gap-2">
              <!--  -->
              <div class="w-32 h-10 m-2" v-for="(product, index) in props.allProducts" :key="index">
                <CardDrawer mode="ressource" :product="product" />
              </div>
            </div>
          </div>

          <!-- Bonus Layout -->
          <div class="content-center mt-8">
            <div class="grid justify-center mb-2">
              <div class="text-center rounded-full bg-orange-400 font-bold text-white p-1 text-xl">
                Usine
              </div>
            </div>
            <div class="w-9/12 overflow-x-auto grid grid-rows-4 grid-flow-col gap-2">
              <div class="w-32 h-10 m-2" v-for="(factory, index) in props.factories" :key="index">
                <CardDrawer mode="usine" :factory="factory" />
              </div>
            </div>
          </div>
        </div>

        <!-- Bonus View -->
        <div v-if="view.value == 'bonus'" class="grid grid-rows-2 gap-4 mt-2">
          <!-- Bonus Layout -->
          <div class="content-center">
            <div class="grid justify-center mb-2">
              <div class="text-center rounded-full bg-blue-400 font-bold text-white p-1 text-xl">
                Succès Obtenus
              </div>
            </div>
            <div class="w-full h-full grid grid-rows-4 grid-flow-col gap-2">
              <div class="w-2/5 h-10 m-2">
                <span
                  class="inline-block w-24 bg-gray-200 border-r-4 border-b-4 shadow-lg perspective bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
                  v-for="(s, index) in props.success" v-bind:key="index">{{ s.name }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Historique View -->
        <div v-if="view.value == 'history'" class="grid grid-rows-2 gap-4 mt-2">
          <div class="content-center">
            <div class="grid justify-center mb-2">
              <div class="text-center rounded-full bg-red-400 font-bold text-white p-1 text-xl">
                Historique des ventes
              </div>
            </div>
            <div class="w-full h-full grid grid-rows-4 grid-flow-col gap-2">
              <div class="w-54 h-10 m-2" v-for="(trade, index) in fullSell" :key="index">
                <CardDrawer mode="transfert" :trade="trade"></CardDrawer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.group {
  display: inline-flex;
  overflow: hidden;
}
</style>
