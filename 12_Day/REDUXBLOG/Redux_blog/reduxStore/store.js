import { configureStore } from "@reduxjs/toolkit";

import blogs from '../slices/blogSlice'

const store = configureStore({
    reducer: { blogs: blogs },
})


export default store