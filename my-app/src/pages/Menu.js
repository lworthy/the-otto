import { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import AddMenuItem from '../components/AddMenuItem';
import EditMenuItem from '../components/EditMenuItem'; 
import './Menu.css';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); 

  // Fetch the menu list
  const refreshMenu = () => {
    fetch("https://otto-server-g8hy.onrender.com/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Failed to fetch menu:", err));
  };

  // Load once on mount
  useEffect(() => {
    refreshMenu();
  }, []);

  // Handle delete request
  const handleDelete = (index) => {
    fetch(`https://otto-server-g8hy.onrender.com/api/menu/${index}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          refreshMenu(); // Update the list after delete
        } else {
          console.error('Delete failed:', data.message);
        }
      })
      .catch(err => console.error('Error deleting:', err));
  };

  // Handle edit button click
  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleCloseEdit = () => {
    setEditingIndex(null);
  };

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <AddMenuItem onNewItem={refreshMenu} />

      {/* Show Edit Form */}
      {editingIndex !== null && (
        <EditMenuItem
          index={editingIndex}
          item={menuItems[editingIndex]}
          onClose={handleCloseEdit}
          onUpdate={refreshMenu}
        />
      )}

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            index={index}
            {...item}
            onDelete={handleDelete}
            onEdit={handleEdit} 
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
