import React, { useState } from "react";


export default function Register() {
    const [ register, setRegister ] = useState({ name: '', email: '', password: '' })


    let handleChange = e => {
        setRegister({
            [e.target.name]: e.target.value
        })
    }

    let handleSubmit = e => {
        e.preventDefault();
        setRegister({
            [e.target.name]: ""
        })
    }

    return(

        <form onSubmit={handleSubmit}>
            Sign up for Smart Reads
            <input
            type='text'
            name="name"
            placeholder='Name'
            value={register.name || ''}
            onChange={handleChange}
            />
            <input
            type='text'
            name='email'
            placeholder='you@yours.com'
            value={register.email || ''}
            onChange={handleChange}
            />
            <input
            type='password'
            name='password'
            placeholder=""
            value={register.password || ''}
            onChange={handleChange}
            />
            <button type='submit' onClick={() => handleSubmit}>Submit</button>
        </form>
    )
}

