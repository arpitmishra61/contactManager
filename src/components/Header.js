import React from "react";

const Header = props => {
  const { branding } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <i className="far fa-address-book mx-4 fa-2x text-white" />
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <i className="fas fa-plus-circle fa-2x text-white" />
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-2">
            <i className="fas fa-star fa-1x text-white" />

            <a href="/" className="nav-link d-inline">
              Favourites
            </a>
          </li>
          <li className="nav-item mx-2">
            <i class="fas fa-user-circle fa-1x text-white" />
            <a href="/" className="nav-link d-inline">
              Account
            </a>
          </li>
          <li className="nav-item mx-2">
            <i className="fas fa-info-circle fa-1x text-white" />
            <a href="/" className="nav-link d-inline">
              Help
            </a>
          </li>
        </ul>
      </nav>
      <h3 className="display-4  text-center bg-dark text-white">CONTACTS</h3>
      <hr />
    </div>
  );
};
export default Header;
