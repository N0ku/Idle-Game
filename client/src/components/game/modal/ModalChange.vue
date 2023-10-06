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
              <div class="w-full h-auto flex flex-col overflow-auto">
                <div class="overflow-auto">
                  <div class="w-54 h-15 m-2" v-for="(echange, index) in allEchanges" :key="index">
                    <CardModalEchange :echange="echange" @changeToogle="handleEchange"/>
                  </div>
                </div>
                <!-- Ajoutez la classe overflow-auto ici -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

</template>

<script setup lang="ts">


import {defineProps, onMounted, onUnmounted, reactive} from "vue";
import {Echange, ItemEchange} from "../../../../../server/src/global/classes/Echange";
import {Products} from "../../../../../server/src/global/enums/enumFactory";
import CardDrawer from "@/components/game/drawer/CardDrawer.vue";
import CardModalEchange from "@/components/game/modal/CardModalEchange.vue";
import LittleModal from "@/components/game/modal/LittleModal.vue";
import {useEchangeStore, useUserStore} from "@/stores/datastore";
import {User} from "../../../../../server/src/global/classes/User";
import {Factory} from "../../../../../server/src/global/classes/Factory";
import {Product} from "../../../../../server/src/global/classes/Products";

let isOpen = reactive({value : false})
let isSell = reactive({value : false})

const props = defineProps({
  allProducts: {
    type: Array as () => Product[]
  }
})

let echangeStore = useEchangeStore()
let allEchanges : Echange[] = reactive( []);

let userStore = useUserStore()

onMounted(() => {
  echangeStore.getAllEchange().then((response) => {
     response.data.echange.map((item : Echange) => {
       if(userStore.getId === item.fromUser.userId || item.toUser.userId != null){
         return
       }
      allEchanges.push(new Echange(item._id,item.fromUser, item.toUser))
    })
  })
  /*allEchanges.forEach((echange) => {
  echanges.value.push(echange);
  });*/
});

const handleEchange  = (data : Echange) => {

  let productToUser = props.allProducts?.find(product => {return product.name == data.echange.toUser.productName});

  if(productToUser == undefined || productToUser.quantity < data.echange.toUser.quantity){ console.log('Pas asssez de ressource'); return;}

  let newEchange : Echange = new Echange(data.echange.id, data.echange.fromUser,data.echange.toUser)
  console.log(newEchange)
  newEchange.toUser.userId  = userStore.getId
  let success = echangeStore.putEchange(newEchange)

  if(success){
    const indexToRemove = allEchanges.findIndex(echange => echange.id === data.echange.id)
    console.log(indexToRemove)

  }



}
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
