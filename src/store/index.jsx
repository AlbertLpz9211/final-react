import { configureStore } from "@reduxjs/toolkit";
import isLoadingScreen from "./slices/isLoadingScreen.slice";
import productsSlice from "./slices/products.slice";

export default configureStore({
  reducer: {
    producs: productsSlice,
    isLoadinScreen: isLoadingScreen,
  },
});
