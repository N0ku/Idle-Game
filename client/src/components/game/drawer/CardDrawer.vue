<script setup lang="ts">
import {Factory} from "@/global/implements";

const props = defineProps({
  mode : String,
  factory : Factory
})
console.log(props)
</script>

<template>
  <!-- Mode ressource -->
  <div v-if="props.mode == 'ressource'" class="rounded border md:shadow w-full h-full grid grid-cols-3 gap-3 ">
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
  <div v-if="props.mode == 'usine'" class="rounded border md:shadow w-full  h-full grid grid-cols-2 ">
    <div class="">
      <img class="h-[2rem] w-full" src="src/assets/icone/bois.png" alt="card 1" />
    </div>
    <div class="text-sm text-gray-800 grid content-center">
      <span>
        Niveau {{props.factory.level}}
      </span>
    </div>
  </div>


</template>


