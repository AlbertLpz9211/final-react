import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductThunk } from "../store/slices/products.slice";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

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
    (productItem) =>
      productItem.category.id === productFund.category.id &&
      productItem.id != Number(id)
  );

  console.log(relatedProduct);

  return (
    <div>
      <h1>{productFund?.title}</h1>

      <Row>
        {/* descripcion del producto */}
        <Col lg={9}>
          <Carousel>
            <Carousel.Item>
              <img
                src={productFund?.productImgs[0]}
                alt="First slide"
                className="img-fluid"
                style={{ height: 400 }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={productFund?.productImgs[1]}
                alt="Second slide"
                className="img-fluid"
                style={{ height: 400 }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={productFund?.productImgs[2]}
                alt="Third slide"
                className="img-fluid"
                style={{ height: 400}}
              />
            </Carousel.Item>
          </Carousel>
        </Col>

        {/* productos relacionados */}
        <Col lg={3}>
          <ListGroup variant="flush">
            <h3>Related Products</h3>
            {relatedProduct.map((newProducts) => (
              <ListGroup.Item key={newProducts.id}>
                <Link to={`/product/${newProducts.id}`}>
                  {newProducts.title}
                  <img
                    src={newProducts.productImgs[0]}
                    alt=""
                    className="img-fluid"
                    style={{ height: 200, width: 200, objectFit: "contain" }}
                  />
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
