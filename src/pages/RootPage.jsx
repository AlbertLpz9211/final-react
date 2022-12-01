import axios from "axios";
import React from "react";
import {Button} from 'react-bootstrap'
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterProductThunk,
  getProductThunk,
} from "../store/slices/products.slice";

const RootPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.producs);
  const [categoriesProduct, setCategoriesProduct] = useState([]);

  useEffect(() => {
    dispatch(getProductThunk());

    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategoriesProduct(res.data.data.categories));
  }, []);

  console.log(categoriesProduct);

  return (
    <div>
      <h1>componente raiz</h1>
      {categoriesProduct.map((category) => (
        <Button
          key={category.id}
          onClick={() => dispatch(filterProductThunk(category.id))}
        >
          {category.name}
        </Button>
      ))}

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
