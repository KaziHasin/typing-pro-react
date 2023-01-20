import React from 'react'
import '../css/style.css';
import styled from '../css/navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandSpock } from '@fortawesome/free-solid-svg-icons'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'



export default function NavBarSecond() {
    return ( <
        div >

        <
        div className = { styled.second_nav_main } >

        <
        div className = { `${styled.first_box} px-3` } >

        <
        div className = ' bg-blue-500 border-2 border-white text-3xl text-white my-2.5 pl-4' >
        Old Growth(5 / 5) <
        /div>

        <
        /div> <
        div className = { styled.second_box } >
        <
        div className = { styled.icon_box } >

        <
        div className = { `${styled.icon} mx-3` } >
        <
        FontAwesomeIcon icon = { faHandSpock }
        className = "text-yellow-500 p-px ring-2 ring-slate-300 rounded-full"
        style = {
            { width: "3.5rem", height: "3rem" } }
        /> <
        div >
        <
        span > Avg.Speed < /span> <
        br / >
        <
        span > 50 wpm < /span> <
        /div> <
        /div>

        <
        div className = { `${styled.icon} mx-3` } >
        <
        FontAwesomeIcon icon = { faBullseye }
        className = "text-red-600 p-px ring-2 ring-slate-300 rounded-full"
        style = {
            { width: "3.5rem", height: "3rem" } }
        /> <
        div >
        <
        span > Avg.Acc < /span> <
        br / >
        <
        span > 50 % < /span> <
        /div>

        <
        /div>

        <
        div className = { `${styled.icon} mx-3` } >
        <
        FontAwesomeIcon icon = { faClock }
        className = "text-green-500 p-px ring-2 ring-slate-300 rounded-full"
        style = {
            { width: "3.5rem", height: "3rem" } }
        /> <
        div >
        <
        span > Typing Time < /span> <
        br / >
        <
        span > 10: 40 < /span> <
        /div>

        <
        /div>




        <
        /div> <
        /div>

        <
        div className = { `${styled.third_box} relative flex justify-end` } >
        <
        div className = { `${styled.circle} ring-8 ring-slate-300 rounded-full w-40 h-40 absolute -top-16 bg-white` } >
        <
        h6 className = 'text-2xl font-bold text-yellow-500 text-center mt-8' > Daily Goal < /h6> <
        h4 className = 'text-4xl font-bold text-black text-center ' > 00: 00 < /h4>

        <
        div className = 'text-xl font-bold text-gray-400 text-center ' > /15</div >
        <
        /div> <
        /div>

        <
        /div>

        <
        /div>
    )
}