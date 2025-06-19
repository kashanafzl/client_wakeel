import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Lawyerout.css';
import d1 from '../../../Asserts/Img/d1.svg';
import { Icon } from '@iconify/react';

export default function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="logo">
          <img src={d1} alt="Logo" />
        </div>

        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/lawyerdashboard" className="nav-item">
                <Icon icon="mdi:view-dashboard-outline" width={20} />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/lawyerdashboard/lawyercase" className="nav-item">
                <Icon icon="mdi:briefcase-outline" width={20} />
                My Cases
              </NavLink>
            </li>
            <li>
              <NavLink to="/lawyerdashboard/Lawyerprofilem" className="nav-item">
                <Icon icon="mdi:briefcase-outline" width={20} />
                My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/lawyerdashboard/lawyerpayment" className="nav-item">
                <Icon icon="mdi:credit-card-outline" width={20} />
                Payment
              </NavLink>
            </li>

    
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
