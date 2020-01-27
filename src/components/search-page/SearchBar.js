import React, { useState } from 'react';
import ResultCard from './ResultCard.js';
import './SearchBar.css';   
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
import { connect } from 'react-redux';
import { saveBook, requestBooks, receiveBooks } from '../../redux/actions/actions.js';

const SearchBar = ({ state, saveBook, requestBooks, receiveBooks }) => {
    const [ searchPhrase, setSearchPhrase ] = useState({ description: '' })
    const [ resultsPhrase, setResultsPhrase ] = useState({ description: '' })
    const [ results, setResults ] = useState([])
    
    const submitHandler = (e) => {
        e.preventDefault()
        requestBooks()
        axiosWithAuth().post('https://better-reads-bw.herokuapp.com/api/user/description', searchPhrase)
            .then( res => {
                setResults(res.data.books)
                console.log(res.data.books)
                receiveBooks()
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
                <ResultCard id={book.id} 
                title={book.title} 
                authors={book.authors.split(' ').reverse().join(', ')} 
                rating={book.rating} 
                isbn={book.isbn}
                />
                <button onClick={() => saveBook(book.id)}>Save</button>
                </>
        })}
            </>
        )}
        
        </div>

    ])
}

const mapStateToProps = (state) => ({ state: state.isFetching })

export default connect( mapStateToProps, { saveBook, requestBooks, receiveBooks } )(SearchBar)
