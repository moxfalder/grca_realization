import "./registration.css";
import Card from "../../../Components/UI/card/card";
import Links from "../../../Components/UI/Link/link";

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
            <Card
              title="Создать заказ"
              description="Модуль позволяет создать новый заказ"
            />
            <Card
              title="Новый заказ"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          provident omnis? Earum reprehenderit corporis illum?"
            />
            <Card
              title="Новый заказ"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          provident omnis? Earum reprehenderit corporis illum?"
            />
            <Card
              title="Новый заказ"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          provident omnis? Earum reprehenderit corporis illum?"
            />
            <Card
              title="Новый заказ"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          provident omnis? Earum reprehenderit corporis illum?"
            />
            <Card
              title="Новый заказ"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          provident omnis? Earum reprehenderit corporis illum?"
            />
          </div>
          <div className="cards-return">
            <Links text="На главную" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
