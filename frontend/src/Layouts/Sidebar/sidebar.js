import "./sidebar.css";
import Button from "../../Components/UI/Button/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModuleOrder from "../../Components/module/moduleOrder";

function Sidebar(props) {
  // const [title, setTitle] = useState();
  // const changeTitle = () => {
  //   setTitle(getTitle());
  // };

  const onClickHandler = (e) => {
    e.preventDefault();
    const target = document.querySelector(".submodule");
    // console.log(target);

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      target.style.display = "none";
    } else {
      e.target.classList.add("active");
      target.style.display = "block";
    }
  };

  // const [title, setTitle] = useState(
  //   "Государственная регистрация недвижимого имущества1111"
  // );

  return (
    <div className="sidebar">
      <div className="sidebar-modules_full">
        {/* <h2>{props.title}</h2> */}
        <div className="sidebar-listOfModules">
          <div className="modules">
            <ModuleOrder title="Гос регистрация" />
            {/* <div className="module">
              <a onClick={onClickHandler} className="moduleTitle" href="">
                ЗАКАЗ УСЛУГ
              </a>
              <div className="submodule">
                <ul className="submodule-titles">
                  {orderTitleList.map((orderTitle) => {
                    return (
                      <>
                        <li className="submodule-title-list">
                          <Link to="/">{orderTitle}</Link>
                        </li>
                      </>
                    );
                  })}
                  <li className="submodule-title-list">
                    <Link to="registration">
                      Государственная регистрация недвижимого имущества
                    </Link>
                  </li>
                  <li className="submodule-title-list">
                    <a href="">Техническая инвентаризация</a>
                  </li>
                  <li className="submodule-title-list">
                    <a href="">Геодезия</a>
                  </li>
                  <li className="submodule-title-list">
                    <a href="">Оценка</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="module">
              <a className="moduleTitle" href="">
                статистика
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <Button type="submit" text="Выйти из системы" />
    </div>
  );
}

export default Sidebar;
