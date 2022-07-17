import { combineReducers } from "@reduxjs/toolkit";
import { currensyReducer } from "./currensy";


const RootReducer = combineReducers({
    currensy: currensyReducer,
})


export default RootReducer;