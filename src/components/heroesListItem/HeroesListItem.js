import { useDispatch } from "react-redux";
import { heroesDeleting } from "../../actions";
import { useHttp } from "../../hooks/http.hook";
import { heroesDeleted, heroesDeletingError } from "../../actions";

const HeroesListItem = ({ name, description, element, id }) => {
  const dispatch = useDispatch();
  const { request } = useHttp();
  let elementClassName;

  switch (element) {
    case "fire":
      elementClassName = "bg-danger bg-gradient";
      break;
    case "water":
      elementClassName = "bg-primary bg-gradient";
      break;
    case "wind":
      elementClassName = "bg-success bg-gradient";
      break;
    case "earth":
      elementClassName = "bg-secondary bg-gradient";
      break;
    default:
      elementClassName = "bg-warning bg-gradient";
  }

  const handleDeleteClick = () => {
    dispatch(heroesDeleting(id));
    request(`http://localhost:3001/heroes/${id}`, "DELETE")
      .then(() => dispatch(heroesDeleted(id)))
      .catch(() => dispatch(heroesDeletingError(id)));
  };

  return (
    <li
      className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
    >
      <img
        src="https://images.squarespace-cdn.com/content/v1/6282ec55d5f3c229291fcb47/1674437725718-PQYL45LC1J5G7XX6ZAIM/image-asset.png"
        className="img-fluid w-25 d-inline"
        alt="unknown hero"
        style={{ objectFit: "cover" }}
      />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{description}</p>
      </div>
      <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
        <button
          onClick={handleDeleteClick}
          type="button"
          className="btn-close btn-close"
          aria-label="Close"
        ></button>
      </span>
    </li>
  );
};

export default HeroesListItem;
