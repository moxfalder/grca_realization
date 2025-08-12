import { Link } from "react-router-dom";
import "./link.css";
const Links = (props) => {
  return (
    <div className="link">
      <Link to="/">{props.text}</Link>
    </div>
  );
};
export default Links;
