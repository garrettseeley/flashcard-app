import React from "react";
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="NotFound">
      <h1>Not Found</h1>
      <Link to="/">
        <span className="oi oi-home mr-1"></span>Home
      </Link>
    </div>
  );
}

export default NotFound;
