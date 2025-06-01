import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GardenJournal from './components/GardenJournal';
import MedicinalPlants from './components/MedicinalPlants';
import PlantCareGuide from './components/PlantCareGuide';
import AboutUs from './components/AboutUs';
import NavigationBar from './components/Navbar';
import './styles/customStyles.css';


function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/garden-journal" element={<GardenJournal />} />
          <Route path="/medicinal-plants" element={<MedicinalPlants />} />
          <Route path="/plant-care-guide" element={<PlantCareGuide />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
