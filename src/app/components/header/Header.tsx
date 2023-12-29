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
      <AnimatedWrapper index={1}>
        <h1 className={styles.logo}>{"phillip."}</h1>
      </AnimatedWrapper>
      <nav className={styles.navbar}>
        {/* Create links and wrap in AnimatedWrapper component to add animation delay. */}
        {links.map(({ text, href, active }, index) => (
          <AnimatedWrapper key={`${text}-${index}`} index={index}>
            <Link
              href={href}
              className={`${styles.a} ${active ? styles.active : undefined}`}
            >
              {text}
            </Link>
          </AnimatedWrapper>
        ))}
      </nav>
    </header>
  );
};
