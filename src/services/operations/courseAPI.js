import { toast } from "react-toastify"
import { setLoading, setToken } from "../../features/authSlice"
import { apiConnector } from "../apiConnnector"
import { categories, courseEndpoints } from "../api"
import { getCategories, getCourses, getDetails } from "../../features/courseSlice"

export const getAllCourse = () => {
    return async (dispatch) => {
        const toastId = toast.info("Loading...")
        dispatch(setLoading(true))
        try{
            const res = await apiConnector("GET", courseEndpoints.GET_ALL_COURSE_API)
            console.log(res)
            dispatch(getCourses(res.data.data))
            
        }catch(err){
            console.log(err)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export const getCourseDetails = (courseId) => {
    return async (dispatch) => {
        const toastId = toast.info("loading...")
        dispatch(setLoading(true))
        try{
            const res = await apiConnector("POST", courseEndpoints.COURSE_DETAILS_API, {
                courseId
            })
            console.log("API Response............", res)
            dispatch(getDetails(res.data.data))
        }catch(err){
            console.log(err)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}


export const getAllCategories = () => {
    return async (dispatch) => {
        const toastId = toast.loading("loading...")
        dispatch(setLoading(true))
        try{
            const res = await apiConnector("GET", categories?.CATEGORIES_API)
            console.log("API Response............", res?.data?.data?.allCategory)
            dispatch(getCategories(res?.data?.allCategory))
        }catch(err){
            console.log(err)
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}