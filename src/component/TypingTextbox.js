import React from 'react'
import { useLocation } from 'react-router-dom';
export default function TypingTextbox() {

    const location = useLocation()
    const { city } = location.state

    return ( <
        div >
        City is { city } <
        /div>
    )
}