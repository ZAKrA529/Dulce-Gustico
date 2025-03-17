import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import './Products.css';

const productCategories = [
  {
    title: 'Queques',
    products: [
      { title: 'Queque de Fresa', text: 'Delicioso queque de fresa con cobertura cremosa.', img: 'https://via.placeholder.com/300x200' },
      { title: 'Queque de Chocolate', text: 'Queque de chocolate esponjoso con glaseado de cacao.', img: 'https://via.placeholder.com/300x200' },
      { title: 'Queque de Vainilla', text: 'Suave queque de vainilla con un toque de crema.', img: 'https://via.placeholder.com/300x200' },
    ],
  },
  {
    title: 'Cupcakes',
    products: [
      { title: 'Cupcake de Fresa', text: 'Cupcake de fresa con un toque de crema de mantequilla.', img: 'https://via.placeholder.com/300x200' },
      { title: 'Cupcake de Chocolate', text: 'Cupcake de chocolate con glaseado de vainilla.', img: 'https://via.placeholder.com/300x200' },
      { title: 'Cupcake Red Velvet', text: 'Cupcake Red Velvet con glaseado de queso crema.', img: 'https://via.placeholder.com/300x200' },
    ],
  },
  {
    title: 'Almuerzos',
    products: [
      { title: 'Ensalada César', text: 'Ensalada fresca con aderezo César y pollo a la parrilla.', img: 'https://via.placeholder.com/300x200' },
      { title: 'Hamburguesa Artesanal', text: 'Hamburguesa artesanal con papas fritas caseras.', img: 'https://via.placeholder.com/300x200' },
      { title: 'Wrap de Pollo', text: 'Wrap de pollo con verduras frescas y salsa de yogur.', img: 'https://via.placeholder.com/300x200' },
    ],
  },
];

const ProductCard = ({ title, text, img }) => (
  <Col md={4} className="mb-4">
    <Card className="product-card">
      <Card.Img variant="top" src={img} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  </Col>
);

function Products() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Productos Destacados</h2>
      <Carousel>
        {productCategories.map((category, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {category.products.map((product, idx) => (
                <ProductCard key={idx} {...product} />
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Products;