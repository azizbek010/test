import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return    <AuthProvider> <Component {...pageProps} />    <AuthProvider></AuthProvider>
}

export default MyApp;
