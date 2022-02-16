import React from "react";
import { FOUR_ARRAY } from "../../../../Service/constants";
import style from "./Card.module.css";

interface Props {
  name: string;
  title: string;
  description: string;
}

const Card: React.FC<Props> = ({ title, name, description }) => {
  return (
    <div className={style.card}>
      <div className={style.large_text}>{title}</div>
      {FOUR_ARRAY.map((entry, index) => (
        <div key={index} className={style.card_row}>
          <div className={style.card_name}>{name}</div>
          <div className={style.card_description}>
            <span>{description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
