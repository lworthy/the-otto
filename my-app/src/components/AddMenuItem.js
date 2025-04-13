import { useState } from 'react';
import './AddMenuItem.css';

function AddMenuItem({ onNewItem }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, description, price, image } = formData;
    return (
      name.trim().length >= 3 &&
      description.trim().length >= 10 &&
      !isNaN(price) &&
      parseFloat(price) > 0 &&
      image.startsWith('http')
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    fetch('https://otto-server-g8hy.onrender.com/api/menu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, price: parseFloat(formData.price) })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus('success');
          onNewItem(); // add new item to state list
          setFormData({ name: '', description: '', price: '', image: '' });
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  };

  return (
    <div className="add-form">
      <h2>Add a Menu Item</h2>
      {status === 'success' && <p className="success">Item added successfully!</p>}
      {status === 'error' && <p className="error">Please check your input.</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddMenuItem;
