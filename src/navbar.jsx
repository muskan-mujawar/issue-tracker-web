import React from "react";

function Navbar() {
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
          <button className=" btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          ></button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
