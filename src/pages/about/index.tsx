import React from "react";
import Image from "next/image";
import styles from "./index.module.css";

export default function About() {
  return (
    <main>
      <section className={styles.contentBlock}>
        <h1>
          About <span className={styles.highlight}>Me</span>
        </h1>
        <div>
          <span className={styles.circleSpinner}>
            <Image
              priority={true}
              className={styles.img}
              src="/assets/Group 4.png"
              alt="Image of Phillip Eismark"
              height={400}
              width={400}
            />
          </span>
        </div>
        {/* TODO: edit font */}
        <div className={styles.aboutContent}>
          <h2 className={styles.h2}>Frontend Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            inventore est dolorem obcaecati aliquid? Nulla ea ratione animi in
            neque tempora eius deserunt voluptatibus corrupti, alias, dolorem
            placeat sed numquam asperiores quidem ipsa veritatis consequuntur.
          </p>
        </div>
        <div className="btnContainer">
          <button className="btn">Read more</button>
        </div>
      </section>
    </main>
  );
}
