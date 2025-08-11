import "./registration.css";
import Card from "../UI/card/card";
import Links from "../UI/Link/link";

function Registration(props) {
  // console.log(props);

  return (
    <div className="registration workarea">
      <div className="registration-actives">
        <div className="registration-actives-header">
          <h2>{props.title}</h2>
        </div>
        <div className="cards workarea-margin">
          <div className="cards-list">
            <Card />
          </div>
          <div className="cards-return">
            <Links text="Вернуться" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
