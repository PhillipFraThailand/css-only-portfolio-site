import { CSSProperties, FC, ReactNode } from "react";

type AnimatedWrapperProps = {
  index: number;
  children: ReactNode;
};

// Wraps components and adds an animation delay based on the index prop.
export const AnimatedWrapper: FC<AnimatedWrapperProps> = ({
  index,
  children,
}) => {
  const style = { "--i": index + 1 } as CSSProperties; // Cast to avoid ts error.

  return (
    <div className="animate" style={style}>
      {children}
    </div>
  );
};
