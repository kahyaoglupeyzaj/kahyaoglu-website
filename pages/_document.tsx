import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-background-primary text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
