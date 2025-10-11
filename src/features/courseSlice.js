import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses : [],
    courseDetails : {},
    categories: [],
}

export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers:{
        getCourses: (state, action) => {
            console.log(action.payload) 
            state.courses = action.payload
        },
        getDetails : (state, action) => {
            console.log(action.payload)
            state.courseDetails = action.payload
        },
        getCategories: (state, action) => {
            console.log(action.payload)
            state.categories = action.payload
        }
    }
})

export const {getCourses, getDetails, getCategories} = courseSlice.actions

export default courseSlice.reducer