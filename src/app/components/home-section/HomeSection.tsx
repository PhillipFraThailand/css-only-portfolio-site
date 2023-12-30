import { FC } from "react";
import styles from "./homeSection.module.css";
import { AnimatedSpinnerImage } from "../animated-spinner-image/AnimatedSpinnerImage";
import { AnimatedWrapper } from "../animated-wrapper/AnimatedWrapper";
import Image from "next/image";

export const HomeSection: FC = () => {
  return (
    <section className={styles.home}>
      <AnimatedWrapper>
        <div className={styles.homeContent}>
          <h1>
            Hi, I&apos;m <span>Phillip Eismark</span>
          </h1>
          <h3 className={styles.outlinedText}>Frontend developer</h3>
          <p>
            Get help understanding your needs with a free consultation Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            suscipit consectetur, commodi quo laudantium mollitia, illum, esse
            repellendus assumenda iure veniam. Ratione numquam asperiores
            nostrum libero eveniet?
          </p>
          <div className="btnContainer">
            <a className="btn" href="#">
              Hire me
            </a>
            <a className="btn animate" href="#">
              Let&apos;s Talk!
            </a>
          </div>
        </div>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <Image
          priority={true}
          className={`${styles.homeImg}`}
          src="/assets/Group 4.png"
          alt="Image of Phillip Eismark"
          height={350}
          width={350}
        />
      </AnimatedWrapper>
    </section>
  );
};
