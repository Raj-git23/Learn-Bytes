import React from 'react'
import { useSelector } from 'react-redux'
import { User, Mail, Calendar, Users, FileText, Shield, Edit } from 'lucide-react'
import { Link } from 'react-router-dom'

const MyProfile = () => {
  const { user } = useSelector(state => state.profile)
  console.log(user)
  
  // Profile fields configuration
  const profileFields = [
    {
      id: 'accountType',
      label: 'Account Type',
      value: user.accountType,
      icon: Shield,
      colSpan: 1
    },
    {
      id: 'fullName',
      label: 'Full Name',
      value: `${user.firstName} ${user.lastName}`,
      icon: User,
      colSpan: 1
    },
    {
      id: 'email',
      label: 'Email Address',
      value: user.email,
      icon: Mail,
      colSpan: 1
    },
    {
      id: 'dateOfBirth',
      label: 'Date of Birth',
      value: user.additionalDetail?.dateOfBirth || 'Not provided',
      icon: Calendar,
      colSpan: 1
    },
    {
      id: 'gender',
      label: 'Gender',
      value: user.additionalDetail?.gender || 'Not specified',
      icon: Users,
      colSpan: 1
    },
    {
      id: 'about',
      label: 'About',
      value: user.additionalDetail?.about || 'No additional information provided yet. Click edit to add a bio.',
      icon: FileText,
      colSpan: 2
    }
  ]

  // Stats configuration
  const statsCards = [
    {
      id: 'courses',
      label: 'Courses Enrolled',
      value: '0',
      icon: FileText
    },
    {
      id: 'certificates',
      label: 'Certificates Earned',
      value: '0',
      icon: Calendar
    },
    {
      id: 'hours',
      label: 'Learning Hours',
      value: '0',
      icon: Users
    }
  ]
  
  return (
    <div className='p-6 bg-gradient-to-br from-purple-50 to-pink-50 sm:col-span-9 col-span-12 min-h-screen'>
      {/* Header Section */}
      <div className='mb-6'>
        <h1 className='text-3xl font-bold text-gray-900 mb-2'>My Profile</h1>
        <p className='text-gray-600'>Manage your personal information and account settings</p>
      </div>

      {/* Profile Card */}
      <div className='bg-white rounded-2xl shadow-lg border border-purple-100 overflow-hidden'>
        {/* Cover Banner */}
        <div className='h-32 bg-purple-700 relative'>
          <div className='absolute -bottom-16 left-8'>
            <div className='relative'>
              <img 
                src={user.image} 
                className='w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover' 
                alt="Profile" 
              />
              <div className='absolute bottom-2 right-2 bg-green-500 w-4 h-4 rounded-full border-2 border-white'></div>
            </div>
          </div>
          <Link to={'/dashboard/edit-profile'} className='absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all'>
            <Edit className='w-4 h-4' />
            <span className='font-medium'>Edit Profile</span>
          </Link>
        </div>

        {/* Profile Info Header */}
        <div className='pt-20 px-8 pb-6 border-b border-gray-200'>
          <h2 className='text-2xl font-bold text-gray-900 mb-1'>
            {user.firstName} {user.lastName}
          </h2>
          <p className='text-gray-600 flex items-center gap-2'>
            <Mail className='w-4 h-4 text-purple-600' />
            {user.email}
          </p>
        </div>

        {/* Profile Details Grid */}
        <div className='p-8 grid md:grid-cols-2 gap-6'>
          {profileFields.map((field) => {
            const IconComponent = field.icon
            return (
              <div 
                key={field.id}
                className={`bg-purple-50 rounded-xl p-5 border border-purple-200 hover:shadow-md transition-all ${field.colSpan === 2 ? 'md:col-span-2' : ''}`}
              >
                <div className='flex items-start gap-4'>
                  <div className='bg-purple-600 p-3 rounded-lg flex-shrink-0'>
                    <IconComponent className='w-6 h-6 text-white' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-sm font-semibold text-gray-600 mb-1'>{field.label}</h3>
                    <p className={`${field.id === 'about' ? 'text-base' : 'text-lg'} font-bold text-gray-900 ${field.id === 'email' ? 'break-all' : ''} ${field.id === 'about' ? 'leading-relaxed font-normal text-gray-700' : ''}`}>
                      {field.value}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className='px-8 pb-8 flex gap-4'>
          <button onClick={() => window.location.assign('/dashboard/edit-profile')} className='flex-1 bg-purple-500  hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2'>
            <Edit className='w-5 h-5' />
            Edit Profile
          </button>
          <button className='border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-xl font-semibold transition-all'>
            Settings
          </button>
        </div>
      </div>

      {/* Additional Info Cards */}
      <div className='grid md:grid-cols-3 gap-6 mt-6'>
        {statsCards.map((stat) => {
          const IconComponent = stat.icon
          return (
            <div 
              key={stat.id}
              className='bg-white rounded-xl p-6 border border-purple-100 shadow-md text-center hover:shadow-lg transition-all'
            >
              <div className='bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3'>
                <IconComponent className='w-6 h-6 text-white' />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-1'>{stat.value}</h3>
              <p className='text-gray-600'>{stat.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MyProfile