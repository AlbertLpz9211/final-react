import { configureStore } from "@reduxjs/toolkit";

import isLoadingScreen from "./slices/isLoadingScreen.slice";
import productsSlice from "./slices/products.slice";
import { purchasesSlice } from "./slices/purchases.slice";

export default configureStore({
  reducer: {
    producs: productsSlice,
    isLoadinScreen: isLoadingScreen,
    purchases: purchasesSlice
  },
});
