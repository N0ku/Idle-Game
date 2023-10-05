import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserStore } from './stores/datastore'
export function isLogin() {
  const router = useRouter()
  const userStore = useUserStore()
  const hasValidToken = Cookies.get('token_little_garden')
  if (hasValidToken) {
    // Redirigez vers /game si le cookie avec un token valide existe
    axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/users/token/${hasValidToken}`).then((response) => {
      const user = response.data.user
      if (user) {
        userStore.setFactories({ factories: user.factories })
        userStore.setId({ id: user._id })
        userStore.setUsername({ name: user.username })
        userStore.setPurchases({ purchases: user.purchases })
        userStore.setSells({ sells: user.sells })

        router.push('/game')
      }
    })
  }
}
