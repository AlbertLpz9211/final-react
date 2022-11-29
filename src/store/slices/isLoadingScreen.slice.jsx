import { createSlice } from '@reduxjs/toolkit';

export const isLoadingScreen = createSlice({
    name: 'isLoadingScreen',
    initialState: true,
    reducers: {

    }
})

export const {  } = isLoadingScreen.actions;

export default isLoadingScreen.reducer;
