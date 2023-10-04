<script setup lang="ts">

import {reactive, ref} from "vue";

let open = reactive({ value: false})
let right = true

function toogle(){
  console.log('r')
  open.value = !open.value;
  console.log(open)
}
</script>

<template>

    <!--Sidebar with Dimmer -->
    <div class="fixed inset-0 flex z-40">
      <!-- Sidebar -->
      <div
          class="absolute w-50 flex top-0 h-screen z-20"
          :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
      >
        <!--Drawer -->
        <button
            @click="toogle"
            class="w-8 h-40 p-1 my-auto rounded text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300"
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

        <!-- Sidebar Content -->
        <div
            class="transition-all  w-80 duration-700 bg-white flex"
            v-if="open.value"
        >
          <div class="grid w-80 grid-rows-3 grid-flow-col gap-4">
            <div class=" text-center font-bold text-black text-xl">Vue Générale</div>
            <slot></slot>
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

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
