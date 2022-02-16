import React from "react";
import style from "./FlexWrap.module.css";

const FlexWrap: React.FC<any> = ({ children }) => {
  return <div className={style.flex_wrap}>{children}</div>;
};

export default FlexWrap;
