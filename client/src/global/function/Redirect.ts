import Cookies from 'js-cookie'
import { useRouter } from 'vue-router'
export function isLogin() {
  const router = useRouter()
  const hasValidToken = Cookies.get('token_little_garden')
  if (hasValidToken) {
    // Redirigez vers /game si le cookie avec un token valide existe
    router.push('/game')
  }
}
