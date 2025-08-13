import "./header.css";
import User from "./User/user";

// import Clock from "../../Components/clock/clock";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <p>Здесь должен быть логотип</p>
        {/* <Clock /> */}
        <User />
      </div>
    </div>
  );
}

export default Header;
