import React, { useState } from 'react'
import sytled from '../css/navbar.module.css';
import '../css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';  

function NavBar(props) {
    const [menuVisible, setMenuVisible] = useState(false);
     const [icon, setIcon] = useState(faBars);
    const toggleMenu = () =>{
        
        // !menuVisible ?  setMenuVisible(true):setMenuVisible(false)
        // setMenuVisible(true)
        if(!menuVisible) {
            setMenuVisible(true)
            setIcon(faXmark) 
        }
        else {
            setMenuVisible(false)
            setIcon(faBars) 
        }
        
       
    }

     

    return ( 

        <>
            <div className={sytled.main_nav}>
                
                <div className={sytled.logo}>
                    <h2><img src="/image/logo.png" alt="image" /></h2>
                </div>
                <nav className= {menuVisible ? `${sytled.link} ${sytled.link_mobile}` : `${sytled.link} ${sytled.link_mobile} ${sytled.toggle_link_mobile}`}>
               
                         <ul>
                            <li> <button> <Link to="/">Home </Link></button></li>
                            <li> <button> <Link to="/">About </Link></button></li>
                            <li> <button> <Link to="/test">Test </Link></button></li>
                            <li> <button> <Link to="/">Lession </Link></button></li>
                         </ul>
                </nav>

                <div className={sytled.btn_grp}>
                     
                     <Link className={sytled.linked}>Sign Up Free</Link>
                    <Link to="/login" className={sytled.linked}>Log In </Link> 
                      
                </div>

                <div className={sytled.menu_icon} onClick={toggleMenu}>
                <FontAwesomeIcon icon={icon} className="text-gray-300 mt-16" style={{width: "2rem", height: "2rem"}}/>
                

                
                </div>

               {/* <motion.div 
                            animate={{ x:'90vw', opacity: 0}} 
                            initial={{x: 0}}
                            transition={{duration: 15,  repeat: Infinity}}
                            
        
                            className={sytled.animated_cloud}>
                <FontAwesomeIcon icon={faCloud} className="text-gray-300 mr-40" style={{width: "6rem", height: "6rem"}}/>
                <FontAwesomeIcon icon={faCloudBolt} className="text-gray-300" style={{width: "6rem", height: "6rem"}}/>

                </motion.div> */}
                
            </div>

        </>
    )
}


export default NavBar