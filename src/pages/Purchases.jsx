import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { purchasesThunk } from "../store/slices/purchases.slice";


const Purchases = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(purchasesThunk());
  }, []);

  return (
    <div>
      <h1>componente Purchases</h1>
    </div>
  );
};

export default Purchases;
