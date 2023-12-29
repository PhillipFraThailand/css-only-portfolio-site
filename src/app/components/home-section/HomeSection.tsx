import { FC } from "react";
import styles from "./homeSection.module.css";
import Image from "next/image";
import svg from "/public/assets/itemssvg.svg";

export const HomeSection: FC = () => {
  return (
    <section className={styles.home}>
      <div className={`${styles.homeContent}`}>
        <h1>
          Hi, I&apos;m <span>Phillip Eismark</span>
        </h1>

        <h3 className={styles.outlinedText}>Frontend developer</h3>
        <p>
          Get help understanding your needs with a free consultation Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Recusandae suscipit
          consectetur, commodi quo laudantium mollitia, illum, esse repellendus
          assumenda iure veniam. Ratione numquam asperiores nostrum libero
          eveniet?
        </p>
        <div className="btnContainer">
          <a className="btn" href="#">
            Hire me
          </a>
          <a className="btn" href="#">
            Let&apos;s Talk!
          </a>
        </div>
      </div>
      <Image
        priority={true}
        className={styles.homeImg}
        src={svg}
        alt="Icons of a Computer, a Phone, and a Website"
        height={700}
        width={700}
      />
    </section>
  );
};
