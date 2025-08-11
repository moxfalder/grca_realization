import { Link } from "react-router-dom";
const Links = (props) => {
  return (
    <div className="link">
      <Link to="/">{props.text}</Link>
    </div>
  );
};
export default Links;
