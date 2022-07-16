import { FC } from "react";
import styles from "./Card.module.scss";

// Components
import Button from "@atoms/Button/Button";
import Link from "next/link";

interface Properties {
  title: string;
}

const Card: FC<Properties> = (props) => {
  // Destructing
  const { title } = props;

  // Returns
  return (
    <>
      <Link href={"./"} prefetch={false}>
        <article className={styles.card}>
          <h2>{title}</h2>
          <p>read more</p>
        </article>
      </Link>
    </>
  );
};

export default Card;
