import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Settings, BookOpen, ShoppingCart, LayoutDashboard, Heart, Award } from 'lucide-react';

const SideBar = () => {
  const menuItems = [
    {
      id: 'profile',
      path: '/dashboard/my-profile',
      label: 'My Profile',
      icon: User
    },
    // {
    //   id: 'courses',
    //   path: '/dashboard/my-courses',
    //   label: 'My Courses',
    //   icon: BookOpen
    // },
    // {
    //   id: 'wishlist',
    //   path: '/dashboard/wishlist',
    //   label: 'Wishlist',
    //   icon: Heart
    // },
    // {
    //   id: 'purchases',
    //   path: '/dashboard/purchases',
    //   label: 'Purchases',
    //   icon: ShoppingCart
    // },
    // {
    //   id: 'certificates',
    //   path: '/dashboard/certificates',
    //   label: 'Certificates',
    //   icon: Award
    // },
    {
      id: 'settings',
      path: '/dashboard/setting',
      label: 'Settings',
      icon: Settings
    }
  ];

  return (
    <div className="sm:min-h-screen flex-col sticky top-0 sm:col-span-3 col-span-12 w-full h-auto bg-white border-r border-purple-200 shadow-lg flex items-center sm:flex-col">
      {/* Dashboard Header */}
      <div className="py-6 px-6 w-full text-center border-b border-purple-200 bg-purple-500">
        <div className="flex items-center justify-center gap-2 mb-2">
          <LayoutDashboard className="w-6 h-6 text-white" />
          <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        </div>
        <p className="text-purple-100 text-sm">Manage your account</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex flex-row sm:flex-col gap-2 sm:gap-2 w-full p-4 overflow-x-auto sm:overflow-visible">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 py-3 px-4 rounded-xl text-sm sm:text-base font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-700'
                }`
              }
            >
              <IconComponent className="w-5 h-5 flex-shrink-0" />
              <span className="hidden sm:inline">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom User Info (Desktop Only) */}
      <div className="hidden sm:block w-full mt-auto p-4 border-t border-purple-200">
        <div className="bg-purple-50 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-600 mb-2">Need help?</p>
          <button className="text-purple-600 hover:text-purple-700 font-semibold text-sm">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;