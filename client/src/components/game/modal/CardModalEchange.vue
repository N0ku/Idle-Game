<script setup lang="ts">
import {
  Factory,
  Product,
  TypeFactoryExtensions,
  ProductsExtensions
} from '../../../../../server/src/global/implements'
import {Trade} from "../../../../../server/src/global/interface/Trade";
import {Echange, ItemEchange} from "../../../../../server/src/global/classes/Echange";
import {defineEmits, toRefs} from "vue";
import {useUserStore} from "@/stores/datastore";



const props = defineProps({
  echange: Echange,
})



let userStore = useUserStore()
const fromUserItem : ItemEchange = props.echange.fromUser
const toUserItem : ItemEchange = props.echange?.toUser


console.log(ProductsExtensions.GetImage("Stone"))
const emit = defineEmits<{
  changeToogle: [echange: Echange]
}>();

function toogleEchange( echange : Echange){
  emit('changeToogle', { echange });
}

function getTotalPriceItem(){
  return ProductsExtensions.GetPrice(props.product?.name) * props.product?.quantity;
}
</script>

<template>
  <!-- Mode ressource -->
  <div
      v-if="props.echange"
      class="border border-r-4 border-b-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 perspective w-full bg-white h-full flex flex-row"
  >
    <!-- Contenu précédent -->
    <div class="flex justify-between items-center py-2 px-4 w-64">
      <div class="flex flex-row">
        <div class="text-black">
          {{ fromUserItem.quantity }}
        </div>
        <img
            class="h-[2rem] rounded-lg"
            :src="ProductsExtensions.GetImage(fromUserItem.productName)"
            alt="card 1"
        />
      </div>
      <div>
        <img src="src/assets/img/6957ux-flèches.jpeg" class="w-8 h-8">
      </div>

      <div class="flex flex-row">
        <div class="text-black">
        {{ toUserItem.quantity }}
      </div>
      <img
          class="h-[2rem] rounded-lg"
          :src="ProductsExtensions.GetImage(toUserItem.productName)"
          alt="card 1"
      />
      </div>
    </div>
    <div class="text-sm text-gray-800 grid content-center mr-8">
      <span>{{ props.echange.createdAt }}</span>
    </div>
    <button
        @click="toogleEchange(props.echange)"
        class="bg-green-500 border w-28 border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-green-600"
    >Echanger</button>
  </div>
</template>
