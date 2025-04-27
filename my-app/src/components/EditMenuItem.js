import { useState, useEffect } from 'react';
import './EditMenuItem.css';

function EditMenuItem({ item, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name || '',
        description: item.description || '',
        price: item.price || ''
      });
    }
  }, [item]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', parseFloat(formData.price));
    if (imageFile) form.append('image', imageFile);

    fetch(`https://otto-server-g8hy.onrender.com/api/menu/${item._id}`, {
      method: 'PUT',
      body: form
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          onUpdate();  
          onClose();   
        } else {
          alert('Failed to update');
        }
      })
      .catch(() => alert('Error updating item'));
  };

  return (
    <div className="edit-form">
      <h2>Edit Menu Item</h2>
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

        {/* Show current image preview */}
        {item?.image && (
          <div className="image-preview">
            <p>Current Image:</p>
            <img 
              src={`${process.env.PUBLIC_URL}${item.image}`} 
              alt={item.name} 
              width="200" 
            />
          </div>
        )}

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
        />

        <button type="submit">Save Changes</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default EditMenuItem;
