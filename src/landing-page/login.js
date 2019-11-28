import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

export default function Login () {
    const [ login, setLogin ] = useState({ username: '', password: '' })

    let handleChange = e => {
        setLogin({
            ...login, [e.target.name]: e.target.value
        })
    }

    let handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/login', login)
            .then(res => console.log(res))
            .catch(err => console.log(err))
            
        setLogin({
            username: '', password: ''
        })
    }

    return (

        <form onSubmit={handleSubmit}>
            Sign in to Smart Reads
            <input
            type='text'
            name='username'
            value={login.username}            
            onChange={handleChange}
            placeholder='you@yours.com'
            />
            <input
            type='password'
            name='password'
            value={login.password}
            onChange={handleChange}
            placeholder=''
            />
            <button type='submit'>Sign in</button>
        </form>
        
    )
}