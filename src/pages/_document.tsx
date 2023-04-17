import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/icons/icon.png"></link>
        <meta name="theme-color" content="#9333ea" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
