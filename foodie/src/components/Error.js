import { useRouteError } from "react-router-dom";
import React from "react";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div>Error</div>
      <h3>{err.status}</h3>
    </>
  );
};

export default Error;
