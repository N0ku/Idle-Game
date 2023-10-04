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
          class="absolute flex top-0 h-screen z-20"
          :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
      >
        <!--Drawer -->
        <button
            @click="toogle"
            class="w-12 h-48 p-1 my-auto rounded text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300"
        >
					<span
              :class="[right ? '-rotate-90' : 'rotate-90']"
              class="block transform origin-center font-bold"
          >
						Drawer
					</span>
        </button>

        <!-- Sidebar Content -->
        <div
            ref="content"
            class="transition-all max-w-lg duration-700 bg-yellow-200 overflow-hidden flex items-center justify-center"
            v-if="open.value"
        >
          <div class="w-48 text-center font-bold text-xl">Sidebar</div>
          <slot></slot>
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
