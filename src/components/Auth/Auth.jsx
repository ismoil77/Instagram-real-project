import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Home from '../../pages/Home/Home'

const Auth = ({page}) => {
    const navigate = useNavigate()
    if(!localStorage.getItem("access_token"))
    {
        useEffect(() =>
        {
            navigate("/")
        } , [])
    }
    // else
    // {
    //     useEffect(() =>
    //     {
    //         navigate("/basic")
    //     } , [])
    // }
}

export default Auth