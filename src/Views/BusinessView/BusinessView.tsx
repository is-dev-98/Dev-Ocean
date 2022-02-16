import React from "react";
import { Helmet } from "react-helmet";

import ViewMain from "../../Modules/BusinessView/ViewMain";
import Header from "../../Shared/Header/Header";

const BusinessView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Business Info</title>
        <meta name="Business Info" content="Business Info" />
      </Helmet>
      <Header />
      <ViewMain />
    </>
  );
};

export default BusinessView;
