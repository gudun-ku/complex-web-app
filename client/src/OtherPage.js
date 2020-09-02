import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <div>
        <br />
      </div>
      Im some other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};
