import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function TypingTextbox() {
  const location = useLocation();
  const { text } = location.state;
  const list = text.split("");

  const inputRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", () => {
      inputRef.current.focus();
    });
    inputRef.current.focus();
  }, []);

  const [textcount, setTextcount] = useState(0);
  const [textcolor, setTextcolor] = useState();
  const [charArray, setCharArray] = useState([]);

  const handleKeyDown = (event) => {
    const typeText = event.key;

    if (event.key === "Backspace") {
      textcount > 0 ? setTextcount(textcount - 1) : setTextcount(textcount);
    } else if (
      event.key === "Shift" ||
      event.key === "CapsLock" ||
      event.key === "Control" ||
      event.key === "Tab" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "F1" ||
      event.key === "F2" ||
      event.key === "F3" ||
      event.key === "F4" ||
      event.key === "F5" ||
      event.key === "F6" ||
      event.key === "F7" ||
      event.key === "F8" ||
      event.key === "F9" ||
      event.key === "F10" ||
      event.key === "F11" ||
      event.key === "F12"
    ) {
      setTextcount(textcount);
    } else {
      setCharArray(event.target.value.split(""));
      console.log(charArray[textcount]);

      // if (typeText === text.charAt(textcount)) {
      //   setTextcolor("right");
      // }

      // if (typeText !== text.charAt(textcount)) {
      //   setTextcolor("worng");
      // }

      setTextcount(event.target.value.length);
    }
  };

  return (
    <>
      <div className="typing_box">
        <div className="container">
          <div className="text-box bg-white shadow-lg flex justify-center align-items-center my-20">
            <div className="text opacity-80 p-8 relative">
              <p>
                {list.map((list, index) => {
                  return (
                    <>
                      <span
                        key={index}
                        className={`${index === textcount ? "blinking" : ""} ${
                          textcolor === "right" && index === textcount - 1
                            ? " text-green-700 bg-green-50 rounded"
                            : ""
                        } ${
                          textcolor === "worng" && index === textcount - 1
                            ? " text-red-700 bg-red-50 rounded"
                            : ""
                        }`}
                      >
                        {list}
                      </span>
                    </>
                  );
                })}
              </p>

              <div className="text-box-area">
                <textarea
                  id="textarea1"
                  className="textarea1 border border-gray-400 pl-1"
                  ref={inputRef}
                  onKeyDown={handleKeyDown}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
