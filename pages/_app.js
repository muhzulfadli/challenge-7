import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../Components/Layout';

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Head>
        <title>Challenge 7 App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"/>
      </Head>
      <Component {...pageProps} />
    </Layout> 
  );
}

export default MyApp
