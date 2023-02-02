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

  const handleKeyDown = (event) => {
    const typeTextCount = inputRef.current.value.length;
    const typeText = event.key;

    if (event.key === "Backspace") {
      textcount > 0 ? setTextcount(textcount - 1) : setTextcount(textcount);
    } else {
      if (typeText === text.charAt(textcount)) {
        setTextcolor("right");
      }

      if (typeText !== text.charAt(textcount)) {
        setTextcolor("worng");
      }

      setTextcount(textcount + 1);
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
