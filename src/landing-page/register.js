import React, { useState } from "react";

export default function Register() {
    const [ register, setRegister ] = useState({ name: '', email: '', password: '' })

    let handleChange = e => {
        setRegister({
            ...register, [e.target.name]: e.target.value
        })
    }

    let handleSubmit = e => {
        e.preventDefault()
        setRegister({
            name: '', email: '', password: ''
        })
    }

    return(

        <form onSubmit={handleSubmit}>
            Sign up for Smart Reads
            <input
            type='text'
            name="name"
            value={register.name}
            onChange={handleChange}
            placeholder='Name'
            />
            <input
            type='text'
            name='email'            
            value={register.email}
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