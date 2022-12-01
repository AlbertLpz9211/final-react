import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoadingScreen } from "./isLoadingScreen.slice";

export const productsSlice = createSlice({
  name: "producs",
  initialState: [],
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const getProductThunk = () => dispatch =>{
  dispatch(setIsLoadingScreen(true));
  axios
    .get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .finally(() => dispatch(setIsLoadingScreen(false)));
};

export const filterProductThunk = (id) => dispatch => {
    dispatch(setIsLoadingScreen(true));
    return axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
        .then((res) => dispatch(setProducts(res.data.data.products)))
        .finally(() => dispatch(setIsLoadingScreen(false)));
}

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

