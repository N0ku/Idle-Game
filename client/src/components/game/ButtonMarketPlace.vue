<template>
  <div class="fixed top-0 left-0 p-4">
    <div class="relative">
      <span class="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold">Marketplace</span>
    </div>
    <div class="mt-2" >
      <img src="../../assets/img/weedcoin.jpeg" alt="Votre Image" class="w-16 h-16 rounded-full bottom-10">
      <button @click="$emit('open-marketplace')" class="z-50 absolute inset-0"></button>
    </div>
  </div>
</template>
