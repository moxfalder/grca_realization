import "./sidebar.css";
import Button from "../../Components/UI/Button/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModuleOrder from "../../modules/moduleOrder/moduleOrder";
import ModuleStatistics from "../../modules/statistics/moduleStatistic";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-modules_full">
        {/* <h2>{props.title}</h2> */}
        <div className="sidebar-listOfModules">
          <div className="modules">
            <ModuleOrder title="заказ услуг" />
            <ModuleStatistics title="модуль статистики" />
          </div>
        </div>
      </div>
      <Button type="submit" text="Выйти из системы" />
    </div>
  );
}

export default Sidebar;
