/* eslint no-use-before-define: 0 */
import { ThemeProvider } from '@mui/material'
import '../styles/globals.css'
import { theme } from '../theme'

function MyApp({ Component, pageProps }) {

  return <ThemeProvider theme={theme}>
               <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
