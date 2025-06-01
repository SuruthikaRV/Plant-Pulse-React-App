import React, { useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlantData } from '../redux/actions'; // Adjust the path as necessary

function PlantCareGuide() {
  const dispatch = useDispatch();
  const { plantData } = useSelector((state) => state.plants); // Accessing plant data from Redux store
  const { loading, error } = useSelector((state) => state.plants); // Add loading and error from state if needed

  // Fetch plant data when component mounts
  useEffect(() => {
    dispatch(fetchPlantData());
  }, [dispatch]);

  // If data is still loading
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // If there was an error fetching data
  if (error) {
    return <h2>Error fetching data: {error}</h2>;
  }

  return (
    <Container>
      <h2>Plant Care Guide</h2>
      <Row>
        {plantData.map((plant) => (
          <Col key={plant.id} sm={12} md={6} className="mb-4">
            <Card className="care-guide-card">
              <Card.Body>
                <Card.Title>{plant.name}</Card.Title>
                <Card.Text>
                  <strong>Watering Frequency:</strong> Every {plant.waterFrequency} days
                  <br />
                  <strong>Tip:</strong> {plant.careTip}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PlantCareGuide;
