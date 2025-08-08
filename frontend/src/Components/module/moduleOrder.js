import { Link } from "react-router-dom";
// import modules from "../../data/modules";
import Refs from "../refs/ref";

const ModuleOrder = (props) => {
  return (
    <>
      <div className="module">
        <a className="moduleTitle">{props.title}</a>
        <Refs />
      </div>
    </>
  );
};

export default ModuleOrder;
