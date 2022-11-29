import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductThunk } from "../store/slices/products.slice";

const RootPage = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  return (
    <div>
      <h1>componente raiz</h1>
    </div>
  );
};

export default RootPage;
