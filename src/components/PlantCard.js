/* eslint-disable no-undef */
import React, {useState} from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(false);
  const [price, setPrice] = useState(plant.price);

  const handleSoldOutClick = () => {
    setSoldOut(!soldOut);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handlePriceUpdate = () => {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price: parseFloat(price) })
    })
      .then(response => response.json())
      .then(updatedPlant => {
        setPrice(updatedPlant.price);
      })
      .catch(error => console.error('Error updating price:', error));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>Price: $
      <input
          type="number"
          value={price}
          onChange={handlePriceChange}
          onBlur={handlePriceUpdate} // Update price on blur (when user clicks away)
        />
      </p>
      <button onClick={handleSoldOutClick}>
        {soldOut ? 'Sold Out' : 'Available'}
      </button>
      <button onClick={() => onDelete(plant.id)}>Delete</button>
    </div>
  );
 
}

export default PlantCard;
