import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductThunk } from "../store/slices/products.slice";

const RootPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.producs);

  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  return (
    <div>
      <h1>componente raiz</h1>
      {products.map((productsItems) => (
        <li key={productsItems.id}>
          <Link to={`/product/${productsItems.id}`}>{productsItems.title}</Link>
          <br />
          <img src={productsItems.productImgs[0]} alt="" />
        </li>
      ))}
    </div>
  );
};

export default RootPage;
