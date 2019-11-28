import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

export default function Register() {
    const [ register, setRegister ] = useState({ username: '', password: '' })

    let handleChange = e => {
        setRegister({
            ...register, [e.target.name]: e.target.value
        })
    }

    let handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/register', register)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            
        setRegister({
            username: '', password: ''
        })
    }

    return(

        <form onSubmit={handleSubmit}>
            Sign up for Smart Reads
            <input
            type='text'
            name='username'            
            value={register.username}
            onChange={handleChange}
            placeholder='you@yours.com'
            />
            <input
            type='password'
            name='password'            
            value={register.password}
            onChange={handleChange}
            placeholder=""
            />
            <button type='submit'>Sign up</button>
        </form>
        
    )
}