import { Head, Html, Main, NextScript, } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="tr">
      <Head >
        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'GTM-WFZSBBW', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="afterInteractive"
        /> */}

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GTM-WFZSBBW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-WFZSBBW');
        `}
        </Script>
      </Head>
      <body className="bg-background-primary text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
