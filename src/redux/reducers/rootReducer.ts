import { combineReducers } from "@reduxjs/toolkit";
import { currensyReducer } from "./currensy";
import { pageReducer } from './page';

const RootReducer = combineReducers({
    currensy: currensyReducer,
    page: pageReducer,
})


export default RootReducer;