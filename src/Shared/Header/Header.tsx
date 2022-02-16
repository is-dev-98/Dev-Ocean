/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { useHistory } from "react-router-dom";
import style from "./Header.module.css";

const Header: React.FC = () => {
  const navigate = useHistory();
  return (
    <div className={style.header}>
      <img className={style.logo_img} src="/logo192.png" alt="react_logo" />
      <span
        onClick={() => {
          navigate.push("/");
        }}
        className={style.logo}
      >
        LOGO
      </span>
    </div>
  );
};

export default Header;
