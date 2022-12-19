import '../styles/styles.scss'
import { Provider } from 'react-redux';
import { AuthContextProvider } from '../context/AuthContext'
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthContextProvider>

  )
}

export default MyApp
