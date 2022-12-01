import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoadingScreen } from "./isLoadingScreen.slice";

export const purchasesSlice = createSlice({
  name: "purchases",
  initialState: [],
  reducers: {
    setPurchases: (state, action) => {
      return action.payload;
    },
  },
});

export const purchasesThunk = () => dispatch => {
    dispatch(setIsLoadingScreen(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/purchases`)
        .then((res) => dispatch(setPurchases(res.data)))
        .finally(() => dispatch(setIsLoadingScreen(false)));
}

export const {setPurchases} = purchasesSlice.actions;

export default purchasesSlice.reducer;
