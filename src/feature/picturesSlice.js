import {createSlice} from "@reduxjs/toolkit";


export const picturesSlice = createSlice({
    name: 'pictures',
    initialState: {
        pictures: null,
    },
    reducers: {
        setPicturesData: (state, action) => {
            state.pictures = action.payload;
        },
        addPicture: (state, action) => {
            state.pictures.push(action.payload)
        }
    }
});

export const {setPicturesData} = picturesSlice.actions;
export const {addPicture} = picturesSlice.actions;
export default picturesSlice.reducer;
