import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  // for Layout component in all pages:
  // return (
    // <Layout>
    //   <Component {...pageProps}
    // </Layout>)

  return <Component {...pageProps} />;
}

export default MyApp
