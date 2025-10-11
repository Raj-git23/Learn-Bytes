import React, { useEffect, useState } from 'react'
import { Menu, X, Lightbulb, ShoppingCart, User, LogOut, Settings, BookOpen, LayoutDashboard } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { apiConnector } from '../../services/apiConnnector';
import { courseEndpoints } from '../../services/api';
import { FaCartShopping } from "react-icons/fa6";
import { logout } from '../../services/operations/authAPI';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const {totalItems} = useSelector(state => state.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accountType = user?.accountType;
  
  
  if (accountType === undefined || accountType === 'Student') {
    return (
    <nav className="bg-gradient-to-t from-purple-100 via-white to-white border-b border-purple-300 text-white font-lato sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <NavLink to='' className="flex items-center text-purple-900 space-x-3">
            <Lightbulb className="w-10 h-10 " />
            <span className="text-4xl font-extrabold font-dancing">LearnBytes</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-850 hover:underline  underline-offset-2 font-semibold transition-all duration-500`} to="/">Home</NavLink>
            <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-850 hover:underline  underline-offset-2 font-semibold transition-all duration-500`} to="courses" >Courses</NavLink>
            <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-850 hover:underline  underline-offset-2 font-semibold transition-all duration-500`} to="about-us" >About Us</NavLink>
            <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-850 hover:underline  underline-offset-2 font-semibold transition-all duration-500`} to="contact-us" >Contact Us</NavLink>
            {
              token === null ? (
                <>
                  <NavLink to='sign-up' className="bg-purple-500 text-sm font-semibold hover:bg-purple-600 px-4 py-1.5 rounded-lg transition-colors">
                    Sign Up
                  </NavLink>
                  <NavLink to='log-in' className="bg-white text-sm font-semibold border border-purple-500 text-purple-500 hover:bg-purple-600 hover:text-white px-4 py-1.5 -ml-5 rounded-lg transition-colors">
                    Log In
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink to='cart' className="-ml-2 relative text-lg font-medium hover:border hover:border-purple-400 px-3 py-2 rounded-md transition-colors">
                    <ShoppingCart className='text-purple-950' />
                    {totalItems > 0 && (
                      <span className='absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-[10px] font-bold rounded-full bg-red-500 text-white'>{totalItems}</span>
                    )}
                  </NavLink>
                  
                  <div className="relative group">
                    <button className="bg-white flex items-center gap-2 text-lg font-medium text-purple-500 hover:bg-purple-50 pl-2 pr-4 py-2 rounded-full transition-all border-2 border-transparent hover:border-purple-300">
                      <img src={user.image} alt="" className='w-[40px] h-[40px] rounded-full object-cover'/>
                      <span className="text-sm font-semibold text-gray-700">{user.firstName}</span>
                    </button>
                    
                    {/* Improved Dropdown */}
                    <div className="invisible absolute right-0 top-full mt-2 z-[1000] w-72 bg-white rounded-xl shadow-2xl border-2 border-purple-200 opacity-0 transform scale-95 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:scale-100">
                      {/* User Info Header */}
                      <div className="p-4 border-b border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50">
                        <div className="flex items-center gap-3">
                          <img src={user.image} alt="" className='w-12 h-12 rounded-full border-2 border-purple-300 object-cover'/>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-900 font-bold truncate">{user.firstName} {user.lastName}</p>
                            <p className="text-gray-600 text-sm truncate">{user.email}</p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <NavLink 
                          to='dashboard/my-profile' 
                          className={({isActive}) => `flex items-center gap-3 px-4 py-3 transition-colors ${isActive ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-purple-50'}`}
                        >
                          <User className='w-5 h-5' />
                          <span className="font-medium">My Profile</span>
                        </NavLink>

                        {/* <NavLink 
                          to='dashboard' 
                          className={({isActive}) => `flex items-center gap-3 px-4 py-3 transition-colors ${isActive ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-purple-50'}`}
                        >
                          <LayoutDashboard className='w-5 h-5' />
                          <span className="font-medium">Dashboard</span>
                        </NavLink>

                        <NavLink 
                          to='dashboard/my-courses' 
                          className={({isActive}) => `flex items-center gap-3 px-4 py-3 transition-colors ${isActive ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-purple-50'}`}
                        >
                          <BookOpen className='w-5 h-5' />
                          <span className="font-medium">My Courses</span>
                        </NavLink> */}

                        <NavLink 
                          to='dashboard/setting' 
                          className={({isActive}) => `flex items-center gap-3 px-4 py-3 transition-colors ${isActive ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-purple-50'}`}
                        >
                          <Settings className='w-5 h-5' />
                          <span className="font-medium">Settings</span>
                        </NavLink>
                      </div>

                      {/* Logout Button */}
                      <div className="border-t border-purple-100 p-2">
                        <button 
                          onClick={()=> dispatch(logout(navigate))} 
                          className='flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium'
                        >
                          <LogOut className='w-5 h-5' />
                          <span>Log Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-purple-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-600`} to="" onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-600`} to="courses" onClick={() => setIsOpen(false)}>Courses</NavLink>
              <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-600`} to="about-us" onClick={() => setIsOpen(false)}>About Us</NavLink>
              <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-600`} to="contact-us" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
              {
              token === null ? (
                <>
                  <NavLink to='sign-up' className="bg-purple-500 text-white text-sm font-semibold w-fit hover:bg-purple-600 px-5 py-2 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </NavLink>
                  <NavLink to='log-in' className="bg-white text-sm font-semibold w-fit text-purple-500 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                    Log In
                  </NavLink>
                </>
              ) : (
                <>
                  <div className="border-t border-purple-200 pt-4 mt-2">
                    <div className="flex items-center gap-3 mb-4 bg-purple-50 p-3 rounded-lg">
                      <img src={user.image} alt="" className='w-12 h-12 rounded-full border-2 border-purple-300'/>
                      <div>
                        <p className="text-purple-900 font-bold">{user.firstName} {user.lastName}</p>
                        <p className="text-purple-600 text-sm">{user.email}</p>
                      </div>
                    </div>
                    
                    <NavLink 
                      to='cart' 
                      className="flex items-center gap-3 text-purple-700 hover:bg-purple-50 px-4 py-3 rounded-lg transition-colors mb-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <ShoppingCart className='w-5 h-5' />
                      <span className="font-medium">My Cart</span>
                      {totalItems > 0 && (
                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">{totalItems}</span>
                      )}
                    </NavLink>

                    <NavLink 
                      to='dashboard/my-profile' 
                      className="flex items-center gap-3 text-purple-700 hover:bg-purple-50 px-4 py-3 rounded-lg transition-colors mb-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className='w-5 h-5' />
                      <span className="font-medium">My Profile</span>
                    </NavLink>

                    <button 
                      onClick={() => {
                        dispatch(logout(navigate));
                        setIsOpen(false);
                      }} 
                      className='flex items-center gap-3 text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg transition-colors w-full'
                    >
                      <LogOut className='w-5 h-5' />
                      <span className="font-medium">Log Out</span>
                    </button>
                  </div>
                </>
              )
            }
            </div>
          </div>
        )}
      </div>
    </nav>
  )}

  return (
    <nav className="bg-gradient-to-t from-purple-100 via-white to-white border-b border-purple-300 text-white font-lato sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <NavLink to='' className="flex items-center text-purple-900 space-x-3">
            <Lightbulb className="w-10 h-10 " />
            <span className="text-4xl font-extrabold font-dancing">LearnBytes</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex font-lato items-center space-x-5">
            <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-850 hover:underline  underline-offset-2 font-semibold transition-all duration-500`} to="/">Home</NavLink>
            <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-850 hover:underline  underline-offset-2 font-semibold transition-all duration-500`} to="create-courses" >Add Course</NavLink>
            <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-850 hover:underline  underline-offset-2 font-semibold transition-all duration-500`} to="about-us" >About Us</NavLink>
            <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-850 hover:underline  underline-offset-2 font-semibold transition-all duration-500`} to="contact-us" >Contact Us</NavLink>
            {
              token === null ? (
                <>
                  <NavLink to='sign-up' className="bg-purple-500 text-white text-sm font-semibold w-fit hover:bg-purple-600 px-5 py-2 rounded-lg transition-colors">
                    Sign Up
                  </NavLink>
                  <NavLink to='log-in' className="bg-white text-sm font-semibold w-fit text-purple-500 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-lg transition-colors">
                    Log In
                  </NavLink>
                </>
              ) : (
                <>
                  <div className="relative group">
                    <button className="bg-white flex items-center gap-2 text-lg font-medium text-purple-500 hover:bg-purple-50 pl-2 pr-4 py-2 rounded-full transition-all border-2 border-transparent hover:border-purple-300">
                      <img src={user.image} alt="" className='w-[40px] h-[40px] rounded-full object-cover'/>
                      <span className="text-sm font-semibold text-gray-700">{user.firstName}</span>
                    </button>
                    
                    {/* Improved Dropdown */}
                    <div className="invisible absolute right-0 top-full mt-2 z-[1000] w-72 bg-white rounded-xl shadow-2xl border-2 border-purple-200 opacity-0 transform scale-95 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:scale-100">
                      {/* User Info Header */}
                      <div className="p-4 border-b border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50">
                        <div className="flex items-center gap-3">
                          <img src={user.image} alt="" className='w-12 h-12 rounded-full border-2 border-purple-300 object-cover'/>
                          <div className="flex-1 min-w-0">
                            <p className="text-gray-900 font-bold truncate">{user.firstName} {user.lastName}</p>
                            <p className="text-gray-600 text-sm truncate">{user.email}</p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="py-2">
                        <NavLink 
                          to='dashboard/my-profile' 
                          className={({isActive}) => `flex items-center gap-3 px-4 py-3 transition-colors ${isActive ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-purple-50'}`}
                        >
                          <User className='w-5 h-5' />
                          <span className="font-medium">My Profile</span>
                        </NavLink>

                        <NavLink 
                          to='dashboard' 
                          className={({isActive}) => `flex items-center gap-3 px-4 py-3 transition-colors ${isActive ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-purple-50'}`}
                        >
                          <LayoutDashboard className='w-5 h-5' />
                          <span className="font-medium">Dashboard</span>
                        </NavLink>

                        <NavLink 
                          to='dashboard/setting' 
                          className={({isActive}) => `flex items-center gap-3 px-4 py-3 transition-colors ${isActive ? 'bg-purple-100 text-purple-700' : 'text-gray-700 hover:bg-purple-50'}`}
                        >
                          <Settings className='w-5 h-5' />
                          <span className="font-medium">Settings</span>
                        </NavLink>
                      </div>

                      {/* Logout Button */}
                      <div className="border-t border-purple-100 p-2">
                        <button 
                          onClick={()=> dispatch(logout(navigate))} 
                          className='flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors font-medium'
                        >
                          <LogOut className='w-5 h-5' />
                          <span>Log Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-600`} to="" onClick={() => setIsOpen(false)}>Home</NavLink>
              <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-600`} to="create-courses" onClick={() => setIsOpen(false)}>Add Course</NavLink>
              <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-600`} to="about-us" onClick={() => setIsOpen(false)}>About Us</NavLink>
              <NavLink className={({isActive})=> `${isActive ? 'text-purple-900 underline font-extrabold' : 'text-purple-700/80'} hover:text-purple-600`} to="contact-us" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
              {
              token === null ? (
                <>
                  <NavLink to='sign-up' className="bg-purple-500 text-white text-lg font-medium hover:bg-purple-600 px-5 py-2 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </NavLink>
                  <NavLink to='log-in' className="bg-white text-lg font-medium text-purple-500 hover:bg-purple-600 hover:text-white px-6 py-2 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                    Log In
                  </NavLink>
                </>
              ) : (
                <>
                  <div className="border-t border-purple-200 pt-4 mt-2">
                    <div className="flex items-center gap-3 mb-4 bg-purple-50 p-3 rounded-lg">
                      <img src={user.image} alt="" className='w-12 h-12 rounded-full border-2 border-purple-300'/>
                      <div>
                        <p className="text-purple-900 font-bold">{user.firstName} {user.lastName}</p>
                        <p className="text-purple-600 text-sm">{user.email}</p>
                      </div>
                    </div>

                    <NavLink 
                      to='dashboard/my-profile' 
                      className="flex items-center gap-3 text-purple-700 hover:bg-purple-50 px-4 py-3 rounded-lg transition-colors mb-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <User className='w-5 h-5' />
                      <span className="font-medium">My Profile</span>
                    </NavLink>

                    <button 
                      onClick={() => {
                        dispatch(logout(navigate));
                        setIsOpen(false);
                      }} 
                      className='flex items-center gap-3 text-red-600 hover:bg-red-50 px-4 py-3 rounded-lg transition-colors w-full'
                    >
                      <LogOut className='w-5 h-5' />
                      <span className="font-medium">Log Out</span>
                    </button>
                  </div>
                </>
              )
            }
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar