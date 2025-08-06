import "./workarea.css";

import Sidebar from "./Sidebar/sidebar";
import Workplace from "./Workplace/workplace";

function Workarea() {
  return (
    <div className="workarea">
      {/* <Sidebar /> */}
      <Workplace title="Информация о пользователе" />
    </div>
  );
}

export default Workarea;
