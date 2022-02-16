import React from "react";

import style from "./TableWrapper.module.css";

const TableWrapper: React.FC<any> = ({ children }) => {
  return (
    <div className={style.table_wrapper}>
      <table className={style.table}>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default TableWrapper;
