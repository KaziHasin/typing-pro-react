import React from 'react'

export default function Login() {
    return ( <
        >

        <
        div className = "container md:w-3/4 lg:w-1/3 mx-auto px-4 my-8 shadow-lg" >
        <
        form className = "bg-white p-6 rounded-lg" >
        <
        h2 className = "text-4xl font-medium mb-4 text-center" > Login < /h2> <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 font-medium my-4 mt-8 text-2xl"
        htmlFor = "username" >
        Username <
        /label> <
        input className = "w-full border border-gray-400 py-4 px-2 rounded-lg"
        type = "text"
        id = "username"
        name = "username" /
        >
        <
        /div> <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 font-medium my-4 mt-8 text-2xl"
        htmlFor = "password" >
        Password <
        /label> <
        input className = "w-full border border-gray-400 py-4 px-2 rounded-lg"
        type = "password"
        id = "password"
        name = "password" /
        >
        <
        /div> <
        div className = "text-center" >
        <
        button className = "bg-blue-500 text-white text-4xl py-4 my-4 px-8 rounded-lg hover:bg-indigo-600" >
        Login <
        /button> < /
        div > <
        /form> < /
        div >





        <
        />
    )
}