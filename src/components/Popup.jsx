import "./PopUpStyle.scss";
  // import popUpImg from "../../public/assets/popup.jpeg";
import { useRef } from "react";
import { useEffect } from "react";

function Popup({ close }) {
  const popRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (popRef.current && wrapperRef.current) {
        if (
          wrapperRef.current.contains(e.target) &&
          !popRef.current.contains(e.target)
        ) {
          close();
        }
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  return (
    <div className="popUpWrapper" ref={wrapperRef}>
      <div className="popUpContent" ref={popRef}>
        <div className="image">
          <img src="/assets/popupimg.jpg" alt="travel" />
        </div>
        <div className="content">
          <h3>Sign Up</h3>
          <input type="text" placeholder="Enter Your Name" />
          <input type="text" placeholder="Enter Your Last Name" />
          <input type="email" placeholder="Enter Your Email" />
          <input type="number" placeholder="Enter Your number" />
          <button onClick={close}>Done</button>
        </div>
      </div>
    </div>
  );
}

export { Popup };
