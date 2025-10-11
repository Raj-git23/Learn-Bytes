/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCourse } from '../services/operations/courseAPI'
import CourseCard from '../components/core/course/CourseCard'
import { BookOpen, Search, Filter, GraduationCap } from 'lucide-react'

const Courses = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllCourse())
  }, [])
  
  const { courses } = useSelector(state => state.course)
  console.log(courses)
  
  return (
    <div className='bg-white min-h-screen'>
      {/* Header Section */}
      <div className="bg-purple-700/80 text-white py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold mb-4">Explore Our Courses</h1>
            <p className="text-xl text-purple-100 mb-8">
              Discover expert-led courses designed to help you master new skills and advance your career.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters/Stats Bar */}
      <div className="bg-purple-50 border-b border-purple-200 py-6 px-6">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700 font-semibold">
              {courses?.length || 0} Courses Available
            </span>
          </div>
          <button className="flex items-center gap-2 bg-white border border-purple-200 hover:border-purple-400 px-4 py-2 rounded-lg transition-all">
            <Filter className="w-4 h-4 text-purple-600" />
            <span className="text-gray-700 font-medium">Filters</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='container mx-auto px-6 py-12'>
        {courses && courses.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-full mb-6">
              <GraduationCap className="w-24 h-24 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">No Courses Available</h2>
            <p className="text-lg text-gray-600 text-center max-w-md mb-8">
              We're working hard to bring you amazing courses. Check back soon for new learning opportunities!
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => dispatch(getAllCourse())}
                className="bg-purple-500 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg"
              >
                Refresh
              </button>
              <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-xl font-semibold transition-all">
                Notify Me
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA Section (only shown when courses exist) */}
      {courses && courses.length > 0 && (
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-12 px-6 mt-12">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Let us know what courses you'd like to see, and we'll work on adding them.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-lg">
              Request a Course
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Courses