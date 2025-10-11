import { toast } from "react-toastify";
import { setLoading, setToken } from "../../features/authSlice";
import { resetCart } from "../../features/cartSlice";
import { setUser } from "../../features/profileSlice";
import { apiConnector } from "../apiConnnector";
import { endpoints } from "../api";
const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints;

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.info("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE............", response);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      navigate("/verify-email");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function signUp(
  accountType,
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.info("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });

      console.log("SIGNUP API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      navigate("/log-in");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
      navigate("/sign-up");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.info("Loading...");
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });

      console.log("LOGIN API RESPONSE............", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      dispatch(setToken(response.data.data.token));
      const userImage = response.data?.data?.image
        ? response.data.data.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.user.lastName}`;
      navigate("");
      dispatch(setUser({ ...response.data.data, image: userImage }));
      localStorage.setItem("token", JSON.stringify(response.data.data.token));
      localStorage.setItem("user", JSON.stringify(response.data.data));
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
      toast.error("Login Failed");
      navigate("/dashboard/my-profile");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    dispatch(resetCart());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
}

export function getPasswordResetToken(email, setEmailSent) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSTOKEN_API, {
        email,
      });

      console.log("RESET PASSWORD TOKEN RESPONSE....", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      setEmailSent(true);
    } catch (error) {
      console.log("RESET PASSWORD TOKEN Error", error);
    }
    dispatch(setLoading(false));
  };
}

export function resetPassword(password, confirmPassword, token) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", RESETPASSWORD_API, {
        password,
        confirmPassword,
        token,
      });

      console.log("RESET Password RESPONSE ... ", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

    } catch (error) {
      console.log("RESET PASSWORD TOKEN Error", error);
    }
    dispatch(setLoading(false));
  };
}
