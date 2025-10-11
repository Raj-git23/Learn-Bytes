import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Template({ title, description1, description2, image, formType }) {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      {loading ? (
        <div className="w-12 h-12 border-4 border-purple-300 border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-6xl">
          {/* Form Section */}
          <div className="w-full max-w-xl bg-purple-700/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-purple-600 hover:border-purple-400 transition-all duration-300">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <p className="mt-3 text-lg text-purple-200">
              <span className="text-purple-200">{description1}</span>{" "}
              <span className="font-semibold italic text-white/95">
                {description2}
              </span>
            </p>

            <div className="mt-6">
              {formType === "signup" ? <SignupForm /> : <LoginForm />}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-lg relative">
            <img
              src={image}
              alt="Students"
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
              width={550}
              height={500}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-purple-900/20 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
