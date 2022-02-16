/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { useHistory } from "react-router-dom";
import useBusinessData from "../../../../Hooks/useBusinessData";

import style from "./Card.module.css";

interface Props {
  title: string;
  searchCity: string;
}

const Card: React.FC<Props> = ({ title, searchCity }) => {
  const { data } = useBusinessData({ searchCity });
  const navigate = useHistory();

  return (
    <div className={style.card}>
      <div className={style.large_text}>{title}</div>
      {data.map((entry, index) => {
        const { name, address, id } = entry;
        const { city, country, number, street, zip } = address;
        return (
          <div
            key={index}
            className={style.card_row}
            onClick={() => {
              navigate.push(id);
            }}
          >
            <div className={style.card_name}>{name}</div>
            <div className={style.card_description}>
              <span>{`${number} ${street}, ${city} ${zip}, ${country}`}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
