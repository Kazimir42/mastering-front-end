import {configureStore} from "@reduxjs/toolkit";
import picturesReducer from "../feature/picturesSlice";

export default configureStore({
    reducer: {
        pictures: picturesReducer,
    }
})
