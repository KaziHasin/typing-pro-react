import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
export default function TypingTextbox() {
  const [textcount, setTextcount] = useState(0);
  const [textcolor, setTextcolor] = useState(null);
  const [beforetextright, setBeforetextright] = useState([]);
  const [beforetextwrong, setBeforetextwrong] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [beforetextrightlength, setBeforetextrightlength] = useState([]);
  const [beforetextwronglength, setBeforetextwronglength] = useState([]);
  const [wrongtext, setWrongtext] = useState();

  const location = useLocation();
  const { text } = location.state;
  // const list = [];
  const list = text.split("");

  // for (let c of text) {
  //   list.push(c);
  // }

  const inputRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", () => {
      inputRef.current.focus();
    });
    inputRef.current.focus();
  }, []);

  const handleKeyDown = (event) => {
    const typeTextCount = inputRef.current.value.length;
    const typeText = event.key;
    const lastChar = inputValue[inputValue.length - 1];
    if (event.key === "Backspace") {
      textcount > 0 ? setTextcount(textcount - 1) : setTextcount(textcount);

      if (lastChar === text.charAt(textcount - 1)) {
        const updatedRightLength = [...beforetextrightlength];
        updatedRightLength.pop();
        setBeforetextrightlength(updatedRightLength);

        const updatedRightText = [...beforetextright];
        updatedRightText.pop();
        setBeforetextright(updatedRightText);
      } else if (lastChar !== text.charAt(textcount)) {
        const updatedWrongLength = [...beforetextwronglength];
        updatedWrongLength.pop();
        setBeforetextwronglength(updatedWrongLength);

        const updatedWrongText = [...beforetextwrong];
        updatedWrongText.pop();
        setBeforetextwrong(updatedWrongText);
      }
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
      if (typeText === text.charAt(textcount)) {
        setTextcolor("right");
      }

      if (typeText !== text.charAt(textcount)) {
        setTextcolor("worng");
        setWrongtext(typeText);
      }

      if (typeText === text.charAt(typeTextCount)) {
        setBeforetextright((prev) => [...prev, typeText]);
        setBeforetextrightlength((prev) => [...prev, typeTextCount]);
      }
      if (typeText !== text.charAt(typeTextCount)) {
        setBeforetextwrong((prev) => [...prev, text.charAt(typeTextCount)]);
        setBeforetextwronglength((prev) => [...prev, typeTextCount]);
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
                  if (index === textcount) {
                    return (
                      <span key={index} className="blinking">
                        {list}
                      </span>
                    );
                  }

                  if (textcolor === "right" && index === textcount - 1) {
                    return (
                      <span
                        key={index}
                        className="text-green-700 bg-green-50 rounded"
                      >
                        {list}
                      </span>
                    );
                  }

                  if (textcolor === "worng" && index === textcount - 1) {
                    return (
                      <>
                        <motion.span
                          key={index}
                          className="text-red-700 bg-red-50 rounded"
                          //  initial={{x: 10}}
                          animate={{ rotate: 180 }}
                          transition={{ type: "spring", damping: 300 }}
                        >
                          {list}
                        </motion.span>
                        <motion.span
                          className="absolute text-red-700"
                          initial={{ y: 10, opacity: 1 }}
                          animate={{ y: 200, opacity: 0 }}
                          transition={{ duration: 0.7 }}
                        >
                          {wrongtext}
                        </motion.span>
                      </>
                    );
                  }

                  if (
                    beforetextright.indexOf(list) > -1 &&
                    beforetextrightlength.indexOf(index) > -1
                  ) {
                    return (
                      <span
                        key={index}
                        className="text-green-700 bg-green-50 rounded"
                      >
                        {list}
                      </span>
                    );
                  }

                  if (
                    beforetextwrong.indexOf(list) > -1 &&
                    beforetextwronglength.indexOf(index) > -1
                  ) {
                    return (
                      <span
                        key={index}
                        className="text-red-700 bg-red-50 rounded"
                      >
                        {list}
                      </span>
                    );
                  } else {
                    return <span key={index}> {list} </span>;
                  }
                })}
                <div className="text-box-area">
                  <textarea
                    id="textarea1"
                    className="textarea1 border border-gray-400 pl-1"
                    ref={inputRef}
                    onChange={(event) => setInputValue(event.target.value)}
                    onKeyDown={handleKeyDown}
                  ></textarea>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
