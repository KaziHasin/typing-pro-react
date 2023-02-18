import React, { useState } from "react";
import "../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import sentence from "./sentences.json";
import { Link } from "react-router-dom";

let types = sentence.filter(
  (v, i, a) => a.findIndex((t) => t.type === v.type) === i
);

export default function TypingHero() {
  const [cardnumber, setCardNumber] = useState(0);
  const [typeName, setTypeName] = useState("beginner");

  const changeArticla = (event, key, article) => {
    setCardNumber(key);
    setTypeName(article);
  };

  const filteredData = sentence.filter((item) => item.type === typeName);
  return (
    <div>
      <div className="hero_body mt-16">
        <div className="left-box mr-4">
          <h4 className="text-xl my-2 font-bold opacity-80">Typing Lessons</h4>
          {types.map((type, index) => {
            return (
              <div
                className={
                  `card rounded-lg flex justify-between my-4 p-8 border-1 border-gray-600 align-middle cursor-pointer ` +
                  (index === cardnumber
                    ? "card-overlay text-white font-bold "
                    : "")
                }
                key={index}
                onClick={(event) => changeArticla(event, index, type.type)}
              >
                <div className="card_text align-middle text-2xl ">
                  {type.type.charAt(0).toUpperCase() + type.type.slice(1)}
                </div>
                <div className="play_icon inline-block">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="bg-yellow-400 p-4 rounded text-gray-700"
                    style={{ width: "1.4rem", height: "1.4rem" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="right-box bg-blue-500 rounded-lg px-4">
          <div className="top-part py-8">
            <div className="border border-white text-2xl text-center pt-2">
              0% Complete
            </div>
            <button className="btn bg-slate-300 p-4 rounded-md text-2xl">
              Get Certificate
            </button>
          </div>

          <div className="px-4">
            <hr />
          </div>

          <div className="lesson-box m-4">
            <motion.div
              className="lesson"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.1,
                stiffness: 100,
              }}
            >
              <h4 className="text-4xl font-bold text-white font-serif mb-4 mt-12">
                {typeName.charAt(0).toUpperCase() + typeName.slice(1)} Lessons
              </h4>

              {filteredData.map((sentences, index) => {
                const { topic, sentence } = sentences;
                return (
                  <div
                    className="sentence-box bg-white shadow-lg py-8 px-4 rounded-xl my-8 "
                    key={index}
                  >
                    <span className="inline-block w-12 h-12 rounded-full text-2xl mx-3 border-2 pt-1 text-center border-slate-200">
                      {index + 1}
                    </span>
                    <span className="text-4xl font-semibold font-mono text-gray-700 ">
                      {topic}
                    </span>
                    <Link
                      to="article"
                      state={{ text: sentence }}
                      className="cursor-pointer "
                    >
                      <span className="play_icon2 flex float-right px-16 py-3 bg-yellow-400 justify-center align-items-center rounded-md">
                        <FontAwesomeIcon
                          icon={faPlay}
                          className="p-2 rounded text-gray-700"
                          style={{ width: "1.4rem", height: "1.4rem" }}
                        />{" "}
                        <span className="text-2xl pt-1">Start</span>
                      </span>
                    </Link>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
