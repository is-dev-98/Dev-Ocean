import React from "react";

import { Business } from "../../../../Types";

import TableRow from "./Shared/TableRow/TableRow";
import TableWrapper from "./Shared/TableWrapper/TableWrapper";

interface Props {
  data: Business[];
}

const ListTable: React.FC<Props> = ({ data }) => {
  return (
    <TableWrapper>
      {data?.map((entry) => (
        <TableRow
          key={entry.id}
          id={entry.id}
          name={entry.name}
          description={entry.description}
        />
      ))}
    </TableWrapper>
  );
};

export default ListTable;
