import React, { useState } from 'react';
import ResultCard from './ResultCard.js';
import './SearchBar.css';   
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import { connect } from 'react-redux';

const SearchBar = ({dispatch, state}) => {
    const [ searchPhrase, setSearchPhrase ] = useState({ description: '' })
    const [ results, setResults ] = useState([])
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({ type: 'REQUEST_BOOKS'})
        console.log(searchPhrase)
        axiosWithAuth().post('https://better-reads-bw.herokuapp.com/api/user/description', searchPhrase)
            .then( res => {
                setResults(res.data.books)
                dispatch({ type: 'RECEIVE_BOOKS' })
            })
            .then( err => console.log(err) )
        setSearchPhrase({description: ''})
    }

    const changeHandler = (e) => {
        setSearchPhrase({description: e.target.value})
    }
    console.log(results)
    return ([
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
        </form>,
        <div>
        {/* {state && <span>...Computing...Beep...Boop</span>} */}
        {!state && (
            <>
            {results.map( book => {
                console.log(typeof(book.authors))
                return <ResultCard key={book.isbn} 
                title={book.title} 
                authors={book.authors.split(' ').reverse().join(', ')} 
                rating={book.rating} 
                isbn={book.isbn}
                />
                
        })}
            </>
        )}
        
        </div>

    ])
}

const mapStateToProps = (state) => ({ state: state.isFetching })

export default connect( mapStateToProps )(SearchBar)
