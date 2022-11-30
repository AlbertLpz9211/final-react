import { createSlice } from "@reduxjs/toolkit";

export const isLoadingScreen = createSlice({
  name: "isLoadingScreen",
  initialState: true,
  reducers: {
    setIsLoadingScreen: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsLoadingScreen } = isLoadingScreen.actions;

export default isLoadingScreen.reducer;
