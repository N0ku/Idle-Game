import { defineStore } from 'pinia'
import { UserStage, Factory, Product, User } from '../../../server/src/global/implements'
import axios from 'axios'

////////////////////////////////////////////////////////////////

// Vous pouvez maintenant utiliser les éléments exportés depuis implements.ts
// const instance = new Implements.TestClasses();
// const interfaceInstance: Implements.TestInterface = { /* ... */ };
// const enumValue = Implements.enumTest.Vert;

////////////////////////////////////////////////////////////////

export const useUserStore = defineStore('User', {
  state: (): UserStage => ({
    id: '',
    username: '',
    email: '',
    password: '',
    factories: [],
    money: 0,
    products: [],
    purchases: undefined,
    sells: undefined
  }),
  getters: {
    getFactories(state): Factory[] {
      return state.factories
    },
    getId(state): string {
      return state.id
    },
    getUsername(state): string {
      return state.username
    },
    getEmail(state): string {
      return state.email
    },
    getPurchases(state): undefined {
      return state.purchases
    },
    getSells(state): undefined {
      return state.sells
    },
    getMoney(state): number {
      return state.money
    },
    getProducts(state): Product[] {
      return state.products
    }
  },
  actions: {
    setFactories({ factories }: { factories: Factory[] }) {
      this.factories = factories
    },
    setId({ id }: { id: string }) {
      this.id = id
    },
    setUsername({ name }: { name: string }) {
      this.username = name
    },
    setEmail({ email }: { email: string }) {
      this.email = email
    },
    setPurchases({ purchases }: { purchases: undefined }) {
      this.purchases = purchases
    },
    setSells({ sells }: { sells: undefined }) {
      this.sells = sells
    },
    setMoney({ money }: { money: number }) {
      this.money = money
    },
    setProducts({ products }: { products: Product[] }) {
      this.products = products
    },
    addFactory({ factory }: { factory: Factory }) {
      axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/factories`, factory).then((response) => {
        this.factories.push(response.data)
      })
    },
    addProduct({ product }: { product: Product }) {
      this.products.push(product)
      axios.put(`${import.meta.env.VITE_APP_BACKEND_URL}/users/${this.id}`, {
        products: this.products
      })
    },
    removeFactory({ id }: { id: string }) {
      axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/factories/${id}`).then(() => {
        this.factories = this.factories.filter((factory) => factory.id !== id)
      })
    },
    updateFactory({ factory }: { factory: Factory }) {
      axios
        .put(`${import.meta.env.VITE_APP_BACKEND_URL}/factories/${factory.id}`, factory)
        .then((response) => {
          this.fetchUser(response.data.id)
        })
    },

    async fetchUserFactories(id: string) {
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/factories/user/${id}`).then((response) => {
        this.factories = response.data
      })
    },
    async fetchPurchase() {
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/purchase/${this.id}`).then((response) => {
        this.purchases = response.data
      })
    },
    async fetchSells() {
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/sells/${this.id}`).then((response) => {
        this.sells = response.data
      })
    },
    async fetchUser(id: string) {
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/users/${id}`).then((response) => {
        const user = response.data.user
        this.id = user._id
        this.username = user.username
        this.email = user.email
        this.password = user.password
        this.money = user.money
        this.products = user.products
        this.fetchUserFactories(user._id)
        /*        this.fetchPurchase()
        this.fetchSells() */
      })
    },
    updateUser({ user }: { user: User }) {
      axios
        .put(`${import.meta.env.VITE_APP_BACKEND_URL}/users/${user.id}`, user)
        .then((response) => {
          return this.fetchUser(response.data.id)
        })
    }
  }
})
