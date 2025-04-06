import { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import './Menu.css';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/menu")
      .then((res) => res.json())
      .then((data) => setMenuItems(data))
      .catch((err) => console.error("Failed to fetch menu:", err));
  }, []);

  return (
    <div className="menu-page">
      <h1>Menu</h1>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
