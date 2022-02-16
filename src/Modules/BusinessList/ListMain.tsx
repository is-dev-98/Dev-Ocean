import React from "react";

import ListTable from "./Components/ListTable/ListTable";

import useBusinessData from "../../Hooks/useBusinessData";
import GlobalError from "../../Shared/GlobalError/GlobalError";

const ListMain: React.FC = () => {
  const { data, isLoading } = useBusinessData();

  if (isLoading) return null;

  if (!data.length) {
    return <GlobalError errorMsg="List is Empty. Try Refreshing" />;
  }

  return <>{!isLoading ? <ListTable data={data} /> : null}</>;
};

export default ListMain;
