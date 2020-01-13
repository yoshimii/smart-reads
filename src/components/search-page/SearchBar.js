import React, { useState } from 'react';
import './SearchBar.css';   
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';

const SearchBar = () => {
    const [ searchPhrase, setSearchPhrase ] = useState({ description: '' })

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(searchPhrase)
        axiosWithAuth().post('https://better-reads-bw.herokuapp.com/api/user/description', searchPhrase)
            .then( res => console.log(res) )
            .then( err => console.log(err) )

    }

    const changeHandler = (e) => {
        setSearchPhrase({description: e.target.value})
    }

    return (
        <form className="search-bar" onSubmit={submitHandler}>
        <p>What's your vibe?</p>
        <input
        type='text'        
        name='searchPhrase'
        value={searchPhrase.description}
        onChange={changeHandler}
        placeholder="beach-side spy thriller"
        />
        <button>Search</button>
        </form>
    )
}

export default SearchBar;