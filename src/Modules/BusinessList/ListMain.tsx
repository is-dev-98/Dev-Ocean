import React from "react";

import ListTable from "./Components/ListTable/ListTable";
import Header from "../../Shared/Header/Header";
import useBusinessData from "../../Hooks/useBusinessData";
import GlobalError from "../../Shared/GlobalError/GlobalError";

const ListMain: React.FC = () => {
  const { data, isLoading } = useBusinessData();

  if (isLoading)
    return (
      <>
        <Header />
        <h1>Loading</h1>
      </>
    );

  if (!data.length) {
    return (
      <>
        <Header />
        <GlobalError errorMsg="List is Empty. Try Refreshing" />
      </>
    );
  }

  return (
    <>
      <Header />
      <ListTable data={data} />
    </>
  );
};

export default ListMain;
