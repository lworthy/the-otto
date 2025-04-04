import './MenuItem.css';

function MenuItem({ name, description, price, image }) {
  return (
    <div className="menu-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="price">${price.toFixed(2)}</span>
    </div>
  );
}

export default MenuItem;
