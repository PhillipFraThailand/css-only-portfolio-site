import { HeroSection } from "../app/components/hero-section/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section style={{ backgroundColor: "red" }}>About</section>
      <section style={{ backgroundColor: "green" }}>Contact</section>
    </>
  );
}
