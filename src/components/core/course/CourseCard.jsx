import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../features/cartSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ShoppingCart, User, Tag, BookOpen, Star, Clock } from 'lucide-react'

const CourseCard = ({ course }) => {
  const { token } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const handleClick = (course) => {
    navigate(`${course._id}`)
  }
  
  const handleAddToCart = (e) => {
    e.stopPropagation()
    if (!token) {
      toast.error('Please Login First')
      navigate('/log-in')
      return
    }
    dispatch(addToCart(course))
    toast.success('Course added to cart!')
  }
  
  return (
    <div 
      onClick={() => handleClick(course)} 
      className="bg-white hover:cursor-pointer flex flex-col rounded-xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Course Thumbnail */}
      <div className="relative overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.courseName}
          className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300' 
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {course.category.name}
        </div>
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-purple-700 font-bold text-sm">₹{course.price}</span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {course.courseName}
        </h3>

        {/* Course Description (if available) */}
        {course.courseDescription && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {course.courseDescription}
          </p>
        )}

        {/* Instructor Info */}
        <div className="flex items-center gap-2 mb-3">
          <User className="w-4 h-4 text-purple-600" />
          <span className="text-gray-700 text-sm font-medium">
            {course.instructor.firstName} {course.instructor.lastName}
          </span>
        </div>

        {/* Course Stats */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span>4.5</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4 text-purple-600" />
            <span>12 Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-purple-600" />
            <span>8h 30m</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-3"></div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1">
            <Tag className="w-5 h-5 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">₹{course.price}</span>
          </div>
          <button 
            onClick={(e) => handleAddToCart(e)} 
            className='bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm'
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseCard