import "./generalInfo.css";
// import Width from "../../../functions/width";

function GeneralInfo(props) {
  const { title } = props;
  return (
    <div className="generalInfo workarea">
      <div className="generalInfo-actives">
        <div className="generalInfo-actives-header">
          <h2>{title}</h2>
        </div>
        <div className="generalInfo-actives-userInfo">
          <div className="aboutUser">
            <div className="userInfo">
              <p className="staticInfo">ФИО:</p>
              <p className="dynamicInfo">Хваль Евгений Владимирович</p>
            </div>
            <div className="userInfo">
              <p className="staticInfo">Структурное подразделение:</p>
              <p className="dynamicInfo">Отдел информационных систем</p>
            </div>
            <div className="userInfo">
              <p className="staticInfo">Должность:</p>
              <p className="dynamicInfo">Начальник отдела</p>
            </div>
            <div className="userInfo">
              <p className="staticInfo">Электронная почта:</p>
              <p className="dynamicInfo">a400@nca.by</p>
            </div>
            <div className="userInfo">
              <p className="staticInfo">Телефон:</p>
              <p className="dynamicInfo">375 (152) 49-13-88</p>
            </div>
            <div className="userInfo">
              <p className="staticInfo">Телефон (моб.):</p>
              <p className="dynamicInfo">375 (33) 356-30-77</p>
            </div>
          </div>
          <div className="aboutOrganization">
            <div className="userInfo">
              <p className="staticInfo">ТОР:</p>
              <p className="dynamicInfo">
                РУП "Гродненское агентство по государственной регистрации и
                земельному кадастру"
              </p>
            </div>
            <div className="userInfo">
              <p className="staticInfo">Адрес:</p>
              <p className="dynamicInfo">г.Гродно, ул.Захарова,27</p>
            </div>
            <div className="userInfo">
              <p className="staticInfo">Электронная почта:</p>
              <p className="dynamicInfo">d400@nca.by</p>
            </div>
            <div className="userInfo">
              <p className="staticInfo">Телефон:</p>
              <p className="dynamicInfo">375 (152) 49-13-99</p>
            </div>
            <div className="userInfo">
              <p className="staticInfo">Индекс:</p>
              <p className="dynamicInfo">123456</p>
            </div>
            <div className="userInfo">
              <p className="staticInfo">Руководитель:</p>
              <p className="dynamicInfo">Кулаковский Валерий Леонтьевич</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
