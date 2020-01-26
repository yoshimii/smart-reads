import React, { useState } from 'react';
import ResultCard from './ResultCard.js';
import './SearchBar.css';   
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import { connect } from 'react-redux';

const SearchBar = ({dispatch, state}) => {
    const [ searchPhrase, setSearchPhrase ] = useState({ description: '' })
    const [ resultsPhrase, setResultsPhrase ] = useState({ description: '' })
    const [ results, setResults ] = useState([])
    
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({ type: 'REQUEST_BOOKS'})
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
        setResultsPhrase({description: e.target.value})
    }
    
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
        {!state && (
            <>
            {state === false? <p>Based on your phrase: <span>{resultsPhrase.description}</span> the bookshelf reccomends: </p>: null}
            {results.map( book => {
                return <>                
                <ResultCard key={book.isbn} 
                title={book.title} 
                authors={book.authors.split(' ').reverse().join(', ')} 
                rating={book.rating} 
                isbn={book.isbn}
                />
                {/* <button onClick={dispatch({ type: 'SAVE_BOOK' })}>Save</button> */}
                </>
        })}
            </>
        )}
        
        </div>

    ])
}

const mapStateToProps = (state) => ({ state: state.isFetching })

export default connect( mapStateToProps )(SearchBar)
