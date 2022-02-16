import React from "react";
import TableHeader from "./Shared/TableHeader/TableHeader";
import TableRow from "./Shared/TableRow/TableRow";
import style from "./Style/ListTable.module.css";
import { Business } from "../../../../Types";

interface Props {
  data: Business[];
}

const ListTable: React.FC<Props> = ({ data }) => {
  return (
    <div className={style.table_wrapper}>
      <table className={style.table}>
        <TableHeader businessTitle="Name" businessDescription="Description" />
        <tbody>
          {data?.map((entry) => (
            <TableRow
              key={entry.id}
              id={entry.id}
              name={entry.name}
              description={entry.description}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTable;
