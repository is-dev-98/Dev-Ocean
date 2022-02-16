import React from "react";
import { useHistory } from "react-router-dom";

import style from "./TableRow.module.css";

interface Props {
  name: string;
  description: string;
  id: string;
}

const TableRow: React.FC<Props> = ({ name, description, id }) => {
  const navigate = useHistory();
  return (
    <tr
      onClick={() => navigate.push(`/business_view/${id}`)}
      className={style.row}
    >
      <td className={style.cell}>{name}</td>
      <td className={style.cell}>{description}</td>
    </tr>
  );
};

export default TableRow;
