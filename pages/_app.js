import Head from "next/head";
import Script from "next/script";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import Layout from "/components/layout/Layout";
import Loader from "/components/Loader";
import "/styles/globals.css";

function MyApp({Component, pageProps}) {
  /* First time loading */
  const [firstTime, setFirstTime] = useState(false);
  useEffect(() => {
    setFirstTime(true);
    setTimeout(() => {
      setFirstTime(false);
    }, 3000);
  }, []);

  /* const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]); */
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta
          property="og:description"
          content=" Hi, I'm Bich Trâm Pham a digital designer based in Paris currently searching for a job or remote."
        />
        <meta
          property="og:site_name"
          content="Bich Trâm Cynthia PHAM | Portfolio"
        />
        <meta property="og:image" content="/preview.png" />
        <meta name="author" content="Bich Trâm Cynthia Pham" />
        <meta
          name="copyright"
          content="Copyright© Bich Trâm Cynthia Pham all rights reserved."
        />
        <meta
          name="p:domain_verify"
          content="a5865c29d2592e6c312729f0190f5c88"
        />
        <meta name="twitter:site" content="@BichTramPh" />
        <meta
          name="description"
          content="Hi, I'm Bich Trâm Pham, a french digital designer based in Paris. I am currently searching for a job or remote."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-152641511-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-152641511-1');
          `,
        }}
      />
      {firstTime ? (
        <Loader />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
