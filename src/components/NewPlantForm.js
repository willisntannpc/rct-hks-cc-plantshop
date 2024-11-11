import React, {useState} from "react";


function NewPlantForm({addPlant}) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = { name, image, price: parseFloat(price) };

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPlant)
    })
    .then(response => response.json())
    .then(data => {
      addPlant(data);
      setName('');
      setImage('');
      setPrice('');
    });
};

  return (
    <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Plant Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type="text"
      placeholder="Image URL"
      value={image}
      onChange={(e) => setImage(e.target.value)}
    />
    <input
      type="number"
      placeholder="Price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
    />
    <button type="submit">Add Plant</button>
  </form>
);
}

export default NewPlantForm;
