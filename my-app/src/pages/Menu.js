import { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import AddMenuItem from '../components/AddMenuItem';
import EditMenuItem from '../components/EditMenuItem';
import './Menu.css';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch menu list from MongoDB
  const refreshMenu = () => {
    fetch("https://otto-server-g8hy.onrender.com/api/menu")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched menu data:", data);
        setMenuItems(data.menu || []);
      })
      .catch((err) => console.error("Failed to fetch menu:", err));
  };
  

  // Load once on component mount
  useEffect(() => {
    refreshMenu();
  }, []);

  // Handle delete
  const handleDelete = (_id) => {
    fetch(`https://otto-server-g8hy.onrender.com/api/menu/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          refreshMenu();
        } else {
          console.error('Delete failed:', data.message);
        }
      })
      .catch(err => console.error('Error deleting:', err));
  };

  // Start editing a menu item
  const handleEdit = (_id) => {
    setEditingId(_id);
  };

  // Close edit form and refresh menu
  const handleCloseEdit = () => {
    setEditingId(null);
    refreshMenu();
  };

  return (
    <div className="menu-page">
      <h1>Menu</h1>

      {/* Add item form */}
      <AddMenuItem onNewItem={refreshMenu} />

      {/* Edit item form */}
      {editingId !== null && (
        <EditMenuItem
          item={menuItems.find(item => item._id === editingId)}
          onClose={handleCloseEdit}
          onUpdate={refreshMenu}
        />
      )}

      {/* Menu item list */}
      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem
            key={item._id}
            item={item}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
