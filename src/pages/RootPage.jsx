import axios from "axios";
import React from "react";
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
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  filterProductThunk,
  getProductThunk,
  searchProductThunk,
} from "../store/slices/products.slice";

const RootPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.producs);
  const [categoriesProduct, setCategoriesProduct] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    dispatch(getProductThunk());
    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
      .then((res) => setCategoriesProduct(res.data.data.categories));
  }, []);

  return (
    <div>
      <Row>
        {/* CATEGORIAS */}
        <Col lg={3}>
          <ListGroup>
            {categoriesProduct.map((category) => (
              <ListGroup.Item
                key={category.id}
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(filterProductThunk(category.id))}
              >
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* INPUT SEARCH */}
        <Col lg={9}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Type a product"
              aria-label="Recipient's products"
              aria-describedby="basic-addon2"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              onClick={() => dispatch(searchProductThunk(inputSearch))}
            >
              Search
            </Button>
          </InputGroup>

          {/* PRODUCTOS */}
          <Row xs={1} md={2} lg={3} className="g-4">
            {products.map((productsItems) => (
              <Col key={productsItems.id}>
                <Card>
                  <Link
                    to={`/product/${productsItems.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Img
                      variant="top"
                      src={productsItems.productImgs[0]}
                      style={{ height: 200, objectFit: "contain" }}
                    />
                    <Card.Body>
                      <Card.Title> {productsItems.title}</Card.Title>
                      <Card.Text>
                        <br />
                        Price: {productsItems.price}
                      </Card.Text>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default RootPage;
