import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { purchasesThunk } from "../store/slices/purchases.slice";


const Purchases = () => {
  const dispatch = useDispatch();
  const purchasesArray = useSelector(state=> state.purchases)
  
  useEffect(() => {
    dispatch(purchasesThunk());
  }, []);

  return (
    <div>
      <h1>Purchases</h1>
      <ul>
      {
        purchasesArray.map(purchase=>(
          <li key={purchase.id}>
            {
            purchase.cart.products.map(product =>(
              <li>
                <h3>Product: {product.title}</h3>
                <h3>Price: {product.price}</h3>
                <h3>date: {product.createdAt}</h3>
              </li>
            ))
            }
          </li>
        ))
      }


      </ul>

    </div>
  );
};

export default Purchases;
