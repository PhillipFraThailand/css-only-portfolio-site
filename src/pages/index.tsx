import { useEffect } from "react";
import { HeroSection } from "../app/components/hero-section/HeroSection";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  // Only run when component mounts (not SSR)
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {});

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <>
      <section>
        <h1 className="name">Phillip Eismark</h1>
      </section>
      <div className="box" style={{ backgroundColor: "red" }} />
      <div className="box" style={{ backgroundColor: "blue" }} />
      <div className="box" style={{ backgroundColor: "green" }} />

      {/* <HeroSection /> */}
      {/* <section style={{ backgroundColor: "red" }}>About</section>
      <section style={{ backgroundColor: "blue" }}>Projects</section>
      <section style={{ backgroundColor: "green" }}>Contact</section> */}
    </>
  );
}
