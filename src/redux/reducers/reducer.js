const initialState = {
    users: [
        {
            username: 'emma',
            //books saved from search results
            books: [
                {
                    title: 'Harry Potter and the Sorcer\'s Stone',
                    authors: 'J.K. Rowling',
                    rating: null,
                    ISBN: null,
                },
            ],
            //saved search phrases
            descriptions: []
        }
    ],
    isFetching: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER':
            return { ...state, users: action.user}
        case 'SAVE_SEARCH':
            return {...state, descriptions: action.description}
        case 'REQUEST_BOOKS':
            return {...state, isFetching: true};
        case 'RECEIVE_BOOKS':
            return {...state, isFetching: false};
        default:
            return state;
    }
};


export default reducer;