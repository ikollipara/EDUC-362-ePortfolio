/* _app.tsx
 * Ian Kollipara
 * 2021.01.23
 * Custom Next.js App
 */

// Imports
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
