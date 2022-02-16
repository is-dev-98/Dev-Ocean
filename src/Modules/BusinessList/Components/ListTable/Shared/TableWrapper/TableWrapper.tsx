import React from "react";
import TableHeader from "../TableHeader/TableHeader";

import style from "./TableWrapper.module.css";

const TableWrapper: React.FC<any> = ({ children }) => {
  return (
    <div className={style.table_wrapper}>
      <table className={style.table}>
        <TableHeader businessTitle="Name" businessDescription="Description" />
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default TableWrapper;
