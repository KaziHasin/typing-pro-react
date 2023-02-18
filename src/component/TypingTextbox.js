import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function TypingTextbox() {
  const location = useLocation();
  const { text } = location.state;
  const list = text.split("");

  const inputRef = useRef();
  const divRef = useRef(null);
  const spanElements = useRef(null);
  useEffect(() => {
    document.body.addEventListener("click", () => {
      inputRef.current.focus();
    });
    inputRef.current.focus();
    spanElements.current = divRef.current.querySelectorAll("span");
  }, []);

  const [textcount, setTextcount] = useState(0);
  const [textcolor, setTextcolor] = useState();
  const [value, setValue] = useState("");
  const [countIndex, setCountIndex] = useState(0);
  const [prevValue, setPrevValue] = useState("");

  const successClassName = "text-green-700 bg-green-200 rounded mx-1";
  const errorClassName = "text-red-700 bg-red-200 rounded mx-1";

  const handleKeyDown = (event) => {
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
      setTextcount(textcount + 1);
    }
  };

  function handleChange(event) {
    const value = event.target.value;
    let newCountIndex = countIndex;

    if (value.length < prevValue.length) {
      newCountIndex = countIndex - 1; // decrease the index by 1
    } else {
      if (
        spanElements.current[newCountIndex].innerText ===
        value.split("")[newCountIndex]
      ) {
        spanElements.current[newCountIndex].classList.add(
          ...successClassName.split(" ")
        );
      } else {
        spanElements.current[newCountIndex].classList.add(
          ...errorClassName.split(" ")
        );
      }

      newCountIndex = countIndex + 1; // increase the index by 1
    }

    setCountIndex(newCountIndex); // update the index in the state
    setPrevValue(value); // update the previous value in the state
  }

  return (
    <>
      <div className="typing_box">
        <div className="container">
          <div className="text-box bg-white shadow-lg flex justify-center align-items-center my-20">
            <div className="text opacity-80 p-8 relative">
              <p ref={divRef}>
                {list.map((list, index) => {
                  return (
                    <>
                      <span
                        key={index}
                        className={`${index === textcount ? "blinking" : ""}`}
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
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
