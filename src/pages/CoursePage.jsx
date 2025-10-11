import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseDetails } from "../services/operations/courseAPI";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { toast } from "react-toastify";
import { 
  User, Mail, ShoppingCart, CreditCard, Users, Star, 
  BookOpen, Clock, Award, CheckCircle, Play, Loader
} from "lucide-react";

const CoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth);
  
  const handleAddToCart = (course) => {
    if (!token) {
      toast.error('Please Login First');
      navigate('/log-in');
      return;
    }
    dispatch(addToCart(course));
    toast.success('Course added to cart!');
  };

  useEffect(() => {
    dispatch(getCourseDetails(id));
  }, [id, dispatch]);

  const { courseDetails, loading, error } = useSelector(
    (state) => state.course
  );

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-purple-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-700 text-lg">Loading course details...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md">
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-3xl">!</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Error</h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Course not found state
  if (!courseDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <p className="text-gray-600 mb-6">The course you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/courses')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  const course = courseDetails;

  return (
    <div className="min-h-screen bg-white py-10 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center p-8">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold mb-4">
                {course.category?.name || 'Course'}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                {course.courseName}
              </h1>
              <p className="text-purple-100 text-lg mb-6">
                {course.courseDesc}
              </p>
              
              {/* Course Stats */}
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                  <span className="font-semibold">4.5/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">{course.studentsEnrolled?.length || 0} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">8h 30m</span>
                </div>
              </div>
            </div>
            <div>
              <img
                src={course.thumbnail}
                alt={course.courseName}
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-purple-600" />
                What You'll Learn
              </h2>
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg leading-relaxed">{course.whatYouWillLearn}</p>
              </div>
              
              {/* Learning Outcomes (Mock data - you can add real data) */}
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {['Master core concepts', 'Build real projects', 'Industry best practices', 'Career ready skills'].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <User className="w-8 h-8 text-purple-600" />
                Your Instructor
              </h2>
              {course.instructor ? (
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-10 h-10 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {course.instructor.firstName} {course.instructor.lastName}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Mail className="w-4 h-4" />
                      <span>{course.instructor.email}</span>
                    </div>
                    <p className="text-gray-600">
                      Expert instructor with years of experience in the field. Dedicated to helping students achieve their learning goals.
                    </p>
                  </div>
                </div>
              ) : (
                <p className="text-gray-600">Instructor information not available</p>
              )}
            </div>

            {/* Course Content */}
            <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Play className="w-8 h-8 text-purple-600" />
                Course Content
              </h2>
              <div className="space-y-4">
                {course.content && course.content.length > 0 ? (
                  course.content.map((lecture, index) => (
                    <div 
                      key={index} 
                      className="bg-purple-50 border border-purple-200 p-5 rounded-xl hover:shadow-md transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-bold text-gray-900 text-lg">
                              {lecture.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {lecture.lecturesCount} lecture(s)
                            </p>
                          </div>
                        </div>
                        <Clock className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No course content available yet.</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-purple-200 p-6 sticky top-6">
              {/* Price */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-600 mb-2">Course Price</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-purple-600">₹{course.price}</span>
                  <span className="text-gray-500 line-through">₹{Math.floor(course.price * 1.5)}</span>
                </div>
                <p className="text-green-600 font-semibold mt-2">Save 33% today!</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 text-lg">
                  <CreditCard className="w-5 h-5" />
                  Buy Now
                </button>
                <button
                  onClick={() => handleAddToCart(course)}
                  className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>

              {/* Course Includes */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">This course includes:</h3>
                <div className="space-y-3">
                  {[
                    { icon: BookOpen, text: 'Lifetime access' },
                    { icon: Award, text: 'Certificate of completion' },
                    { icon: Users, text: 'Community support' },
                    { icon: Clock, text: 'Self-paced learning' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-gray-700">
                      <item.icon className="w-5 h-5 text-purple-600" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Students Enrolled</span>
                  <span className="font-bold text-gray-900">{course.studentsEnrolled?.length || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold text-gray-900">4.5/5</span>
                  </div>
                </div>
              </div>

              {/* Money Back Guarantee */}
              <div className="mt-6 bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl">
                <p className="text-center text-sm text-gray-700">
                  <span className="font-bold">30-Day Money-Back Guarantee</span>
                  <br />
                  Full refund if you're not satisfied
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;