<template>


    <div class="border border-gray-700  rounded-lg w-46 h-46 bg-white text-black flex flex-col p-4">

      <div class="w-full  bg-white text-black flex flex-row ">
            <input type="number" v-model="quantityFrom" class="w-10 mr-1 border border-gray-700 ">
        <select class="border border-gray-700 p-2 focus:border-blue-500 focus:outline-none" v-model="selectedOptionFrom">
          <option v-for="(value, key) in Products" :key="key" :value="value">{{ value }}</option>
        </select>
      </div>

      <div>
        ICONE
      </div>

      <div class="w-full  bg-white text-black flex flex-row ">
        <input type="number" v-model="quantityTo" class="w-10 mr-1 border border-gray-700 ">
        <select class="border border-gray-700 p-2 focus:border-blue-500 focus:outline-none" v-model="selectedOptionTo">
          <option v-for="(value, key) in Products" :key="key" :value="value">{{ value }}</option>
        </select>
      </div>

      <button
          @click="sendItemsToChange"
          class="  mt-4 bg-green-500 border w-28 border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-green-600"
      >Echanger</button>
    </div>



</template>

<script setup lang="ts">

import {Products} from "../../../../../server/src/global/enums/enumFactory";
import {Echange, ItemEchange} from "../../../../../server/src/global/classes/Echange";
import {defineEmits, defineProps} from "vue/dist/vue";
import {Product} from "../../../../../server/src/global/classes/Products";
import {User} from "../../../../../server/src/global/classes/User";
import {useUserStore} from "@/stores/datastore";

let selectedOptionFrom : Products = Products.Wood
let quantityFrom : number = 0
const emit = defineEmits<{
  changeEvent: [echange: Echange]
}>();
const props = defineProps<{
  user : User
}>();

let selectedOptionTo : Products = Products.Wood
let quantityTo : number = 0


const sendItemsToChange = () => {
  //TODO regarder la quantity des user pour le stock mais peut etre faire ca après le emit
  if(quantityFrom <= 0 || quantityTo <= 0){return;}
 let  itemFrom : ItemEchange = new ItemEchange(selectedOptionFrom, quantityFrom, 'dvve')
  let itemTo : ItemEchange = new ItemEchange(selectedOptionTo, quantityTo, null)
  let echange : Echange = new Echange('dv',itemFrom,itemTo)
  emit('changeEvent', { echange });

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
