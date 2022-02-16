import React from "react";
import { Helmet } from "react-helmet";

import GlobalError from "../../Shared/GlobalError/GlobalError";
import Header from "../../Shared/Header/Header";

const ErrorPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
        <meta name="404" content="404" />
      </Helmet>
      <Header />
      <GlobalError
        errorMsg="404 Page does not exist."
        href="/"
        subMsg="Take me back."
      />
    </>
  );
};

export default ErrorPage;
