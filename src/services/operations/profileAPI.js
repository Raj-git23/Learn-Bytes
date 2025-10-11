import {toast} from "react-toastify";
import { settingsEndpoints } from "../api";
import { apiConnector } from "../apiConnnector";
import { setLoading } from "../../features/authSlice";
import { setUser } from "../../features/profileSlice";

export const updateProfile = (token, data) => {
  const { dateOfBirth, contactNo, gender, about } = data;
  return async (dispatch) => {
    const toastId = toast.info("loading...");
    dispatch(setLoading(true));
    try {
      const res = await apiConnector(
        "PUT",
        settingsEndpoints.UPDATE_PROFILE_API,
        {
          dateOfBirth,
          contactNo,
          gender,
          about,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      )
      console.log(res);
      dispatch(setUser(res.data.updatedUserDetails))
    } catch (err) {
      console.log(err);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};

export const deleteProfile = (token) => {
  return async (dispatch) => {
    const toastId = toast.info("Deleting profile...");
    dispatch(setLoading(true));
    try {
      const res = await apiConnector(
        "DELETE",
        settingsEndpoints.DELETE_PROFILE_API,
        {},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log(res);
      // Optionally, you can dispatch actions to clear user state here
    } catch (err) {
      console.log(err);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
};