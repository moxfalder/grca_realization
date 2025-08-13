import { Link } from "react-router-dom";
import { showHide } from "../../utils/showHide";
// import modules from "../../data/modules";
import RefsOrder from "../../Components/refs/refOrder";

const ModuleOrder = (props) => {
  return (
    <>
      <div className="order module">
        <a href="" className="order-link moduleTitle" onClick={showHide}>
          {props.title}
        </a>
        <RefsOrder />
      </div>
    </>
  );
};

export default ModuleOrder;
