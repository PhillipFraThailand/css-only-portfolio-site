import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { AuroraBackground } from "@/app/components/aurora-background/AuroraBackground";
export default function Home() {
  console.log(AuroraBackground({ children: "Hello" }));
  const [isScrollIndicatorVisible, setIsScrollIndicatorVisible] =
    useState(true);

  // Only after mounting the DOM, since lenis needs to subscribe to the scroll event
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: unknown) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    lenis.on("scroll", (e: unknown) => {
      const scrollPosition = window.scrollY; // Scroll progress
      const windowHeight = window.innerHeight; // Viewport height
      const documentHeight = document.documentElement.scrollHeight; // Total document height

      // When scrolled past set amount set state to hide scroll indicator
      if (scrollPosition > windowHeight * 0.1) {
        setIsScrollIndicatorVisible(false);
      } else {
        setIsScrollIndicatorVisible(true);
      }
    });
  }, []);
  return (
    <>
      <section>
        <h1 className="header">Phillip Eismark</h1>
        <h1 className="header">Mobile App Developer</h1>
        <h1 className="header">Full Stack</h1>
        <h1 className="header">Websites</h1>
        {isScrollIndicatorVisible && <div className="scrollIndicator" />}
        <p className="header">Scroll</p>
      </section>
      <div className="box" style={{ backgroundColor: "red" }} />
      <div className="box" style={{ backgroundColor: "blue" }} />
      <div className="box" style={{ backgroundColor: "green" }} />
    </>
  );
}
