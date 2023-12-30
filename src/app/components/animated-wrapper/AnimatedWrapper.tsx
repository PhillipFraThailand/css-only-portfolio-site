import { CSSProperties, FC, ReactNode } from "react";
import styles from "./animatedWrapper.module.css";
type AnimatedWrapperProps = {
  animationDelay?: number;
  children: ReactNode;
};

// Wraps components and adds an animation delay based on the index prop.
export const AnimatedWrapper: FC<AnimatedWrapperProps> = ({
  animationDelay,
  children,
}) => {
  const style = animationDelay
    ? ({ "--i": animationDelay + 1 } as CSSProperties) // Cast to avoid ts error.
    : undefined;

  return (
    <div className={styles.animate} style={style}>
      {children}
    </div>
  );
};
