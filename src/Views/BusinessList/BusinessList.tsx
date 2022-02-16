import React from "react";
import { Helmet } from "react-helmet";
import ListMain from "../../Modules/BusinessList/ListMain";
import Header from "../../Shared/Header/Header";

const BusinessList: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dictionary</title>
        <meta name="Dictionary" content="Business dictionary" />
      </Helmet>
      <Header />
      <ListMain />
    </>
  );
};

export default BusinessList;
