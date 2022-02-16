import React from "react";
import { Link } from "react-router-dom";

import style from "./GlobalError.module.css";

interface Props {
  errorMsg: string;
  subMsg?: string;
  href?: string;
}

const GlobalError: React.FC<Props> = ({ errorMsg, subMsg, href = "/" }) => {
  return (
    <div className={style.list_error}>
      {errorMsg}
      {!!subMsg && <Link to={href}>{subMsg}</Link>}
    </div>
  );
};

export default GlobalError;
