import { showHide } from "../../utils/showHide";

const ModuleStatistics = (props) => {
  return (
    <div className="statistics module">
      <a href="" className="statistics-title moduleTitle" onClick={showHide}>
        {props.title}
      </a>
    </div>
  );
};
export default ModuleStatistics;
