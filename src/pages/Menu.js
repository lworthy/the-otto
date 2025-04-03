import { useEffect, useState } from 'react';
import MenuItem from '../components/MenuItem';
import './Menu.css';

function Menu() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    // Static data simulating menu.json
    const data = [
      {
        _id: 1,
        name: 'Bruschetta',
        description: 'Toasted bread with tomatoes and basil',
        price: 8.0,
        img_name: 'bruschetta.jpg'
      },
      {
        _id: 2,
        name: 'Stuffed Mushrooms',
        description: 'Mushrooms filled with cheese and herbs',
        price: 9.0,
        img_name: 'stuffed-mushrooms.jpg'
      },
      {
        _id: 3,
        name: 'Grilled Salmon',
        description: 'Served with lemon butter sauce',
        price: 18.0,
        img_name: 'salmon.jpg'
      },
      {
        _id: 4,
        name: 'Ribeye Steak',
        description: '12oz ribeye with roasted potatoes',
        price: 25.0,
        img_name: 'steak.jpg'
      },
      {
        _id: 5,
        name: 'Tiramisu',
        description: 'Classic Italian layered dessert',
        price: 6.0,
        img_name: 'tiramisu.jpg'
      },
      {
        _id: 6,
        name: 'Lava Cake',
        description: 'Molten chocolate with vanilla ice cream',
        price: 7.0,
        img_name: 'lava-cake.jpg'
      },
      {
        _id: 7,
        name: 'Caprese Salad',
        description: 'Mozzarella, tomatoes, basil, balsamic glaze',
        price: 10.0,
        img_name: 'caprese.jpg'
      },
      {
        _id: 8,
        name: 'Shrimp Alfredo',
        description: 'Creamy garlic pasta with shrimp',
        price: 17.0,
        img_name: 'shrimp-alfredo.jpg'
      }
    ];

    setMenuData(data);
  }, []);

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-list">
        {menuData.map((item) => (
          <MenuItem
            key={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={`/images/${item.img_name}`} // from public/images
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
