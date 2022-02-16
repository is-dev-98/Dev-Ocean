import React from "react";
import style from "./Container.module.css";

const Container: React.FC<any> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
