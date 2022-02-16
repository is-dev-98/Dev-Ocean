import React from "react";
import style from "./SmallContainer.module.css";

const SmallContainer: React.FC<any> = ({ children }) => {
  return <div className={style.small_container}>{children}</div>;
};

export default SmallContainer;
