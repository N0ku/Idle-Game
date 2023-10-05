<script lang="ts" setup>

import {reactive} from "vue";
import CardDrawer from "@/components/game/drawer/CardDrawer.vue";
import {Factory} from "@/global/classes/Factory";
import {Products, TypeFactory} from "@/global/enums/enumFactory";
import {Product} from "@/global/classes/Products";

let open = reactive({value: false})
let view = reactive({value: 'global'})
let right = true
let fullFactory: Factory[] = [{
  id: 'feef',
  factoryType: TypeFactory.WoodProduction,
  id_localisation: 2,
  production: 20,
  level: 5,
  productName: Products.Wood
},
  {
    id: 'feef',
    factoryType: TypeFactory.WoodProduction,
    id_localisation: 2,
    production: 20,
    level: 2,
    productName: Products.Wood
  },
  {
    id: 'feef',
    factoryType: TypeFactory.WoodProduction,
    id_localisation: 2,
    production: 20,
    level: 1,
    productName: Products.Wood
  },
  {
    id: 'feef',
    factoryType: TypeFactory.WoodProduction,
    id_localisation: 2,
    production: 20,
    level: 1,
    productName: Products.Wood
  },

  {
    id: 'feef',
    factoryType: TypeFactory.WoodProduction,
    id_localisation: 2,
    production: 20,
    level: 1,
    productName: Products.Wood
  }]


let allProduct : Product[] = [{
  name : Products.Water,
  illustration : 'src/assets/img/DALL·E 2023-10-03 16.53.31 - create a pot in pixel art 16x16 .png',
  description : 'd',
  price : 20
},{
  name : Products.Water,
  illustration : 'src/assets/img/DALL·E 2023-10-03 16.53.31 - create a pot in pixel art 16x16 .png',
  description : 'd',
  price : 20
},{
  name : Products.Water,
  illustration : 'src/assets/img/DALL·E 2023-10-03 16.53.31 - create a pot in pixel art 16x16 .png',
  description : 'd',
  price : 20
},{
  name : Products.Water,
  illustration : 'src/assets/img/DALL·E 2023-10-03 16.53.31 - create a pot in pixel art 16x16 .png',
  description : 'd',
  price : 20
},{
  name : Products.Water,
  illustration : 'src/assets/img/DALL·E 2023-10-03 16.53.31 - create a pot in pixel art 16x16 .png',
  description : 'd',
  price : 20
},{
  name : Products.Water,
  illustration : 'src/assets/img/DALL·E 2023-10-03 16.53.31 - create a pot in pixel art 16x16 .png',
  description : 'd',
  price : 20
},
]

function toogle() {
  open.value = !open.value;
}

function handleView(viewChoice: string) {
  view.value = viewChoice
}
</script>

<template>

  <!-- Sidebar -->
  <div class="fixed inset-0 flex z-40">

    <div
        :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
        class="absolute w-50 flex top-0 h-screen z-20 "
    >
      <!--Drawer -->
      <button
          class="w-8 h-40 p-1 my-auto rounded text-white bg-gray-700 text-center focus:outline-none hover:bg-gray-800 transition-color rounded-l-full  duration-300"
          @click="toogle"
      >
					<span
              :class="[open.value ? '-rotate-180' : '']"
              class="block transform origin-center font-bold"
          >
            <!-- Chevron Icone -->
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 19.5L8.25 12l7.5-7.5" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>

					</span>
      </button>
      <div class=" bg-gray-800 w-2 border-l-4 border-gray-700 flex top-0 h-screen z-20">

      </div>
      <!-- Sidebar Content -->
      <div
          v-if="open.value"
          class="transition-all  w-80 duration-700 bg-gray-800 flex"
      >

        <!-- Boutton pour handle les view -->
        <div class=" w-80">
          <div class="w-80 h-12 flex justify-center mt-1">
            <div class="group ">
              <!-- Bouton de gauche -->
              <button :class="[view.value == 'global' ? 'bg-gray-800' : 'bg-gray-700' ]"
                      class="rounded-l-xl  border-gray-900 border-2 text-white font-bold py-2 px-4"
                      @click="handleView('global')">
                Global
              </button>

              <!-- Bouton du milieu -->
              <button :class="[view.value == 'bonus' ? 'bg-gray-800' : 'bg-gray-700' ]"
                      class=" border-gray-900 border-2 text-white font-bold py-2 px-4"
                      @click="handleView('bonus')">
                Bonus
              </button>

              <!-- Bouton de droite -->
              <button :class="[view.value == 'history' ? 'bg-gray-800' : 'bg-gray-700' ]"
                      class="rounded-r-xl border-gray-900 border-2 text-white font-bold py-2 px-4"
                      @click="handleView('history')">
                Historique
              </button>
            </div>
          </div>

          <!-- View Onglet -->

          <!-- Global View -->
          <div v-if="view.value == 'global'" class="grid grid-rows-2 mt-2">

            <!-- Ressource Layout -->
            <div class="content-center">
              <div class=" grid justify-center mb-2">
                  <div class="text-center rounded-full  bg-green-400 font-bold text-white p-1 text-xl">Ressources</div>
              </div>
              <div class="w-full h-full grid grid-rows-4 grid-flow-col gap-2">
                <div class="w-32 h-10 m-2" v-for="product in allProduct">
                  <CardDrawer mode="ressource" :product="product"></CardDrawer>
                </div>
              </div>
            </div>

            <!-- Bonus Layout -->
            <div class="content-center mt-8">
              <div class=" grid justify-center mb-2 ">
                  <div class="text-center rounded-full  bg-orange-400 font-bold text-white p-1 text-xl">Usine</div>
              </div>
              <div class="w-full h-full grid grid-rows-4 grid-flow-col gap-2">
                <div v-for="factory in fullFactory" class="w-2/5 h-10 m-2">
                  <CardDrawer :factory="factory" mode="usine"></CardDrawer>
                </div>
              </div>
            </div>
          </div>

          <!-- Bonus View -->
          <div v-if="view.value == 'bonus'" class="grid grid-rows-2 gap-4 mt-2">

            <!-- Bonus Layout -->
            <div class="content-center ">
              <div class=" grid justify-center mb-2 ">
                <div class="text-center rounded-full  bg-blue-400 font-bold text-white p-1 text-xl">Bonus Actif</div>
              </div>
              <div class="w-full h-full grid grid-rows-4 grid-flow-col gap-2">
                <div class="w-2/5 h-10 m-2">
                  <span
                      class="inline-block w-24 bg-gray-200 border-r-4 border-b-4 shadow-lg perspective bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
                  >Gain +3%</span>
                </div>
              </div>
            </div>
          </div>


          <!-- Historique View -->
          <div v-if="view.value == 'history'" class="grid grid-rows-2 gap-4 mt-2">
            <div class="content-center ">
              <div class=" grid justify-center mb-2 ">
                <div class="text-center rounded-full  bg-red-400 font-bold text-white p-1 text-xl">Historique des achats</div>
              </div>
              <div class="w-full h-full grid grid-rows-4 grid-flow-col gap-2 ">
                <div class="w-54 h-15 m-2">
                  <CardDrawer mode="transfert"></CardDrawer>
                </div>
                <div class="w-54 h-15 m-2">
                  <CardDrawer mode="transfert"></CardDrawer>
                </div>
                <div class="w-54 h-15 m-2">
                  <CardDrawer mode="transfert"></CardDrawer>
                </div>
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
