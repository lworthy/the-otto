import { useState } from 'react';
import './AddMenuItem.css';

function AddMenuItem({ onNewItem }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const validateForm = () => {
    return (
      formData.name.trim().length >= 3 &&
      formData.description.trim().length >= 10 &&
      !isNaN(formData.price) &&
      parseFloat(formData.price) > 0 &&
      imageFile
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!validateForm()) {
      setStatus('error');
      return;
    }
  
    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', parseFloat(formData.price)); 
    form.append('image', imageFile);
  
    fetch('https://otto-server-g8hy.onrender.com/api/menu', {
      method: 'POST',
      body: form
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setStatus('success');
          setFormData({ name: '', description: '', price: '' });
          setImageFile(null);
          onNewItem(); // refresh the menu list
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

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddMenuItem;
