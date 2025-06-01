import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setPlantCount } from '../redux/actions';
import { Form, Button, Table, Container } from 'react-bootstrap';
import axios from 'axios';

function GardenJournal() {
  const [plants, setPlants] = useState([]);
  const [newPlant, setNewPlant] = useState({
    name: '',
    type: '',
    date: '',
    wateringFrequency: '',
    soilType: '',
    notes: ''
  });

  const dispatch = useDispatch();
  const plantCount = useSelector((state) => state.counter.plantCount); // Ensure you're accessing the correct state

  useEffect(() => {
    fetchPlants();
  }, []);

  const fetchPlants = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/plants');
      setPlants(response.data);
      dispatch(setPlantCount(response.data.length)); // Set initial plant count from fetched data
    } catch (error) {
      console.error('Error fetching plants:', error);
    }
  };

  const handleChange = (e) => {
    setNewPlant({ ...newPlant, [e.target.name]: e.target.value });
  };

  const handleAddPlant = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/plants', newPlant);
      setPlants([...plants, response.data]);
      dispatch(increment()); // Increment plant count after adding
      setNewPlant({
        name: '',
        type: '',
        date: '',
        wateringFrequency: '',
        soilType: '',
        notes: ''
      });
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  const handleDeletePlant = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/plants/${id}`);
      const updatedPlants = plants.filter(plant => plant._id !== id);
      setPlants(updatedPlants);
      dispatch(decrement()); // Decrement plant count after deleting
      dispatch(setPlantCount(updatedPlants.length)); // Update plant count based on the remaining plants
    } catch (error) {
      console.error('Error deleting plant:', error);
    }
  };

  const handleEditPlant = (index) => {
    const plantToEdit = plants[index];
    setNewPlant(plantToEdit);
    handleDeletePlant(plantToEdit._id);
  };

  return (
    <Container className="journal-container">
      <h2 className="text-center mb-4">Garden Journal</h2>
      <h3>Total Plants: {plantCount}</h3> {/* Display the plant count */}
      <Form className="journal-form">
        <Form.Group>
          <Form.Label>Plant Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newPlant.name}
            onChange={handleChange}
            placeholder="Enter plant name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Type of Plant</Form.Label>
          <Form.Control as="select" name="type" value={newPlant.type} onChange={handleChange}>
            <option>Select</option>
            <option>Herb</option>
            <option>Vegetable</option>
            <option>Fruit</option>
            <option>Flower</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date of Planting</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={newPlant.date}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Watering Frequency</Form.Label>
          <Form.Control
            type="text"
            name="wateringFrequency"
            value={newPlant.wateringFrequency}
            onChange={handleChange}
            placeholder="e.g., Twice a week"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Soil Type</Form.Label>
          <div>
            <Form.Check
              type="radio"
              label="Sandy"
              name="soilType"
              value="Sandy"
              checked={newPlant.soilType === 'Sandy'}
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="Loamy"
              name="soilType"
              value="Loamy"
              checked={newPlant.soilType === 'Loamy'}
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="Clay"
              name="soilType"
              value="Clay"
              checked={newPlant.soilType === 'Clay'}
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="Peaty"
              name="soilType"
              value="Peaty"
              checked={newPlant.soilType === 'Peaty'}
              onChange={handleChange}
            />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Additional Notes</Form.Label>
          <Form.Control
            as="textarea"
            name="notes"
            value={newPlant.notes}
            onChange={handleChange}
            placeholder="Any special care or observations..."
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAddPlant} className="mt-3">Add Plant</Button>
      </Form>

      <Table striped bordered hover className="mt-4 journal-table">
        <thead>
          <tr>
            <th>Plant Name</th>
            <th>Type</th>
            <th>Date of Planting</th>
            <th>Watering Frequency</th>
            <th>Soil Type</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {plants.map((plant, index) => (
            <tr key={plant._id}>
              <td>{plant.name}</td>
              <td>{plant.type}</td>
              <td>{new Date(plant.date).toLocaleDateString()}</td>
              <td>{plant.wateringFrequency}</td>
              <td>{plant.soilType}</td>
              <td>{plant.notes}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditPlant(index)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDeletePlant(plant._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default GardenJournal;
