import { FC } from "react";
import Image, { ImageProps } from "next/image";
import styles from "./animatedSpinnerImage.module.css";

type AnimatedSpinnerImageProps = {} & Pick<ImageProps, "width" | "height">;

export const AnimatedSpinnerImage: FC<AnimatedSpinnerImageProps> = ({
  width = 300,
  height = 300,
}) => {
  return (
    <div>
      <span className={styles.circleSpinnerReverse}>
        <span className={styles.circleSpinner}>
          <Image
            priority={true}
            className={styles.img}
            src="/assets/Group 4.png"
            alt="Image of Phillip Eismark"
            height={height}
            width={width}
          />
        </span>
      </span>
    </div>
  );
};
