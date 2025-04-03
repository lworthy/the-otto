import './MenuItem.css';

function MenuItem({ name, description, price, image }) {
  return (
    <div className="menu-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
    </div>
  );
}

export default MenuItem;
