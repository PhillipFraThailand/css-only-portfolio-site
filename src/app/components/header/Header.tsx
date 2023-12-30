import React, { CSSProperties, FC } from "react";
// import { BiMenu } from "react-icons/bi";
import styles from "./header.module.css";
import Link from "next/link";
import { AnimatedWrapper } from "../animated-wrapper/AnimatedWrapper";

export const Header: FC = () => {
  // TODO: Add stack menu for mobile
  // const StackMenu = (
  //   <div id="stack-menu">
  //     <BiMenu />
  //   </div>
  // );

  const links = [
    { href: "/", text: "Home", active: true },
    { href: "/about", text: "About" },
    { href: "/education", text: "Education" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <header className={styles.header}>
      <AnimatedWrapper>
        <h1 className={styles.logo}>phillip.</h1>
      </AnimatedWrapper>
      <AnimatedWrapper>
        <nav className={styles.navbar}>
          {links.map(({ text, href, active }, index) => (
            <Link
              key={`${text}-${index}`}
              href={href}
              className={`${styles.a} ${active ? styles.active : undefined}`}
            >
              {text}
            </Link>
          ))}
        </nav>
      </AnimatedWrapper>
    </header>
  );
};
