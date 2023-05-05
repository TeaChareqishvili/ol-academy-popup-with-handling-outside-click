import "../components/Styles.scss";
import { useState } from "react";
import { Popup } from "./Popup";

function MainPage() {
  const [showPopUp, setPopUp] = useState(false);

  return (
    <div className="MainWrapper">
      <h1>
        Are you in search of a thrilling adventure, a relaxing escape, or a
        cultural exploration?{" "}
      </h1>
      <p>
        Whatever your heart desires, there's no better time to start planning
        your next trip!
      </p>
      <p>Sign Up For Free</p>
      <button onClick={() => setPopUp(true)}>Sign Up</button>
      {showPopUp && <Popup close={() => setPopUp(false)} />}
    </div>
  );
}

export { MainPage };
