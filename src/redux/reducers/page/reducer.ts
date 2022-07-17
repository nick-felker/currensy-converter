import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PageInterface } from "../../../";





const initialState: PageInterface = {
    pageAdress: 'converter',
}



export const pageReducer = createSlice({
    name: 'page',
    initialState,
    reducers: {
        changePageObj: (state, { payload }: PayloadAction<PageInterface>) => {
            return { ...state, ...payload };
        },
    }
})

export const { changePageObj } = pageReducer.actions;
export default pageReducer.reducer;