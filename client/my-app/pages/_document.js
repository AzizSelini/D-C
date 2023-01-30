import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.0.31/default/snipcart.js"
        ></script>
        <div
          id="snipcart"
          data-config-modal-style="side"
          data-api-key="NDU0M2EyNWMtMmYxMS00OTFlLWIxNDEtZjc2ZmQxNzU0YWVlNjM4MDY3MzA3MTMzMjY3ODU2
          "
          hidden
        ></div>
      </body>
    </Html>
  );
}
