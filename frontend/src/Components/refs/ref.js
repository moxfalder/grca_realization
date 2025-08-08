import { Link } from "react-router-dom";
import services from "../../data/services";

const Refs = () => {
  return (
    <div className="refs">
      <div className="refs-titles-list">
        {services.map((services) => {
          return (
            <li className="refs-title">
              <Link to={services.ref}>{services.service}</Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};
export default Refs;
