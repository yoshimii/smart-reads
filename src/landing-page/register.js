import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
            <h1>Sign up for Smart Reads</h1>
            <p>Sign up today to start storing and improving search results based on our unique intelligent search algorithm. <a href='https://rutumulkar.com/blog/2016/NLP-ML/' target='_blank' rel="noopener noreferrer">Learn more about Artificial Intelligence</a></p>
            <div>
                <label htmlFor='user_email'>Email address</label>
                <input
                type='text'
                name='username'            
                value={register.username}
                onChange={handleChange}
                placeholder='you@yours.com'
                />
            </div>
            <div>
                <label htmlFor='user_password'>Password</label>
                <input
                type='password'
                name='password'            
                value={register.password}
                onChange={handleChange}
                placeholder=""
            />
            </div>
            <div className='registerOptions'>
                <button type='submit'>Sign up</button>
                    <div className='options'>
                        <span className='registerSpan'>Already a member?
                            <Link to='/login'>Sign in</Link>
                        </span>
                    </div>
            </div>
            
        </form>
        
    )
}