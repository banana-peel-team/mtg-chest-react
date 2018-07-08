import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import routes from '../../constants/routesPaths';
import LogoutButton from '../user/LogoutButton';

const Header = () => (
  <div className="top-bar nav-header">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="menu-text">
          <Link className="logo-link" to={routes.index}>MTG Chest</Link>
        </li>
        <li className="menu-text">
          <NavLink to={routes.collection} activeClassName="active-link">
            Collection
          </NavLink>
        </li>
        <li className="menu-text">
          <NavLink to={routes.wizard} activeClassName="active-link">
            Wizard
          </NavLink>
        </li>
        <li className="menu-text">
          <NavLink to={routes.suggestion} activeClassName="active-link">
            Suggestion
          </NavLink>
        </li>
      </ul>
    </div>
    <div className="top-bar-right">
      <LogoutButton />
    </div>
  </div>
);

export default Header;
