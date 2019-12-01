import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Form.css';
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
            <h1>Sign in to Smart Reads</h1>
            <div className='input email'>
                <label htmlFor='user_email'>Email address</label>
                <input
                type='text'
                name='username'
                value={login.username}            
                onChange={handleChange}
                placeholder='you@yours.com'
                />
            </div>
            <div className='input password'>
                <label htmlFor='user_password'>Password</label>
                <input
                type='password'
                name='password'
                value={login.password}
                onChange={handleChange}
                placeholder=''
                />
            </div>
            <div className='loginOptions'>
                <button type='submit'>Sign in</button>
                <div className='options'>
                    <span className='loginSpan'>Not a member?
                        <Link to='/register'>Sign up</Link>
                    </span>                    
                </div>           
            </div>            
        </form>
        
    )
}