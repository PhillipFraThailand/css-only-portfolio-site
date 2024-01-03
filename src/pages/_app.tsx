"use client";
import { AppProps } from "next/app";
import "../app/globals.css";
import { Header } from "@/app/components/header/Header";
import { AuroraBackground } from "@/app/components/aurora-background/AuroraBackground";
import { useCallback, useEffect, useMemo, useRef } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main role="main">
        <AuroraBackground>
          <Header />
          <Component {...pageProps} />
        </AuroraBackground>
      </main>
    </>
  );
}
