import { FC } from "react";
import styles from "./Button.module.scss";

interface Properties {
  children: JSX.Element | JSX.Element[] | string;
  dark?: boolean;
}

const Button: FC<Properties> = (props) => {
  const { children, dark } = props;

  const classes: string = styles.btn + " " + (dark ? styles.dark : "");

  return <button className={classes}>{children}</button>;
};

Button.defaultProps = {
  dark: false,
};

export default Button;
