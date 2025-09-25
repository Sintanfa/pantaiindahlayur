import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
  return (
    <>
    <Head>
      <title>Pantai Indah Layur </title>
      <link rel="icon" href="/island.png" />
      {/* <link href='https://unpkg.com/boxicons@2.1.4 /css/boxicons.min.css' rel='stylesheet'></link> */}
    </Head>
    <div>
      <Component {...pageProps} />
    </div>
  </>

  )

  
}

export default MyApp
