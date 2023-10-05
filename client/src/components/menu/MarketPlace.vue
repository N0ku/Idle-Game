<template>
  <div class="marketplace-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="marketplace-content bg-white rounded-lg p-4">
      <button class="absolute top-2 right-2 text-4xl text-gray-500 hover:text-gray-700" @click="closeMarketPlace">X</button>
      <h2 class="text-2xl font-semibold text-black mb-4">Marketplace</h2>
      <div class="mb-4">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Filtrer</button>
        <button class="bg-green-500 text-white px-4 py-2 rounded-md">Ajouter au Marketplace</button>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="item in items" :key="item.id" class="border p-2">
          <img :src="item.image" alt="Item" class="w-16 h-16 mx-auto mb-2">
          <p class="text-center">{{ item.name }}</p>
          <p class="text-center text-green-500 font-semibold">{{ item.price }} $</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Item 1",
          image: "url_de_l_image1.jpg",
          price: 10,
        },
        {
          id: 2,
          name: "Item 2",
          image: "url_de_l_image2.jpg",
          price: 15,
        },
        // Ajoutez d'autres éléments de vente ici
      ],
    };
  },
  methods: {
    closeMarketPlace() {
      this.$emit('close-marketplace');
    }
  }
}
</script>

<style scoped>
/* Styles de la Marketplace */
</style>
