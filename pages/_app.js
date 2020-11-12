import '../styles/tailwind.css'
import '../services/I18nService';
import { AuthProvider } from '../services/AuthContext'
import ToastRack from '../components/ToastRack'
import 'react-toastify/dist/ReactToastify.minimal.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <ToastRack />
    </AuthProvider>
  )
}

export default MyApp
