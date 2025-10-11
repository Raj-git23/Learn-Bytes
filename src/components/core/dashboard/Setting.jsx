import React from 'react'
import { NavLink } from 'react-router-dom'
import { Edit, Trash2, Lock, Bell, Eye, Shield, CreditCard, Mail, ChevronRight } from 'lucide-react'

const Setting = () => {
  const settingItems = [
    {
      id: 'edit-profile',
      path: '/dashboard/edit-profile',
      label: 'Edit Profile',
      description: 'Update your personal information and profile picture',
      icon: Edit,
      color: 'purple',
      danger: false
    },
    {
      id: 'change-password',
      path: '/dashboard/change-password',
      label: 'Change Password',
      description: 'Update your password to keep your account secure',
      icon: Lock,
      color: 'purple',
      danger: false
    },
    // {
    //   id: 'notifications',
    //   path: '/dashboard/notifications',
    //   label: 'Notification Settings',
    //   description: 'Manage email and push notifications',
    //   icon: Bell,
    //   color: 'purple',
    //   danger: false
    // },
    // {
    //   id: 'privacy',
    //   path: '/dashboard/privacy',
    //   label: 'Privacy Settings',
    //   description: 'Control your privacy and data preferences',
    //   icon: Eye,
    //   color: 'purple',
    //   danger: false
    // },
    // {
    //   id: 'security',
    //   path: '/dashboard/security',
    //   label: 'Security Settings',
    //   description: 'Two-factor authentication and security options',
    //   icon: Shield,
    //   color: 'purple',
    //   danger: false
    // },
    // {
    //   id: 'billing',
    //   path: '/dashboard/billing',
    //   label: 'Billing & Payment',
    //   description: 'Manage your payment methods and billing',
    //   icon: CreditCard,
    //   color: 'purple',
    //   danger: false
    // },
    // {
    //   id: 'email-preferences',
    //   path: '/dashboard/email-preferences',
    //   label: 'Email Preferences',
    //   description: 'Choose which emails you want to receive',
    //   icon: Mail,
    //   color: 'purple',
    //   danger: false
    // },
    // {
    //   id: 'delete-account',
    //   path: '/dashboard/delete-account',
    //   label: 'Delete Account',
    //   description: 'Permanently delete your account and all data',
    //   icon: Trash2,
    //   color: 'red',
    //   danger: true
    // }
  ]

  return (
    <div className='p-6 bg-gradient-to-br from-purple-50 to-pink-50 sm:col-span-9 col-span-12 min-h-screen'>
      {/* Header Section */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>Settings</h1>
        <p className='text-gray-600'>Manage your account settings and preferences</p>
      </div>

      {/* Settings Cards */}
      <div className='space-y-4'>
        {settingItems.map((item) => {
          const IconComponent = item.icon
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `block bg-white rounded-xl border-2 transition-all hover:shadow-lg group ${
                  item.danger
                    ? isActive
                      ? 'border-red-500 shadow-lg'
                      : 'border-red-200 hover:border-red-400'
                    : isActive
                    ? 'border-purple-500 shadow-lg'
                    : 'border-purple-200 hover:border-purple-400'
                }`
              }
            >
              {({ isActive }) => (
                <div className='p-6 flex items-center gap-4'>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    item.danger
                      ? isActive
                        ? 'bg-red-600'
                        : 'bg-red-100 group-hover:bg-red-200'
                      : isActive
                      ? 'bg-gradient-to-br from-purple-600 to-pink-600'
                      : 'bg-purple-100 group-hover:bg-purple-200'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      item.danger
                        ? isActive
                          ? 'text-white'
                          : 'text-red-600'
                        : isActive
                        ? 'text-white'
                        : 'text-purple-600'
                    }`} />
                  </div>
                  
                  <div className='flex-1'>
                    <h3 className={`text-lg font-semibold mb-1 ${
                      item.danger ? 'text-red-600' : 'text-gray-900'
                    }`}>
                      {item.label}
                    </h3>
                    <p className='text-gray-600 text-sm'>{item.description}</p>
                  </div>
                  
                  <ChevronRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                    item.danger
                      ? isActive
                        ? 'text-red-600'
                        : 'text-red-400'
                      : isActive
                      ? 'text-purple-600'
                      : 'text-gray-400'
                  }`} />
                </div>
              )}
            </NavLink>
          )
        })}
      </div>

      {/* Warning Banner */}
      <div className='mt-8 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-6'>
        <div className='flex items-start gap-3'>
          <Shield className='w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5' />
          <div>
            <h3 className='text-yellow-800 font-semibold mb-1'>Important Notice</h3>
            <p className='text-yellow-700 text-sm'>
              Some actions like deleting your account are permanent and cannot be undone. 
              Please make sure you understand the consequences before proceeding.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting