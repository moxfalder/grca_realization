import { Link } from "react-router-dom";
import "./card.css";
import styles from "./card.module.css";

// console.log(styles);

const Card = (props) => {
  return (
    <div className="card">
      <Link to="/registration-new">
        <h2>{props.title}</h2>
        <p className="card-descr">{props.description}</p>
      </Link>
    </div>
  );
};

export default Card;
