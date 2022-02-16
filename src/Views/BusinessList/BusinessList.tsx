import React from "react";
import { Helmet } from "react-helmet";
import ListMain from "../../Modules/BusinessList/ListMain";

const BusinessList: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dictionary</title>
        <meta name="Dictionary" content="Business dictionary" />
      </Helmet>
      <ListMain />
    </>
  );
};

export default BusinessList;
