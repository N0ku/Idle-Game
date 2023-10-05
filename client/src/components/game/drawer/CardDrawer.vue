<script setup lang="ts">
import { Factory,Product, TypeFactoryExtensions } from '../../../../../server/src/global/implements';
import {Trade} from "../../../../../server/src/global/interface/Trade";

const props = defineProps({
  mode : String,
  factory : Factory,
  product: Product,
  trade : Trade
})
console.log(props)
</script>

<template>
  <!-- Mode ressource -->
  <div v-if="props.mode == 'ressource'" class="border   border-r-4 border-b-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 perspective w-full bg-white	 h-full grid grid-cols-3">
    <div class="">
        <img class="h-[2rem] rounded-lg " :src="props.product?.illustration" alt="card 1" />
    </div>
    <div class="text-sm text-gray-800 grid content-center">
      <span>49</span>
    </div>
    <div class="text-sm text-green-800 grid content-center">
     <span>+20</span>
    </div>
  </div>

  <!-- Mode Usine-->
  <div v-if="props.mode == 'usine'" class="border border-r-4 border-b-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 perspective w-full bg-white	 h-full grid grid-cols-2 ">
    <div class="">
      <img class="h-[2rem] w-full" :src="TypeFactoryExtensions.GetImage(props.factory?.factoryType) " alt="card 1" />
    </div>
    <div class="text-sm text-gray-800 grid content-center">
      <span>
        <!-- Niveau {{props.factory.level}} -->
      </span>
    </div>
  </div>

  <!-- Mode Transfert-->
  <div v-if="props.mode == 'transfert' && props.trade" class="border border-r-4 border-b-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 perspective w-full bg-white	 h-full grid grid-cols-2 ">
    <div class="">
      <img class="h-[2rem] w-full" src="src/assets/icone/bois.png" alt="card 1" />
    </div>
    <div class="text-sm text-gray-800 grid content-center">
      <span>
        Niveau
      </span>
    </div>
  </div>


</template>


