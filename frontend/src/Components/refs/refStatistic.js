import "./refStatistic.css";
import { Link } from "react-router-dom";
import GeneralInfo from "../GeneralInfo/generalInfo";
const RefsStatistics = (props) => {
  return (
    <div className="statistics submodule submodule-hide">
      <ul className="statistics-title-list">
        <li className="statistics-title">
          <Link to="/">{props.title}</Link>
        </li>
      </ul>
    </div>
  );
};

export default RefsStatistics;
