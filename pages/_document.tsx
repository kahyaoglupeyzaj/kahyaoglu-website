import { Head, Html, Main, NextScript, } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="tr">
      <Head >
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'GTM-WFZSBBW', 'auto');
          ga('send', 'pageview');
        `}
        </Script>
        <Script
          src="https://www.google-analytics.com/analytics.js"
          strategy="afterInteractive"
        />
      </Head>
      <body className="bg-background-primary text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
