import "./sidebar.css";
import Button from "../../Components/UI/Button/button";
import { Link } from "react-router-dom";
// import onClickHandler from "../../../functions";

function Sidebar(props) {
  const onClickHandler = (e) => {
    e.preventDefault();
    const target = document.querySelector(".submodule");
    console.log(target);

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      target.style.display = "none";
    } else {
      e.target.classList.add("active");
      target.style.display = "block";
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-modules_full">
        <h2>{props.title}</h2>
        <div className="sidebar-listOfModules">
          <div className="modules">
            <div className="module">
              <a onClick={onClickHandler} className="moduleTitle" href="">
                ЗАКАЗ УСЛУГ
              </a>
              <div className="submodule">
                <ul className="submodule-titles">
                  <li>
                    <Link to="registration">
                      Государственная регистрация недвижимого имущества
                    </Link>
                    {/* <a href="">
                      Государственная регистрация недвижимого имущества
                    </a> */}
                  </li>
                  <li>
                    <a href="">Техническая инвентаризация</a>
                  </li>
                  <li>
                    <a href="">Геодезия</a>
                  </li>
                  <li>
                    <a href="">Оценка</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="module">
              <a className="moduleTitle" href="">
                статистика
              </a>
            </div>
          </div>
          {/* <ul>
            <li className="module">
              <a href="">ЗАКАЗ УСЛУГ</a>
              <ul className="modulesList">
                <li>
                  <a href="">
                    Государственная регистрация недвижимого имущества
                  </a>
                </li>
                <li>
                  <a href="">Техническая инвентаризация</a>
                </li>
                <li>
                  <a href="">Геодезия</a>
                </li>
                <li>
                  <a href="">Оценка</a>
                </li>
              </ul>
            </li>
            <li className="module">
              <a href="">статистика</a>
            </li>
            <li>
              <a href="">Геодезия</a>
            </li>
            <li>
              <a href="">Оценка</a>
            </li>
          </ul> */}
        </div>
      </div>
      <Button type="submit" text="Выйти из системы" />
    </div>
  );
}

export default Sidebar;
