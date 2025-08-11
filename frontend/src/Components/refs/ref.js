import { Link } from "react-router-dom";
import services from "../../data/services";
import getTitle from "../../utils/getTitle";

const Refs = (props) => {
  return (
    <div className="refs submodule">
      <ul className="refs-titles-list">
        {services.map((services, index) => {
          return (
            <li className="refs-title" key={index}>
              <Link to={services.ref}>{services.service}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Refs;
