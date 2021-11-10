import React from "react";
import { Link, useHistory } from "react-router-dom"

function NotFound() {
  const history = useHistory()

  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <Link to="/" className="btn btn-primary mr-3">
        <span className="oi oi-home mr-1"></span>Home
      </Link>
      <button type="button" className="btn btn-primary" onClick={() => history.goBack()}>
      Go Back
    </button>
    </div>
  );
}

export default NotFound;
