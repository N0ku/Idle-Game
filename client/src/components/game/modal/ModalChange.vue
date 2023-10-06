<template>

<div class="fixed left-40 top-0 z-50">
  <div>Exchange</div>
  <button
      @click="onToggle"
      class="border border-black w-16 h-16 shadow-sm font-medium rounded-full hover:shadow-lg hover:bg-purple-600 "
  >
  </button>
</div>

    <transition name="fade">
      <div class="fixed left-40 mt-40 z-50" v-if="isOpen.value">
        <div class="fixed ml-36 mt-24  z-40" v-if="isSell.value">
          <LittleModal @changeEvent="handleItems"/>
          </div>

        <div
            class="w-screen h-96 max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-gray-800"
        >
          <div class="flex flex-col">
            <div class="flex flex-row justify-between">
              <div>
                <button
                    @click="openSell"
                    class=" mr-2 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
                >
                  Vendre un objet
                </button>
              </div>
              <button
                  @click="onToggle"
                  class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
              >
                Close
              </button>
            </div>
            <div class="mt-8 flex flex-col justify-center w-full">
              <h2 class="text-3xl">Echange en attente</h2>
              <div class="w-full h-full grid grid-rows-4 grid-flow-col">
                <div class="w-54 h-15  m-2" v-for="(echange, index) in change" :key="index">
                  <CardModalEchange :echange="echange"/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

</template>

<script setup lang="ts">


import {onMounted, onUnmounted, reactive} from "vue";
import {Echange, ItemEchange} from "../../../../../server/src/global/classes/Echange";
import {Products} from "../../../../../server/src/global/enums/enumFactory";
import CardDrawer from "@/components/game/drawer/CardDrawer.vue";
import CardModalEchange from "@/components/game/modal/CardModalEchange.vue";
import LittleModal from "@/components/game/modal/LittleModal.vue";
import {useEchangeStore} from "@/stores/datastore";

let isOpen = reactive({value : false})
let isSell = reactive({value : false})



let echangeStore = useEchangeStore()
let echanges = reactive({ value: [] });


onMounted(() => {
  const allEchanges = echangeStore.getAllEchange();
  console.log(allEchanges)
  allEchanges.forEach((echange) => {
  echanges.value.push(echange);
  });
});


function onToggle() {
  console.log('r')
  isOpen.value = !isOpen.value;
}

function openSell() {
  console.log('r')
  isSell.value = !isSell.value;
}

const handleItems = (data) => {
  console.log(data

  )
  echangeStore.addEchange(data)
  isSell.value = false
};


</script>
<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
