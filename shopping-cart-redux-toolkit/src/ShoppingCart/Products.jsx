import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "./cartSlice";
 
const Products = () => {
  const [products, setProducts] = useState([]);

  const dispatch=useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const productRes = await axios.get("https://fakestoreapi.com/products");
      setProducts(productRes.data);
    };
    getProducts();
  }, []);

 const addToCart=(product)=>{
  dispatch(add(product))
 }

  return (
    <>
  
      <Container fluid>
        <Row>
          
             {
              products.map((product)=>(
                <Col md={3}>
                <Card style={{ paddingTop:'10px' , margin:'10px' }}>
                  <div className="text-center">
                  <Card.Img variant="top" src={product.image} style={{height:'200px' , width:'200px'}} />
                  </div>

                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                     INR: {product.price}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer style={{background:"white"}}>
                  <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
                  </Card.Footer>
                </Card>
              </Col>
              ))
             }
          
        </Row>
      </Container>
    </>
  );
};

export default Products;
