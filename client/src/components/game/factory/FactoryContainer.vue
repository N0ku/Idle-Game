<template>
  <div class="slider-container">
    <div class="slider top-full left-30 p-4 z-25">
      <div class="factory rounded-full" v-for="(factory, index) in props.factories" :key="index">
        <div v-if="factory.level && factory.level >= 5" class="w-full">
          <div
            v-for="(product, index) in TypeFactoryExtensions.getRequiredProductsForUpgrade(factory)"
            :key="index"
            :class="[
              TypeFactoryExtensions.hasRequiredResources([product], userStore.getProducts)
                ? 'bg-gradient-to-r from-green-400 via-green-500 to-green-600'
                : 'bg-red-400',
              'w-full h-7 mb-1.5 flex group'
            ]"
          >
            <ItemRequired :product="product" />
          </div>
        </div>

        <div class="menu">
          <button
            type="button"
            :class="[
              !TypeFactoryExtensions.CanUpgradeFactory(userStore.getMoney, factory, userStore)
                ? 'bg-gray-300 '
                : 'bg-gradient-to-r from-green-400 via-green-500 to-green-600',
              'text-white  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
            ]"
            @click="toggleUpgrade(factory)"
            :disabled="
              !TypeFactoryExtensions.CanUpgradeFactory(userStore.getMoney, factory, userStore)
            "
          >
            Upgrade
          </button>
        </div>

        <div class="group">
          <img
            class="rounded-full"
            :src="TypeFactoryExtensions.GetImage(factory?.factoryType)"
            :alt="'Image de la factory ' + (index + 1)"
          />
          <span
            class="group-hover:opacity-100 transition-opacity bg-green-500 px-24 text-sm text-gray-100 rounded-md absolute -translate-x-1/2 translate-y-full mt-16 opacity-0 mx-auto"
            >Current production : {{ factory.getProduction() }} per second <br />
            Price Upgrade : {{ TypeFactoryExtensions.GetPriceUpgrade(factory) }} Level:
            {{ factory.getLevel() }}
          </span>
        </div>
        <h1>Factory {{ factory.getProductName() }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  top: 15%;
}

.slider {
  position: absolute;
  display: flex;
  transition: transform 0.5s ease-in-out;
  justify-content: center;
  flex-wrap: nowrap;
}

.factory {
  text-align: center;
  width: 20%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  height: auto;
}
</style>

<script setup lang="ts">
import { Factory, TypeFactoryExtensions, User } from '../../../../../server/src/global/implements'
import { useUserStore } from '@/stores/datastore'
import ItemRequired from './ItemRequired.vue'
import { log } from 'console'
const props = defineProps({
  factories: {
    type: Array as () => Factory[]
  }
})
const userStore = useUserStore()
function toggleUpgrade(factory: Factory) {
  const rawLevel = factory.getLevel()
  const currentLevel = typeof rawLevel === 'number' ? rawLevel : 1
  const nextLevel = currentLevel + 1
  const upgradedFactory = new Factory(
    factory.productName,
    factory.factoryType,
    factory.userId,
    factory.production,
    nextLevel,
    factory.id,
    factory.id_localisation
  )

  userStore.updateFactory({ factory: upgradedFactory })
  //Enleve l'argent
  userStore.setMoney({
    money: userStore.getMoney - TypeFactoryExtensions.GetPriceUpgrade(factory)
  })

  //Enleve les ressources
  if (currentLevel >= 5) {
    const requiredProducts = TypeFactoryExtensions.getRequiredProductsForUpgrade(factory)
    const userProducts = userStore.getProducts
    // Parcourez les produits nécessaires pour la mise à niveau
    for (const requiredProduct of requiredProducts) {
      const productName = requiredProduct.name
      const requiredQuantity = requiredProduct.quantity

      // Recherchez le produit correspondant dans userStore.getProducts
      const productIndex = userProducts.findIndex((product) => product.name === productName)

      if (productIndex !== -1) {
        // Si le produit est trouvé, déduisez la quantité nécessaire
        userProducts[productIndex].quantity = userProducts[productIndex].quantity - requiredQuantity
      } else {
        // Gérer le cas où le produit n'est pas trouvé dans userStore.getProducts
        console.warn(`Produit "${productName}" non trouvé dans userStore.getProducts`)
      }
    }
    userStore.setProducts({ products: userProducts })
  }

  const myUser: User = new User(
    userStore.getUsername,
    userStore.password,
    userStore.getFactories,
    userStore.getSuccess,
    userStore.getId,
    userStore.getMoney,
    userStore.getProducts
  )

  userStore.updateUser({ user: myUser })
}
</script>
