import { createSlice } from "@reduxjs/toolkit";

export const isLoadingScreen = createSlice({
  name: "isLoadingScreen",
  initialState: false,
  reducers: {
    setIsLoadingScreen: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsLoadingScreen } = isLoadingScreen.actions;

export default isLoadingScreen.reducer;
