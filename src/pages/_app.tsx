import GlobalStyles from "../styles/GlobalStyles"
import { Provider } from 'react-redux'

import store from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
