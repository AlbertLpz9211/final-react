import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoadingScreen } from "./isLoadingScreen.slice";
import getConfig from "../../utils/getConfig";


export const purchasesSlice  = createSlice({
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
  return axios
    .get('https://e-commerce-api.academlo.tech/api/v1/purchases',getConfig())
    .then((res) => dispatch(setPurchases(res.data.data.purchases))) //res.data.data.purchases
    .finally(() => dispatch(setIsLoadingScreen(false)));
};

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
