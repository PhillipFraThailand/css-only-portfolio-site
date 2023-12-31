import { HomeSection } from "../app/components/home-section/HomeSection";

export default function Home() {
  return (
    <>
      <div className="dark main-container">
        <div className="background-container">
          <div className="jumbo"></div>
        </div>
        {/* <div className="jumbo absolute -inset-[10px] opacity-50"> */}
        <HomeSection />
        <div style={{ height: "100vh" }}>100vh spacer</div>
        {/* </div> */}
      </div>
    </>
  );
}
