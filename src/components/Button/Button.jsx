import "./styles.css";
function Button({ name, btnClick }) {
  return (
    <button className="button" onClick={btnClick}>
      {name}
    </button>
  );
}

export default Button;
