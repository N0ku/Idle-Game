import { defineStore } from 'pinia'
import * as Implements from '../../../global/implements'
import axios from 'axios'

////////////////////////////////////////////////////////////////

// Vous pouvez maintenant utiliser les éléments exportés depuis implements.ts
// const instance = new Implements.TestClasses();
// const interfaceInstance: Implements.TestInterface = { /* ... */ };
// const enumValue = Implements.enumTest.Vert;

////////////////////////////////////////////////////////////////

export const useUserStore = defineStore('User', {
  state: (): Implements.UserStage => ({
    id: '',
    username: '',
    email: '',
    password: '',
    factories: [],
    purchases: undefined,
    sells: undefined
  }),
  getters: {
    getFactories(state): Implements.Factory[] {
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
    }
  },
  actions: {
    setFactories({ factories }: { factories: Implements.Factory[] }) {
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
    addFactory({ factory }: { factory: Implements.Factory }) {
      this.factories.push(factory)
    },
    removeFactory({ id }: { id: string }) {
      this.factories = this.factories.filter((factory) => factory.id !== id)
    },
    updateFactory({ factory }: { factory: Implements.Factory }) {
      this.factories = this.factories.map((f) => {
        if (f.id === factory.id) {
          return factory
        }
        return f
      })
    },

    fetchUserFactories() {
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/factories/${this.id}`).then((response) => {
        this.factories = response.data
      })
    },
    fetchPurchase() {
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/purchase/${this.id}`).then((response) => {
        this.purchases = response.data
      })
    },
    fetchSells() {
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/sells/${this.id}`).then((response) => {
        this.sells = response.data
      })
    },
    fetchUser({ id }: { id: string }) {
      axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/user/${id}`).then((response) => {
        this.id = response.data.id
        this.username = response.data.name
        this.email = response.data.email
        this.password = response.data.password
        this.fetchPurchase()
        this.fetchSells()
        this.fetchUserFactories()
      })
    }
  }
})
