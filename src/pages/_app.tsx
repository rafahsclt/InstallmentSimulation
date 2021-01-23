import GlobalStyles from "../styles/GlobalStyles"
import storeWrapper from '../store/index'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default storeWrapper.withRedux(MyApp)
