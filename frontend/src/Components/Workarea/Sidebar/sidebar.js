import "./sidebar.css";
import Button from "../../UI/Button/button";

function Sidebar(props) {
  const onClickHandler = (e) => {
    e.preventDefault();

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-modules_full">
        <h2>{props.title}</h2>
        <div className="sidebar-listOfModules">
          <div className="modules">
            <div className="module">
              {/* <a
                onClick={}
                href=""
              > */}
              <a onClick={onClickHandler} className="moduleTitle" href="">
                ЗАКАЗ УСЛУГ
              </a>
              <div className="submodule">
                <ul className="modulesList">
                  <li>
                    <a href="">
                      Государственная регистрация недвижимого имущества
                    </a>
                  </li>
                  <li>
                    <a href="">Техническая инвентаризация</a>
                  </li>
                  <li>
                    <a href="">Геодезия</a>
                  </li>
                  <li>
                    <a href="">Оценка</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="module">
              <a className="moduleTitle" href="">
                статистика
              </a>
            </div>
          </div>
          {/* <ul>
            <li className="module">
              <a href="">ЗАКАЗ УСЛУГ</a>
              <ul className="modulesList">
                <li>
                  <a href="">
                    Государственная регистрация недвижимого имущества
                  </a>
                </li>
                <li>
                  <a href="">Техническая инвентаризация</a>
                </li>
                <li>
                  <a href="">Геодезия</a>
                </li>
                <li>
                  <a href="">Оценка</a>
                </li>
              </ul>
            </li>
            <li className="module">
              <a href="">статистика</a>
            </li>
            <li>
              <a href="">Геодезия</a>
            </li>
            <li>
              <a href="">Оценка</a>
            </li>
          </ul> */}
        </div>
      </div>
      <Button type="submit" text="Выйти из системы" />
    </div>
  );
}

export default Sidebar;
