<script setup lang="ts">
import { Factory } from '../../../../../server/src/global/implements';

const props = defineProps({
  mode : String,
  factory : Factory
})
console.log(props)
</script>

<template>
  <!-- Mode ressource -->
  <div v-if="props.mode == 'ressource'" class="border   border-r-4 border-b-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 perspective w-full bg-white	 h-full grid grid-cols-3">
    <div class="">
        <img class="h-[2rem]" src="src/assets/icone/bois.png" alt="card 1" />
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
      <img class="h-[2rem] w-full" src="src/assets/icone/bois.png" alt="card 1" />
    </div>
    <div class="text-sm text-gray-800 grid content-center">
      <span>
        <!-- Niveau {{props.factory.level}} -->
      </span>
    </div>
  </div>


</template>


