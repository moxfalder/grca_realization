import { Link } from "react-router-dom";
import showHide from "../../utils/showHide";
// import modules from "../../data/modules";
import Refs from "../refs/ref";

const ModuleOrder = (props) => {
  return (
    <>
      <div className="module">
        <a href="" className="moduleTitle" onClick={showHide}>
          {props.title}
        </a>
        <Refs />
      </div>
    </>
  );
};

export default ModuleOrder;
