import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count : 0
}

const counter = createSlice({
    name:"counter",
    initialState,
    reducers:{                  // features passed here.

        increment:(state)=>{    // increment feature
            state.count++;
        },

        decrement:(state)=>{    // decrement feature
            if(state.count>0)
            {state.count--;}
        },

        reset:(state)=>{        // reset feature
            state.count = 0;
        },

        edit:(state, action) => {
            state.count = action.payload;
        }
    }

})
export const {increment, decrement, reset, edit} = counter.actions
export default counter.reducer;
