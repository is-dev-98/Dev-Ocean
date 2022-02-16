import React from "react";
import useBusinessData from "../../../../Hooks/useBusinessData";

import style from "./Card.module.css";

interface Props {
  title: string;
  searchCity: string;
}

const Card: React.FC<Props> = ({ title, searchCity }) => {
  let { data } = useBusinessData({ searchCity });

  return (
    <div className={style.card}>
      <div className={style.large_text}>{title}</div>
      {data.map((entry, index) => (
        <div key={index} className={style.card_row}>
          <div className={style.card_name}>{entry.name}</div>
          <div className={style.card_description}>
            <span>{entry.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
