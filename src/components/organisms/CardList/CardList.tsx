import Container from "@components/atoms/Container/Container";
import Grid from "@components/atoms/Grid/Grid";
import { FC } from "react";
import styles from "./CardList.module.scss";

import Card from "@components/molecules/Card/Card";

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
          <Card title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan gravida nibh." />
        </Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title="Interdum et malesuada fames ac ante ipsum primis in faucibus." />
        </Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title=" Sed tincidunt, mauris quis pretium volutpat, nunc nulla commodo lectus, quis gravida velit odio vitae metus." />
        </Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title=" Sed tincidunt, mauris quis pretium volutpat, nunc nulla commodo lectus, quis gravida velit odio vitae metus." />
        </Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title=" Sed tincidunt, mauris quis pretium volutpat, nunc nulla commodo lectus, quis gravida velit odio vitae metus." />
        </Grid>
        <Grid column={true} sm={12} lg={6} xl={4}>
          <Card title=" Sed tincidunt, mauris quis pretium volutpat, nunc nulla commodo lectus, quis gravida velit odio vitae metus." />
        </Grid>
      </Grid>
    </section>
  );
};

export default CardList;
