import React, { useState, useEffect }  from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


useEffect(() => {
  fetch('http://localhost:6001/plants')
    .then(response => response.json())
    .then(data => setPlants(data))
    .catch(error => console.error('Error fetching plants:', error));
}, []);

const filteredPlants = plants.filter(plant =>
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const addPlant = (newPlant) => {
  setPlants([...plants, newPlant]);
};

const deletePlant = (id) => {
  fetch(`http://localhost:6001/plants/${id}`, { method: 'DELETE' })
    .then(() => {
      setPlants(plants.filter(plant => plant.id !== id));
    })
    .catch(error => console.error('Error deleting plant:', error));
};

  return (
  

    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
