import { createSlice } from "@reduxjs/toolkit";

const initialBlogState = [
    {
        id: 0,
        title: "1 Lorem ipsum dolor sit amet.",
        content: "",
        author: ""
    },
    {
        id: 1,
        title: "2 Lorem ipsum dolor sit amet.",
        content: "",
        author: ""
    },
    {
        id: 2,
        title: "3 Lorem ipsum dolor sit amet.",
        content: "",
        author: ""
    },
    {
        id: 4,
        title: "4 Lorem ipsum dolor sit amet.",
        content: "",
        author: ""
    },
]

const blogs = createSlice({
    name: "blogs",
    initialState: initialBlogState,
    reducers: {

    }
})


export default blogs.reducer