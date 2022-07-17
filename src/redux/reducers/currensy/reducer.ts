import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrensyInterface } from "../../../";





const initialState: CurrensyInterface = {
    defaultCurrensy: '',
}



export const currensyReducer = createSlice({
    name: 'currensy',
    initialState,
    reducers: {
        changeCurrensyObj: (state, { payload }: PayloadAction<CurrensyInterface>) => {
            return { ...state, ...payload };
        },
    }
})

export const { changeCurrensyObj } = currensyReducer.actions;
export default currensyReducer.reducer;