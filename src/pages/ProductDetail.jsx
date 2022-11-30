import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductThunk } from "../store/slices/products.slice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductThunk());
  }, []);

  const productsList = useSelector((state) => state.producs);

  const productFund = productsList.find(
    (productItem) => productItem.id === Number(id)
  );

  const relatedProduct = productsList.filter(
    (productItem) => productItem.category.id === productFund.category.id
  );

  console.log(relatedProduct);

  return (
    <div>
      <h1>{productFund?.title}</h1>
      <img src={productFund?.productImgs[0]} alt="" />
      <h4>Price: ${productFund?.price}</h4>
      <br />
      <h3>Related Products</h3>
      {relatedProduct.map((newProducts) => (
        <li>
          <Link to={`/product/${newProducts.id}`}>{newProducts.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default ProductDetail;
