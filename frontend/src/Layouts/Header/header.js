import "./header.css";
import User from "./User/user";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <p>Здесь должен быть логотип</p>
        <User />
      </div>
    </div>
  );
}

export default Header;
