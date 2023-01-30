import React, { useState }  from "react";
import "../css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import setence from "./sentences.json";
import TypingTextbox from "./TypingTextbox";
import { Link } from 'react-router-dom'; 

let types = setence.filter(
  (v, i, a) => a.findIndex((t) => t.type === v.type) === i
);

  
export default function TypingHero() {
const [cardnumber, setCardNumber] = useState(0)
const [increment, setIncrement] = useState(1)
    
   
     
    const changeArticla = (event, key) => {
        setCardNumber(key)
      }

      const showTypingText = (event, text) => {
      <TypingTextbox text = {text}/>      }
    
   
  return (
    <div>
      <div className="hero_body mt-16">
        <div className="left-box mr-4">
          <h4 className="text-xl my-2 font-bold opacity-80">Typing Lessons</h4>
          {types.map((type, index) => {
            return (
              <div
                className={`card rounded-lg flex justify-between my-4 p-8 border-1 border-gray-600 align-middle cursor-pointer ` +(index === cardnumber ? 'card-overlay text-white font-bold ' :'')}
                key={index} onClick={event => changeArticla(event, index)}
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
            </div>{" "}
            <button className="btn bg-slate-300 p-4 rounded-md text-2xl">
              Get Certificate
            </button>
          </div>

          <div className="px-4">
            <hr />
          </div>

          <div className="lesson-box m-4">
            
          
            {types.map((type, index) => {
                if(index === cardnumber) {
              return (
                <motion.div className="lesson" key={index}  initial={{ y: "100%" , "opacity": 0}}
      animate={{ y: 0, "opacity": 1}}
      transition={{ duration: 0.5, ease: "easeOut", delay: .1 ,stiffness: 100}}
      
     
      
      >
                  <h4 className="text-4xl font-bold text-white font-serif mb-4 mt-12">
                    {type.type.charAt(0).toUpperCase() + type.type.slice(1)} Lessons
                  </h4>
                  {setence.map((setence, index) => {
                    
                    if(type.type === setence.type) {

                     
                    return (
                        
                  <div className="sentence-box bg-white shadow-lg py-8 px-4 rounded-xl my-8 " key={index} onClick={event => showTypingText(event, setence.sentence)}> 
   

                    <span className="inline-block w-12 h-12 rounded-full text-2xl mx-3 border-2 pt-1 text-center border-slate-200">
                     {increment}
                    </span>
                    <span className="text-4xl font-semibold font-mono text-gray-700 ">{setence.topic}</span>
                    <Link to="article" state={{ text: setence.sentence }} className="cursor-pointer ">
                    <span className="play_icon2 flex float-right px-16 py-3 bg-yellow-400 justify-center align-items-center rounded-md">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="p-2 rounded text-gray-700"
                    style={{ width: "1.4rem", height: "1.4rem" }}
                  /> <span className="text-2xl pt-1">Start</span>
                </span>

                </Link>

                
                  </div>
                 
                  
                    )

                  
                    }else { return null}
                })}
                
                </motion.div>
                  

                );}else {
                    return null
                }
              
              
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
