import { AppProps } from "next/app";
import Head from "next/head";
import React, { useEffect } from "react";
import "./styles.css";
import Script from "next/script";
import Router from "next/router";

function CustomApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-NCYJ6RRJB7`}
      />

      <Script strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-NCYJ6RRJB7', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <Head>
        <title>Welcome!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;