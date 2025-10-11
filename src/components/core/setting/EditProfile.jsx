import React, { useState } from "react";
import { updateProfile } from "../../../services/operations/profileAPI";
import { useDispatch, useSelector } from "react-redux";
import { User, Phone, Calendar, Users, FileText, Save, X } from "lucide-react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    contactNo: "",
    about: "",
    gender: "",
  });
  const { token } = useSelector(state => state.auth);
  const { user } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const formFields = [
    {
      id: "dateOfBirth",
      label: "Date of Birth",
      type: "date",
      name: "dateOfBirth",
      placeholder: "",
      icon: Calendar,
      required: false
    },
    {
      id: "contactNo",
      label: "Contact Number",
      type: "tel",
      name: "contactNo",
      placeholder: "e.g., +91 98765 43210",
      icon: Phone,
      required: false
    },
    {
      id: "gender",
      label: "Gender",
      type: "select",
      name: "gender",
      icon: Users,
      options: [
        { value: "", label: "Select Gender" },
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" }
      ],
      required: false
    },
    {
      id: "about",
      label: "About",
      type: "textarea",
      name: "about",
      placeholder: "Tell us a little about yourself...",
      icon: FileText,
      rows: 4,
      required: false
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(token, formData));
    setFormData({
      dateOfBirth: "",
      contactNo: "",
      about: "",
      gender: "",
    });
  };

  const handleCancel = () => {
    setFormData({
      dateOfBirth: "",
      contactNo: "",
      about: "",
      gender: "",
    });
  };

  return (
    <div className="min-h-screen sm:col-span-9 col-span-12 bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Profile</h1>
          <p className="text-gray-600">Update your personal information</p>
        </div>

        {/* Profile Picture Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8 mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <img
                src={user?.image || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-purple-200 object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-purple-500 p-2 rounded-full cursor-pointer hover:scale-110 transition-transform">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-bold text-gray-900">{user?.firstName} {user?.lastName}</h2>
              <p className="text-gray-600">{user?.email}</p>
              <button className="mt-2 text-purple-600 hover:text-purple-700 font-medium text-sm">
                Change Profile Picture
              </button>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-purple-100 p-8">
          <div className="space-y-6">
            {formFields.map((field) => {
              const IconComponent = field.icon;
              return (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2"
                  >
                    <IconComponent className="w-4 h-4 text-purple-600" />
                    {field.label}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      id={field.id}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      rows={field.rows}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  ) : field.type === "select" ? (
                    <select
                      id={field.id}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    >
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              type="submit"
              className="flex-1 bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Save className="w-5 h-5" />
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              <X className="w-5 h-5" />
              Cancel
            </button>
          </div>
        </form>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 mt-6">
          <div className="flex items-start gap-3">
            <FileText className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">Keep Your Profile Updated</h3>
              <p className="text-sm text-gray-700">
                A complete profile helps instructors and fellow learners connect with you better. 
                Make sure to keep your information current and accurate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;