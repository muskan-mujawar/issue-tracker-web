import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillAndroid } from "react-icons/ai";

function Navbar({ issue }) {
  const navigate = useNavigate();

  function logOut() {
    localStorage.removeItem("token");
    console.log("clecked");
    navigate("/");
  }

  return (
    <nav className="navbar sticky-top bg-body-tertiary">
      <div className=" container-fluid">
        <a className=" navbar-brand">Issue Tracker</a>

        <form className="d-flex  mx-auto" role="search">
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className=" btn btn-outline-info" type="submit">
            Search
          </button>
        </form>
        <div className="dropdown dropstart ">
          <button
            className="btn  btn-outline-dark"
            style={{ borderRadius: "50%", height: "40px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <AiFillAndroid />
          </button>
          <ul className="dropdown-menu">
            <li>
              <button onClick={logOut} className="ps-[15px]">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
