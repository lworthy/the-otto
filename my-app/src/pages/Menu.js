import MenuItem from '../components/MenuItem';
import './Menu.css';

function Menu() {
  const menuItems = [
    {
      name: "SH Burger",
      description: "Juicy beef patty with smoky bacon, melted cheddar, crispy fried onions, and house-made BBQ sauce.",
      price: 16,
      image: process.env.PUBLIC_URL + "/images/burger.jpg"
    },
    {
      name: "Specialty Pasta",
      description: "Creamy garlic parmesan pasta with grilled chicken and sun-dried tomatoes, topped with fresh basil.",
      price: 18,
      image: process.env.PUBLIC_URL + "/images/pasta.jpg"
    },
    {
      name: "Classic Cheesecake",
      description: "Rich and creamy cheesecake with a buttery graham cracker crust, topped with fresh strawberries.",
      price: 8,
      image: process.env.PUBLIC_URL + "/images/cheesecake.jpg"
    },
    {
      name: "Garden Fresh Salad",
      description: "Rich and creamy cheesecake with a buttery graham cracker crust, topped with fresh strawberries.",
      price: 12,
      image: process.env.PUBLIC_URL + "/images/salad.jpg"
    },
    {
        name: "Signature Pizza",
        description: "Hand-stretched artisan crust with zesty tomato sauce, premium cheeses, and gourmet toppings.",
        price: 17,
        image: process.env.PUBLIC_URL + "/images/pizza.jpg"
      },
      {
        name: "House Lemonade",
        description: "Refreshing homemade lemonade with freshly squeezed lemons and a hint of mint.",
        price: 3,
        image: process.env.PUBLIC_URL + "/images/lemonade.jpg"
      },
      {
        name: "Grilled Salmon",
        description: "Fresh Atlantic salmon grilled to perfection, served with lemon-butter sauce and seasonal vegetables.",
        price: 24,
        image: process.env.PUBLIC_URL + "/images/salmon.jpg"
      },
      {
        name: "Iced Caramel Macchiato",
        description: "Espresso layered with vanilla, milk, and caramel drizzle over ice.",
        price: 6,
        image: process.env.PUBLIC_URL + "/images/macchiato.jpg"
      },
    
  ];

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
