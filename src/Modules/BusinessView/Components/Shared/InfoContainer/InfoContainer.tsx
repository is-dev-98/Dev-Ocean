import React from "react";
import style from "./InfoContainer.module.css";

interface Props {
  title: string;
  firstLine: string;
  secondLine: string;
}

const InfoContainer: React.FC<Props> = ({ title, firstLine, secondLine }) => {
  return (
    <>
      <div className={style.info_container}>
        <div className={style.large_text}>{title}</div>
        <div className={style.small_text}>{firstLine}</div>
        <div className={style.small_text}>{secondLine}</div>
      </div>
    </>
  );
};

export default InfoContainer;
