import "./styles.css";
import { useState } from "react";
import Button from "../Button/Button";

function Feedback() {
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDisl] = useState(0);
  const numberLike = () => {
    setCountLike((prev) => prev + 1);
  };
  const numberDislike = () => {
    setCountDisl((prev) => prev + 1);
  };
  const resetCounts = () => {
    setCountLike(0)
    setCountDisl(0)
}

  return (
    <div className="feedback">
      <div className="like">
        <Button name="Like" btnClick={numberLike} />
        <div>{countLike}</div>
      </div>
      <div className="like">
        <Button name="Dislike" btnClick={numberDislike} />
        <div>{countDislike}</div>
      </div>
      <div className="like">
        <Button name="Reset" btnClick={resetCounts} />
      </div>
    </div>
  );
}

export default Feedback;
