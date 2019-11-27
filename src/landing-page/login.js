import React, { useState } from 'react';

export default function Login () {
    const [ login, setLogin ] = useState({ email: '', password: '' })

    let handleChange = e => {
        setLogin({
            ...login, [e.target.name]: e.target.value
        })
    }

    let handleSubmit = e => {
        e.preventDefault()
        setLogin({
            email: '', password: ''
        })
    }

    return (

        <form onSubmit={handleSubmit}>
            Sign in to Smart Reads
            <input
            type='text'
            name='email'
            value={login.email}            
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