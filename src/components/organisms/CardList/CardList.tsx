import { FC } from "react";
import styles from "./CardList.module.scss";

// Components
import Card from "@components/molecules/Card/Card";
import Container from "@components/atoms/Container/Container";
import Grid from "@components/atoms/Grid/Grid";

interface Properties {
  // Key: sting any allows for additional unknown types
  [key: string]: any;
}

const CardList: FC<Properties> = (props) => {
  // Returns
  return (
    <section className={styles.wrapper}>
      <Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title="His mother had always taught him..." />
        </Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title="He was an expert but not in a discipline..." />
        </Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title="Dave watched as the forest burned up on the hill." />
        </Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title="ll he wanted was a candy bar." />
        </Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title="Hopes and dreams were dashed that day." />
        </Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title="Dave wasn't exactly sure how he had ended up..." />
        </Grid>
      </Grid>
    </section>
  );
};

export default CardList;
