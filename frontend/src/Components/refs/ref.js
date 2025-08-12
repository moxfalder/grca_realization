import "./ref.css";
import { Link } from "react-router-dom";
import services from "../../data/services";
import getTitle from "../../utils/getTitle";

const Refs = (props) => {
  const showHideServices = (e) => {
    let refsTitle = document.querySelectorAll(".refs-title");
    console.log(e);
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
  };

  return (
    <div className="refs submodule">
      <ul className="refs-titles-list">
        {services.map((services, index) => {
          return (
            <li className="refs-title" key={index}>
              <Link
                to={services.ref}
                className="refs-title-link"
                onClick={showHideServices}
              >
                <span className={services.class}></span>
                {services.service}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Refs;
