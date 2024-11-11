import React, {useState} from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(false);

  const handleSoldOutClick = () => {
    setSoldOut(!soldOut);
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>Price: ${plant.price}</p>
      <button onClick={handleSoldOutClick}>
        {soldOut ? 'Sold Out' : 'Available'}
      </button>
    </div>
  );
 
}

export default PlantCard;
