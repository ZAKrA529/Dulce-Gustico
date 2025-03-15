import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import './Products.css';

function Products() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Productos Destacados</h2>

      <Carousel>
        {/* Carrusel de Queques */}
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Queque de Fresa</Card.Title>
                  <Card.Text>
                    Delicioso queque de fresa con cobertura cremosa.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Queque de Chocolate</Card.Title>
                  <Card.Text>
                    Queque de chocolate esponjoso con glaseado de cacao.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Queque de Vainilla</Card.Title>
                  <Card.Text>
                    Suave queque de vainilla con un toque de crema.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Carrusel de Cupcakes */}
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Cupcake de Fresa</Card.Title>
                  <Card.Text>
                    Cupcake de fresa con un toque de crema de mantequilla.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Cupcake de Chocolate</Card.Title>
                  <Card.Text>
                    Cupcake de chocolate con glaseado de vainilla.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Cupcake Red Velvet</Card.Title>
                  <Card.Text>
                    Cupcake Red Velvet con glaseado de queso crema.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* Carrusel de Almuerzos */}
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Ensalada César</Card.Title>
                  <Card.Text>
                    Ensalada fresca con aderezo César y pollo a la parrilla.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Hamburguesa Artesanal</Card.Title>
                  <Card.Text>
                    Hamburguesa artesanal con papas fritas caseras.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
                <Card.Body>
                  <Card.Title>Wrap de Pollo</Card.Title>
                  <Card.Text>
                    Wrap de pollo con verduras frescas y salsa de yogur.
                  </Card.Text>
                  <Button variant="primary">Ver más</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Products;
