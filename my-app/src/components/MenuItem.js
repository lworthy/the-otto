import './MenuItem.css';

function MenuItem({ item, onDelete, onEdit }) {
  const { _id, name, description, price, image } = item;

  return (
    <div className="menu-item">
      {image && <img src={`${process.env.PUBLIC_URL}${image}`} alt={name} />}
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price && !isNaN(price) ? parseFloat(price).toFixed(2) : '0.00'}</p>
      <button className="edit-btn" onClick={() => onEdit(_id)}>Edit</button>
      <button className="delete-btn" onClick={() => onDelete(_id)}>Delete</button>
    </div>
  );
}

export default MenuItem;

