import React from "react";
import style from "./Image.module.css";

interface Props {
  image: string;
}

const Image: React.FC<Props> = ({ image }) => {
  return (
    <>
      <div className={style.img_container}>
        <img decoding="async" className={style.image} src={image} alt="img" />
      </div>
    </>
  );
};

export default Image;
