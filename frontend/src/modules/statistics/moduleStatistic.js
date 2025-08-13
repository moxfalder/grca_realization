import { showHide } from "../../utils/showHide";
import RefsStatistics from "../../Components/refs/refStatistic";

const ModuleStatistics = (props) => {
  return (
    <div className="statistics module">
      <a href="" className="statistics-title moduleTitle" onClick={showHide}>
        {props.title}
      </a>
      <RefsStatistics title="Информация по пользователю" />
    </div>
  );
};
export default ModuleStatistics;
