import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { courseEndpoints } from "../services/api";
import { apiConnector } from "../services/apiConnnector";
import { getAllCategories } from "../services/operations/courseAPI";
import { 
  BookOpen, DollarSign, Image, Tag, FileText, 
  Upload, CheckCircle, AlertCircle, Loader, Sparkles
} from "lucide-react";

const CreateCourseForm = () => {
  const dispatch = useDispatch();

  const [courseName, setCourseName] = useState("");
  const [courseDesc, setCourseDesc] = useState("");
  const [whatYouWillLearn, setWhatYouWillLearn] = useState("");
  const [price, setPrice] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnailImg, setThumbnailImg] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const token = useSelector((state) => state.auth.token);
  const categories = useSelector((state) => state.course.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailImg(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      toast.error("Please select a category!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("courseDesc", courseDesc);
    formData.append("whatYouWillLearn", whatYouWillLearn);
    formData.append("price", price);
    formData.append("tag", tag);
    formData.append("category", category);
    if (thumbnailImg) formData.append("thumbnailImg", thumbnailImg);

    try {
      const response = await apiConnector(
        "POST",
        courseEndpoints.CREATE_COURSE_API,
        formData,
        {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
      );

      toast.success("Course created successfully!");
      console.log("Course created:", response.data);

      // Reset form
      setCourseName("");
      setCourseDesc("");
      setWhatYouWillLearn("");
      setPrice("");
      setTag("");
      setCategory("");
      setThumbnailImg(null);
      setThumbnailPreview(null);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.msg || "Failed to create course.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-purple-600 p-4 rounded-full mb-4">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Create New Course</h1>
          <p className="text-gray-600">Share your knowledge with students worldwide</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border-2 border-purple-100 p-8 space-y-8">
          {/* Basic Information Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-7 h-7 text-purple-600" />
              Basic Information
            </h2>
            
            <div className="space-y-6">
              {/* Course Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  Course Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., Complete Web Development Bootcamp"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  required
                />
              </div>

              {/* Course Description */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <FileText className="w-4 h-4 text-purple-600" />
                  Course Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="Describe what students will learn in this course..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all min-h-32"
                  value={courseDesc}
                  onChange={(e) => setCourseDesc(e.target.value)}
                  required
                />
              </div>

              {/* What You Will Learn */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  What You Will Learn <span className="text-red-500">*</span>
                </label>
                <textarea
                  placeholder="List the key skills and concepts students will master..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all min-h-32"
                  value={whatYouWillLearn}
                  onChange={(e) => setWhatYouWillLearn(e.target.value)}
                  required
                />
              </div>

              {/* Tag, Category and Price */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Tag className="w-4 h-4 text-purple-600" />
                    Tag <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., AI, ML, Web"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories?.length > 0 ? (
                      categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                          {cat.name}
                        </option>
                      ))
                    ) : (
                      <option disabled>Loading categories...</option>
                    )}
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 text-purple-600" />
                    Price (₹) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 999"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Section */}
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Image className="w-7 h-7 text-purple-600" />
              Course Thumbnail
            </h2>
            
            <div className="border-2 border-dashed border-purple-300 rounded-xl p-8 text-center hover:border-purple-500 transition-all">
              <input
                type="file"
                accept="image/*"
                id="thumbnail"
                className="hidden"
                onChange={handleThumbnailChange}
              />
              <label htmlFor="thumbnail" className="cursor-pointer">
                {thumbnailPreview ? (
                  <div className="space-y-4">
                    <img 
                      src={thumbnailPreview} 
                      alt="Preview" 
                      className="max-h-64 mx-auto rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-gray-600">Click to change image</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-16 h-16 text-purple-400 mx-auto" />
                    <div>
                      <p className="text-lg font-semibold text-gray-700">Upload Course Thumbnail</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                    </div>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="border-t pt-8">
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Creating Course...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Create Course
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCourseForm;