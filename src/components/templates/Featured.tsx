import { FC } from "react";
import styles from "./Featured.module.scss";

//Components
import Container from "@components/atoms/Container/Container";
import Heading from "@components/atoms/Heading/Heading";
import CardList from "@components/organisms/CardList/CardList";
import Button from "@components/atoms/Button/Button";
import Grid from "@components/atoms/Grid/Grid";

interface Properties {
  children?: JSX.Element | JSX.Element[];
}

const Featured: FC<Properties> = (props) => {
  // Destructing
  const { children } = props;

  return (
    <section>
      <Container>
        <Heading size={1}>Featured Articles</Heading>
        <CardList />
        <Grid justify="flex-end" alignItems="flex-end">
          <Grid>
            <Button dark>See More</Button>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Featured;
