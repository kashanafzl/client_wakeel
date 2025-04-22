import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './layout.css';
import d1 from '../../../Asserts/Img/d1.svg';
import { Icon } from '@iconify/react';

export default function Layout() {
  return (
    <div className="layout flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside style={{background : '#1A1919'}} className="w-72  shadow-md flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center p-6 border-b">
          <img src={d1} alt="Logo" className="h-12" />
        </div>

        {/* Navigation */}
        <nav className="flex   px-4 py-6">
          <ul className=" list-unstyled leftsidebar space-y-4 text-gray-700">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-blue-50 ${
                    isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
                  }`
                }
              >
                <Icon icon="mdi:view-dashboard-outline" width={20} />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/mycase"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-blue-50 ${
                    isActive ? 'bg-blue-100 text-blue-600 font-semibold' : ''
                  }`
                }
              >
                <Icon icon="mdi:briefcase-outline" width={20} />
                My Cases
              </NavLink>
            </li>

            <li>
              <a
                href="/appointment"
                className="flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-blue-50"
              >
                <Icon icon="mdi:calendar-month-outline" width={20} />
                Appointment
              </a>
            </li>

            <li>
              <a
                href="/payment"
                className="flex items-center gap-3 px-4 py-2 rounded-lg transition hover:bg-blue-50"
              >
                <Icon icon="mdi:credit-card-outline" width={20} />
                Payment
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
