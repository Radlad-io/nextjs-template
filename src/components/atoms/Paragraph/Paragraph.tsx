import { FC } from "react";
import styles from "./Paragraph.module.scss";

interface Properties {
  children: JSX.Element;
}

const Paragraph: FC<Properties> = ({ children }) => {
  return (
    <>
      {/* TODO: Add container class */}
      <div className={styles.wrapper}>
        <p>{children}</p>
      </div>
    </>
  );
};

export default Paragraph;
