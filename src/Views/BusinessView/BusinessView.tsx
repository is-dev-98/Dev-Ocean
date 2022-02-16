import React from "react";
import { Helmet } from "react-helmet";

import ViewMain from "../../Modules/BusinessView/ViewMain";

const BusinessView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Business Info</title>
        <meta name="Business Info" content="Business Info" />
      </Helmet>
      <ViewMain />
    </>
  );
};

export default BusinessView;
