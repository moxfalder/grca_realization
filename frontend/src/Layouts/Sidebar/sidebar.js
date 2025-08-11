import "./sidebar.css";
import Button from "../../Components/UI/Button/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModuleOrder from "../../Components/module/moduleOrder";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-modules_full">
        {/* <h2>{props.title}</h2> */}
        <div className="sidebar-listOfModules">
          <div className="modules">
            <ModuleOrder title="заказ услуг" />
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
