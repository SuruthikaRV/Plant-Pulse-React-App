import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function MedicinalPlants() {
  const plants = [
    { 
      name: 'Aloe Vera', 
      benefit: 'Heals burns and improves skin health.', 
      image: 'https://i0.wp.com/farmseller.in/wp-content/uploads/2022/01/Alovera-plant.jpeg?fit=866%2C848&ssl=1' // Replace with the actual image URL
    },
    { 
      name: 'Lavender', 
      benefit: 'Reduces anxiety and improves sleep.', 
      image: 'https://cdn.shopify.com/s/files/1/0085/2344/8371/files/nature-close-up-purple-plant-flower-summer-generative-ai_480x480.jpg?v=1691480714' // Replace with the actual image URL
    },
    { 
      name: 'Peppermint', 
      benefit: 'Soothes digestive issues and headaches.', 
      image: 'https://www.saje.com/cdn/shop/articles/605581672745.jpg?v=1704996044&width=748' // Replace with the actual image URL
    },
    { 
      name: 'Chamomile', 
      benefit: 'Reduces inflammation and helps with sleep.', 
      image: 'https://cdn.shopify.com/s/files/1/0573/3993/6868/t/6/assets/roman-chamomile-closeup-1696019776245.jpg?v=1696019777' // Replace with the actual image URL
    },
    { 
      name: 'Ginger', 
      benefit: 'Reduces nausea and inflammation.', 
      image: 'https://cdn.britannica.com/19/231119-050-35483892/Indian-ginger-Zingiber-officinale.jpg' // Replace with the actual image URL
    },
    { 
      name: 'Turmeric', 
      benefit: 'Anti-inflammatory and antioxidant properties.', 
      image: 'https://www.shankara.in/cdn/shop/articles/Turmeric.jpg?v=1717414315&width=2048' // Replace with the actual image URL
    }
  ];

  return (
    <Container>
      <h2>Medicinal Plant Benefits</h2>
      <Row>
        {plants.map((plant, index) => (
          <Col key={index} sm={12} md={4} className="mb-4">
            <Card className="medicinal-plant-card">
              <Card.Img variant="top" src={plant.image} alt={plant.name} />
              <Card.Body>
                <Card.Title>{plant.name}</Card.Title>
                <Card.Text>{plant.benefit}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MedicinalPlants;
