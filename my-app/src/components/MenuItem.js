import './MenuItem.css';

function MenuItem({ name, description, price, image, index, onDelete, onEdit }) {
  return (
    <div className="menu-item">
      {image && <img src={image} alt={name} />}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price && !isNaN(price) ? parseFloat(price).toFixed(2) : '0.00'}</p>
      <button className="edit-btn" onClick={() => onEdit(index)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
}

export default MenuItem;
