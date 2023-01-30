import './App.css';
import NavBar from './component/NavBar';
import NavBarSecond from './component/NavBarSecond'
import TypingHero from './component/TypingHero'
import Login from './component/Login';

import { Routes, Route } from "react-router-dom"
import TypingTextbox from './component/TypingTextbox';


export default function App() {
    return (

        <
        >
        <
        NavBar / >
        <
        NavBarSecond / >
        <
        Routes >

        <
        Route path = "/"
        element = { < TypingHero / > }
        exact = { true }
        />   <
        Route path = "/login"
        element = { < Login / > }
        exact = { true }
        /> 


        <
        Route path = "/article"
        element = { < TypingTextbox / > }
        exact = { true }
        />




        <
        /
        Routes >



        <
        />


    )
}