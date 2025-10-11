import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { SiGmail } from "react-icons/si";
import { FaLock } from "react-icons/fa";
import { login } from "../../../services/operations/authAPI";
import { Lock, Mail } from "lucide-react";
// import { login } from "../../../services/operations/authAPI"
function LoginForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false)

  const { email, password } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(login(email, password, navigate))
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      className="mt-6 flex w-full flex-col sm:gap-y-4"
    >
      <label className="w-full" style={{position:"relative"}}>
        <p className="mb-1 text-[0.875rem] text-white/90 leading-[1.375rem] text-richblack-5">
          Email Address <sup className="text-red-600">*</sup>
        </p>
        <Mail style={{color:"grey",position:"absolute",top:"calc(52%)",left:"1.65%",fontSize:"18px"}}/>
        <input
          required
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email address"
          
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)", paddingLeft:"38px"
          }}
          className="w-full rounded-[0.5rem] bg-white p-[12px] text-gray-800"
        />
       
      </label>
      <label className="relative" >
      <Lock style={{color:"grey",position:"absolute",top:"calc(40%)",left:"1.65%",fontSize:"18px"}}/>
        <p className="mb-1 text-[0.875rem] text-white/90 leading-[1.375rem] text-richblack-5">
          Password <sup className="text-pink-200">*</sup>
        </p>
       
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter Password"
          style={{
            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",paddingLeft:"38px"
          }}
          className="w-full rounded-[0.5rem] bg-white p-[12px] pr-12 text-gray-800"
        />
        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] z-[10] cursor-pointer"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <Link to="/forgot-password">
          <p className="mt-2 hover:underline underline-offset-4 transition-all duration-200 ml-auto max-w-max text-sm text-blue-100">
            Forgot Password
          </p>
        </Link>
      </label>
      <button
        type="submit"
        className="mt-6 rounded-[8px] bg-white py-[8px] px-[12px] font-medium text-gray-900 hover:bg-purple-400"
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm