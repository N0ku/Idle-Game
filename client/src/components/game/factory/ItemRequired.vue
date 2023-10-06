<template>
  <div
    class="border rounded-lg shadow-lg transform hover:scale-105 hover:shadow-xl transition-transform duration-300 perspective w-full h-full flex items-center justify-between p-2"
  >
    <span
      class="group-hover:opacity-100 transition-opacity bg-gray-500 px-24 text-sm text-gray-100 rounded-md absolute opacity-0 mb-40 mx-auto"
      >{{ props.product?.quantity }}  {{ props.product?.name }}
    </span>
    <div>
      <img
        class="h-[1rem] rounded-lg"
        :src="ProductsExtensions.GetImage(props.product?.name)"
        alt="card 1"
      />
    </div>
    <div class="text-sm text-gray-800">
      <span>{{ props.product?.quantity }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Product, ProductsExtensions } from '../../../../../server/src/global/implements'
const props = defineProps({
  product: {
    type: Product,
    required: true // Rend la prop obligatoire
  }
})
</script>
