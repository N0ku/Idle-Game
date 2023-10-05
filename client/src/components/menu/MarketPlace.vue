<template>
  <div class="marketplace-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="marketplace-content bg-white rounded-lg p-4">
      <button class="absolute top-2 right-2 text-4xl text-gray-500 hover:text-gray-700" @click="closeMarketPlace">X</button>
      <h2 class="text-2xl font-semibold text-black mb-4">Marketplace</h2>
      <div class="mb-4">
        <button
          @click="toggleDropdown"
          id="filterDropdownButton"
          data-dropdown-toggle="filterDropdown"
          class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12 a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
          </svg>
          Filtrer
          <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </button>
        <div v-if="showDropdown" id="filterDropdown" class="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
            <li class="flex items-center">
                <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
            </li>
            <li class="flex items-center">
                <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
            </li>
        </div>
      </div>
      <div class="mb-4">
        <button @click="showAllItems" class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Tous les objets</button>
        <button @click="showUserItemsOnly" class="bg-purple-500 text-white px-4 py-2 rounded-md">Mes ventes</button>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="item in (showUserItems ? userItems : items)" :key="item.id" class="border p-2">
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
        // Tous les objets disponibles
        {
          id: 1,
          name: "Item 1",
          image: "../../assets/img/weedcoin.jpeg",
          price: 10,
        },
        {
          id: 2,
          name: "Item 2",
          image: "../../assets/img/weedcoin.jpeg",
          price: 15,
        },
      ],
      userItems: [
        // Objets mis en vente par l'utilisateur
        {
          id: 3,
          name: "Item 3",
          image: "../../assets/img/weedcoin.jpeg",
          price: 20,
        },
      ],
      showDropdown: false,
      showUserItems: false,
    };
  },
  methods: {
    closeMarketPlace() {
      this.$emit('close-marketplace');
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    showAllItems() {
      this.showUserItems = false;
    },
    showUserItemsOnly() {
      this.showUserItems = true;
        },
  },
};
</script>

<style scoped>
/* Styles de la Marketplace */
</style>