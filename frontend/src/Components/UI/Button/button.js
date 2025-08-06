import "./button.css";
function Button(props) {
  return (
    <>
      <form>
        <button type={props.type}>{props.text}</button>
      </form>
    </>
  );
}
export default Button;
