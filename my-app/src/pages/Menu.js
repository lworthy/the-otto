import { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import AddMenuItem from '../components/AddMenuItem';
import './Menu.css';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("https://otto-server-g8hy.onrender.com/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Failed to fetch menu:", err));
  }, []);

  const refreshMenu = () => {
    fetch("https://otto-server-g8hy.onrender.com/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Failed to fetch menu:", err));
  };
  

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <AddMenuItem onNewItem={refreshMenu} />
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
