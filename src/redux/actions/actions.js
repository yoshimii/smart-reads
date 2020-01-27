import { instanceAxios } from '../../utils/axiosInstance.js';

export const REGISTER = 'REGISTER';
export const LOGIN = 'LOG_IN';
export const SAVE_SEARCH = 'SAVE_SEARCH';
export const REQUEST_BOOKS = 'REQUEST_BOOKS';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const SAVE_BOOK = 'SAVE_BOOK';
export const SAVED_BOOK = 'SAVED_BOOK';

export const register = (user) => ({ 
    type: REGISTER, user 
    });

//keeping login and register for later use, currently dead actions
export const login = (user) => {
    return { type: LOGIN, user }
}

export function requestBooks(description) {
    return {type: REQUEST_BOOKS, description }
}

export function receiveBooks(description) {
    return {type: RECEIVE_BOOKS, description }
}

export function saveSearch(description) {
    return { type: SAVE_SEARCH, description}
}

export const saveBook = id => dispatch => {
    dispatch({ type: SAVE_BOOK, book: id});
    console.log(id)
    instanceAxios()
    .post('/user/book', id)
    .then( res => {
        dispatch({ type: SAVED_BOOK, book: res.data.books})
    })
    
}