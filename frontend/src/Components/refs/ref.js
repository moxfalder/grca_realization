import "./ref.css";
import { Link } from "react-router-dom";
import services from "../../data/services";
import { showHideServices } from "../../utils/showHide";

const Refs = (props) => {
  // const showHideServices = (e) => {
  //   const elem = document.querySelectorAll(".refs-title-link");

  //   for (let i = 0; i < elem.length; i++) {
  //     elem[i].classList.remove("active");
  //   }
  //   e.target.classList.add("active");
  // };

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
