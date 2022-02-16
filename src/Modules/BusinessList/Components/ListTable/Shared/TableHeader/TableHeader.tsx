import React from "react";
import style from "./TableHeader.module.css";

interface Props {
  businessTitle: string;
  businessDescription: string;
}

const TableHeader: React.FC<Props> = ({
  businessTitle,
  businessDescription,
}) => {
  return (
    <tr className={style.row}>
      <th className={style.cell}>{businessTitle}</th>
      <th className={style.cell}>{businessDescription}</th>
    </tr>
  );
};

export default TableHeader;
