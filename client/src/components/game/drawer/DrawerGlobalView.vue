<script setup lang="ts">

import {reactive} from "vue";
import CardDrawer from "@/components/game/drawer/CardDrawer.vue";
import {Factory} from "@/global/classes/Factory";
import {Products, TypeFactory} from "@/global/enums/enumFactory";

let open = reactive({ value: false})
let view = reactive({ value: 'global'})
let right = true
let fullFactory : Factory[] = [{id:'feef', factoryType:TypeFactory.WoodProduction, id_localisation: 2, production: 20, level: 5, productName: Products.Wood},
  {id:'feef', factoryType:TypeFactory.WoodProduction, id_localisation: 2, production: 20, level: 2, productName: Products.Wood},
  {id:'feef', factoryType:TypeFactory.WoodProduction, id_localisation: 2, production: 20, level: 1, productName: Products.Wood}]
function toogle(){
  open.value = !open.value;
}
function handleView(viewChoice : string){
  view.value = viewChoice
}
</script>

<template>

    <!--Sidebar with Dimmer -->
    <div class="fixed inset-0 flex z-40">
      <!-- Sidebar -->
      <div
          class="absolute w-50 flex top-0 h-screen z-20 "
          :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
      >
        <!--Drawer -->
        <button
            @click="toogle"
            class="w-8 h-40 p-1 my-auto rounded text-white bg-gray-700 text-center focus:outline-none hover:bg-gray-800 transition-color rounded-l-full  duration-300"
        >
					<span
              :class="[open.value ? '-rotate-180' : '']"
              class="block transform origin-center font-bold"
          >
            <!-- Chevron Icone -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
               </svg>

					</span>
        </button>
        <div class=" bg-gray-800 w-2 border-l-4 border-gray-700 flex top-0 h-screen z-20">

        </div>
        <!-- Sidebar Content -->
        <div
            class="transition-all  w-80 duration-700 bg-gray-800 flex"
            v-if="open.value"
        >
          <div class=" w-80">
          <div class = "w-80 h-12 flex justify-center mt-1">
            <div class="group ">
              <!-- Bouton de gauche -->
              <button class="rounded-l-xl bg-gray-700 hover:bg-gray-800 border-gray-900 border-2 text-white font-bold py-2 px-4" @click="handleView('global')">
                Global
              </button>

              <!-- Bouton de droite -->
              <button class="rounded-r-xl bg-gray-700 hover:bg-gray-800 border-gray-900 border-2 text-white font-bold py-2 px-4" @click="handleView('bonus')">
                Bonus
              </button>
            </div>
          </div>

            <div class="grid grid-rows-2 mt-2" v-if="view.value == 'global'">
            <div class="content-center">
              <div class="text-center font-bold text-white text-xl">Ressource</div>
              <div class="w-full h-full grid grid-rows-4 grid-flow-col gap-2">
                <div class="w-32 h-10 m-2">
                  <CardDrawer mode="ressource"></CardDrawer>
                </div>
              </div>
            </div>
            <div class="content-center mt-8">
              <div class=" grid justify-center">
                <div class=" w-40 ">
                 <div class="text-center rounded-full w-24 bg-orange-400 font-bold text-white  text-xl">Usine</div>
                </div>
              </div>

              <div class="w-full h-full grid grid-rows-4 grid-flow-col gap-2">
                <div class="w-2/5 h-10 m-2" v-for="factory in fullFactory">
                  <CardDrawer mode="usine" :factory="factory"></CardDrawer>
                </div>
              </div>
            </div>

            </div>

            <div class="grid grid-rows-2 gap-4 mt-2"  v-if="view.value == 'bonus'">
              <div class="content-center ">
                <div class="text-center font-bold text-white text-xl">Bonus Actif</div>
                <div class="w-full h-full grid grid-rows-4 grid-flow-col gap-2">
                  <div class="w-2/5 h-10 m-2">
                  <span class="inline-block w-24 bg-gray-200 border-r-4 border-b-4 shadow-lg perspective bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
                  >Gain +3%</span>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}
.group {
  display: inline-flex;
  overflow: hidden;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>