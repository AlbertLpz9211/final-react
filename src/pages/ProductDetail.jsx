import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductThunk } from "../store/slices/products.slice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  const productsList = useSelector((state) => state.producs);

  const product = productsList.find(
    (productItem) => productItem.id === Number(id)
  );
  console.log(product);
  return (
    <div>
      <h1>{product?.title}</h1>
      <img src={product?.productImgs[0]} alt="" />
    </div>
  );
};

export default ProductDetail;
