import "./workplace.css";

function Workplace(props) {
  return (
    <div className="workplace">
      <div className="workplace-actives">
        <div className="workplace-actives-header">
          <h2>{props.title}</h2>
        </div>
        <div className="workplace-actives-userInfo">
          <div className="userInfoFIO">
            <p className="staticInfo">ФИО:</p>
            <p className="dynamicInfo">Хваль Евгений Владимирович</p>
          </div>
          <div className="userInfoFIO">
            <p className="staticInfo">Структурное подразделение:</p>
            <p className="dynamicInfo">Отдел информационных систем</p>
          </div>
          <div className="userInfoFIO">
            <p className="staticInfo">Должность:</p>
            <p className="dynamicInfo">Начальник отдела</p>
          </div>
          <div className="userInfoFIO">
            <p className="staticInfo">ТОР:</p>
            <p className="dynamicInfo">
              РУП "Гродненское агентство по государственной регистрации и
              земельному кадастру"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workplace;
