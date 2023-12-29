import { AppProps } from "next/app";
import "../app/globals.css";
import { Header } from "@/app/components/header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main role="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}
